import { useQuery } from '@tanstack/react-query';
import { Button, Popup } from 'pixel-retroui';
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
  currentAccessories: [],
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
  const [isLevelUpPopupOpen, setIsLevelUpPopupOpen] = useState(false);
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

  const currentLevel = useMemo(() => {
    const levels = Object.entries(LevelExpMapping).filter(
      (x) => x[1] <= gameState.currentXp,
    );
    return levels.length == 0 ? 1 : Number(levels[levels.length - 1][0]);
  }, [gameState.currentXp]);

  const saveGameState = useCallback(
    async (gameState: GameState) => {
      const nextLevelXp = LevelExpMapping[currentLevel + 1];

      setPersistedGameState(gameState);
      setGameState(gameState);

      if (gameState.currentXp >= nextLevelXp) {
        setIsLevelUpPopupOpen(true);
      }
    },
    [currentLevel],
  );

  const clearGameState = useCallback(async () => {
    deletetPersistedGameState();
  }, []);

  const handleLevelupClose = () => {
    setIsLevelUpPopupOpen(false);
  };

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
      <Popup
        isOpen={isLevelUpPopupOpen}
        onClose={() => {}}
        closeButtonText=""
        className="p-4"
      >
        <div className="flex flex-col justify-center gap-4">
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-2xl text-green-500 font-minecraft text-center font-semibold">
              You have level up
            </h1>
            <h3 className="text-xl font-minecraft text-center">
              You are now level
            </h3>
            <h2 className="text-6xl font-semibold font-minecraft text-center">
              {currentLevel}
            </h2>
            <h4 className="font-bold">New</h4>
            <ul className="list-disc">
              <li>Your virtual plant has grown</li>
              <li>Your have unlocked new items in the shop</li>
            </ul>
            <Button onClick={handleLevelupClose} className="bg-blue-500">
              Ok
            </Button>
          </div>
        </div>
      </Popup>
    </GameStateContext.Provider>
  );
}
