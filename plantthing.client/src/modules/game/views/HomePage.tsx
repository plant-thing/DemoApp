import { useGameState } from '@hooks/useGameState';
import { ShopItems } from 'src/constants';
import { BottomNavigation } from '../components/BottomNavigation';
import { Plant } from '../components/Plant';
import { PlantLevelDisplay } from '../components/PlantLevelDisplay';
import { YesterdayRewardPopup } from '../components/YesterdayRewardPopup';

export const HomePage = () => {
  const { gameState } = useGameState();

  const roomItem = ShopItems.find(
    (item) => item.code === gameState.currentRoom,
  );

  return (
    <div
      className={`flex bg-contain bg-center bg-no-repeat h-screen justify-center ${roomItem?.imageUrl}`}
    >
      <BottomNavigation />
      <PlantLevelDisplay />
      <div className="flex items-center w-3/4">
        <Plant />
      </div>
      <YesterdayRewardPopup />
    </div>
  );
};
