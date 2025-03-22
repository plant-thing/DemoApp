import { useGameState } from '@hooks/useGameState';
import { Link } from '@tanstack/react-router';
import { ProgressBar } from 'pixel-retroui';
import { LevelExpMapping } from 'src/constants';
import { PlantHappiness } from 'src/types';

const HappinessBgColorMapping: Record<PlantHappiness, string> = {
  [PlantHappiness.happy]: 'bg-green-500',
  [PlantHappiness.good]: 'bg-green-300',
  [PlantHappiness.neutral]: 'bg-yellow-500',
};

const HappinessBorderColorMapping: Record<PlantHappiness, string> = {
  [PlantHappiness.happy]: 'border-green-500',
  [PlantHappiness.good]: 'border-green-300',
  [PlantHappiness.neutral]: 'border-yellow-500',
};

const HappinessImagesMapping: Record<PlantHappiness, string> = {
  [PlantHappiness.happy]: 'happy.png',
  [PlantHappiness.good]: 'smile.png',
  [PlantHappiness.neutral]: 'neutral.png',
};

export const PlantLevelDisplay = () => {
  const { gameState, currentLevel } = useGameState();

  const bgColor = HappinessBgColorMapping[gameState.plantHappiness];
  const borderColor = HappinessBorderColorMapping[gameState.plantHappiness];
  const image = HappinessImagesMapping[gameState.plantHappiness];

  const nextLevelXpNeeded = LevelExpMapping[currentLevel + 1];

  return (
    <div className="absolute top-32 w-full z-40">
      <div className="flex flex-col gap-2">
        <Link
          to="/profile"
          className={`flex gap-1 bg-yellow-100 bg-opacity-80 border-2 w-52 ${borderColor} border-l-0 rounded-md rounded-l-none`}
        >
          <div
            style={{ width: 48 }}
            className={`${bgColor} flex items-center justify-center`}
          >
            <img src={`/assets/${image}`} />
          </div>
          <div className="flex flex-col p-1 grow">
            <div className="flex text-sm justify-between">
              <h3 className="font-semibold w-24 truncate">
                {gameState.plantName}
              </h3>
              <span className="text-xs">Lvl {currentLevel}</span>
            </div>
            <ProgressBar
              size="sm"
              color="green"
              borderColor="green"
              progress={(gameState.currentXp / nextLevelXpNeeded) * 100}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
