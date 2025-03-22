import { useGameState } from '@hooks/useGameState';
import { ShopItems, SproutImagesMapping } from 'src/constants';

interface PlantProps {
  isWatering: boolean;
}

export const Plant = (props: PlantProps) => {
  const { gameState, currentLevel } = useGameState();

  const sproutUrl = SproutImagesMapping[currentLevel];
  const eyesItem = ShopItems.find(
    (item) => item.code === gameState.currentEyes,
  );
  const potItem = ShopItems.find((item) => item.code === gameState.currentPot);

  return (
    <div className="relative w-full max-w-xs">
      {props.isWatering && (
        <img
          src="/assets/watering.gif"
          width="75%"
          className="absolute left-1/2 top-[15%] z-40"
        />
      )}
      {gameState.currentAccessories.map((itemCode) => 
        <img src={ShopItems.find(x => x.code === itemCode)?.imageUrl} className="absolute top-0 w-full z-30"/>
      )}
      <img src={sproutUrl} className="absolute top-0 w-full z-20" />
      <img src={eyesItem?.imageUrl} className="absolute top-0 w-full z-10" />
      <img src={potItem?.imageUrl} className="w-full z-0" />
    </div>
  );
};
