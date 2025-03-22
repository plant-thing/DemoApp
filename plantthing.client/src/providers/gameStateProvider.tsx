import { useQuery } from '@tanstack/react-query';
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { SensorsApi } from 'src/api';
import { LevelExpMapping, StatsResultHappinessMapping } from 'src/constants';
import { calculateStatLevel, getStatsResultForLevel } from 'src/utils';
import { GameStateContext } from '../contexts';
import { LoadingPage } from '../modules/application/views/LoadingPage';
import { GameState, PlantHappiness, StatsType } from '../types';

const key = 'game.state';

export interface GameStateValue {
  saveGameState: (gameState: GameState) => Promise<void>;
  clearGameState: () => Promise<void>;
  gameState: GameState;
  currentLevel: number;
}

const defaultGameState: GameState = {
  username: 'Player1',
  plantName: 'Daisy',
  plantType: 'Snake Plant',
  plantHappiness: PlantHappiness.happy,
  coins: 24,
  gems: 3,
  currentXp: 500,
  hasClaimedYesterdayReward: false,
  currentEyes: 1,
  currentPot: 3,
  currentRoom: 7,
  purchasedItemsCode: [1, 3, 7],
  completedDailyQuestsCode: [1],
  claimedDailyQuestsCode: [],
};

function deletetPersistedGameState() {
  localStorage.removeItem(key);
}

function setPersistedGameState(gameState: GameState) {
  localStorage.setItem(key, JSON.stringify(gameState));
}

function getPersistedGameState(): GameState {
  const storedValue = localStorage.getItem(key);

  if (storedValue) {
    return JSON.parse(storedValue) as GameState;
  } else {
    return defaultGameState;
  }
}

export function GameStateProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [gameState, setGameState] = useState<GameState>(
    getPersistedGameState(),
  );

  const { data: sensor } = useQuery({
    queryKey: ['sensors', 1],
    queryFn: () => SensorsApi.getSensor(1),
    refetchInterval: 2000,
  });

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  const saveGameState = useCallback(async (gameState: GameState) => {
    setPersistedGameState(gameState);
    setGameState(gameState);
  }, []);

  const clearGameState = useCallback(async () => {
    deletetPersistedGameState();
  }, []);

  const currentLevel = useMemo(() => {
    const levels = Object.entries(LevelExpMapping).filter(
      (x) => x[1] < gameState.currentXp,
    );
    return levels.length == 0 ? 1 : Number(levels[levels.length - 1][0]);
  }, [gameState.currentXp]);

  useEffect(() => {
    if (sensor && gameState.lastSensorReading !== sensor.lastReading.created) {
      const allStatsLevel = [
        calculateStatLevel(sensor.lastReading.light, StatsType.light),
        calculateStatLevel(sensor.lastReading.phLevel, StatsType.soil),
        calculateStatLevel(
          sensor.lastReading.temperature,
          StatsType.temperature,
        ),
        calculateStatLevel(sensor.lastReading.water, StatsType.water),
      ];
      const lowestLevel = Math.max(...allStatsLevel);
      const globalStatsResult = getStatsResultForLevel(lowestLevel);

      console.log(lowestLevel);

      saveGameState({
        ...gameState,
        sensorData: sensor?.lastReading,
        lastSensorReading: sensor.lastReading.created,
        plantHappiness: StatsResultHappinessMapping[globalStatsResult],
      });
    }
  }, [gameState, saveGameState, sensor]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <GameStateContext.Provider
      value={{ gameState, currentLevel, saveGameState, clearGameState }}
    >
      {children}
    </GameStateContext.Provider>
  );
}
