import { useGameState } from '@hooks/useGameState';
import { ShopItems, SproutImagesMapping } from 'src/constants';

export const Plant = () => {
  const { gameState, currentLevel } = useGameState();

  const sproutUrl = SproutImagesMapping[currentLevel];
  const eyesItem = ShopItems.find(
    (item) => item.code === gameState.currentEyes,
  );
  const potItem = ShopItems.find((item) => item.code === gameState.currentPot);

  return (
    <div className="relative w-full">
      <img src={sproutUrl} className="absolute top-0 w-full" />
      <img src={eyesItem?.imageUrl} className="absolute top-0 w-full" />
      <img src={potItem?.imageUrl} className="w-full" />
    </div>
  );
};
