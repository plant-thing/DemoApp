import { BackButton } from '@components/BackButton';
import { useGameState } from '@hooks/useGameState';
import { Card, ProgressBar } from 'pixel-retroui';
import { useEffect } from 'react';
import {
  LevelExpMapping,
  MaxLuxValue,
  MaxpHValue,
  MaxTempatureValue,
  MaxWaterValue,
} from 'src/constants';
import { StatsType } from 'src/types';
import { LiveStatCard } from '../components/LiveStatsCard';

export const ProfilePage = () => {
  const { gameState, currentLevel, saveGameState } = useGameState();

  const nextLevelXpNeeded = LevelExpMapping[currentLevel + 1];

  useEffect(() => {
    if (!gameState.completedDailyQuestsCode.includes(2)) {
      saveGameState({
        ...gameState,
        completedDailyQuestsCode: [...gameState.completedDailyQuestsCode, 2],
      });
    }
  }, [gameState, saveGameState]);

  return (
    <div className="flex bg-[url(/assets/background2.png)] grow justify-center animate-bg">
      <BackButton to="/" />

      <div className="container mx-auto p-1 flex flex-col gap-2 pt-32 pb-8">
        <h1 className="text-3xl font-minecraft text-center font-semibold">
          {gameState.plantName}
        </h1>
        <Card className="p-2">
          <div className="flex flex-col gap-6"></div>
          <h2 className="text-lg font-semibold">Level {currentLevel}</h2>
          <ProgressBar
            size="md"
            color="green"
            borderColor="black"
            progress={(gameState.currentXp / nextLevelXpNeeded) * 100}
          />
          <div className="flex gap-2">
            <span className="font-bold">Current XP:</span>
            <span>{gameState.currentXp}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">Next level XP:</span>
            <span>{nextLevelXpNeeded}</span>
          </div>
        </Card>
        <h2 className="text-2xl font-minecraft font-semibold pt-4 px-2">
          Live stats
        </h2>
        <LiveStatCard
          currentValue={gameState.sensorData?.water ?? 0}
          maxValue={MaxWaterValue}
          statType={StatsType.water}
          tip="Don't forget to water your plant, but don't water them to much."
        />
        <LiveStatCard
          currentValue={gameState.sensorData?.light ?? 0}
          maxValue={MaxLuxValue}
          statType={StatsType.light}
          tip="Your plant needs sunlight, but not too much"
        />
        <LiveStatCard
          currentValue={gameState.sensorData?.temperature ?? 0}
          maxValue={MaxTempatureValue}
          statType={StatsType.temperature}
          tip="A nice warm room is what your plant likes"
        />
        <LiveStatCard
          currentValue={gameState.sensorData?.phLevel ?? 0}
          maxValue={MaxpHValue}
          statType={StatsType.soil}
          tip="The soil needs to be well balanced"
        />
      </div>
    </div>
  );
};
