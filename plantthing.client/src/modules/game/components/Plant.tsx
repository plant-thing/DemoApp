import { useGameState } from '@hooks/useGameState';
import {
  EyesImagesMapping,
  PotsImagesMapping,
  SproutImagesMapping,
} from 'src/constants';

export const Plant = () => {
  const { gameState, currentLevel } = useGameState();

  const sproutUrl = SproutImagesMapping[currentLevel];
  const eyesUrl = EyesImagesMapping[gameState.currentEyes];
  const potUrl = PotsImagesMapping[gameState.currentEyes];

  return (
    <div className="relative w-full">
      <img src={sproutUrl} className="absolute top-0 w-full" />
      <img src={eyesUrl} className="absolute top-0 w-full" />
      <img src={potUrl} className="w-full" />
    </div>
  );
};
