import { useGameState } from '@hooks/useGameState';
import { useState } from 'react';
import { ShopItems } from 'src/constants';
import { BottomNavigation } from '../components/BottomNavigation';
import { Plant } from '../components/Plant';
import { PlantLevelDisplay } from '../components/PlantLevelDisplay';
import { WaterPlantButton } from '../components/WaterPlantButton';
import { YesterdayRewardPopup } from '../components/YesterdayRewardPopup';

export const HomePage = () => {
  const { gameState } = useGameState();
  const [isWatering, setIsWatering] = useState(false);

  const roomItem = ShopItems.find(
    (item) => item.code === gameState.currentRoom,
  );

  return (
    <div
      className={`flex bg-contain bg-center bg-no-repeat h-screen justify-center ${roomItem?.imageUrl}`}
    >
      <BottomNavigation />
      <PlantLevelDisplay />
      <WaterPlantButton setIsWatering={setIsWatering} />
      <div className="flex items-center justify-center w-3/4">
        <Plant isWatering={isWatering} />
      </div>
      <YesterdayRewardPopup />
    </div>
  );
};
