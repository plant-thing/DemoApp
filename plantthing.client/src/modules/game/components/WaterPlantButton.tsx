import { useGameState } from '@hooks/useGameState';
import { Dispatch, SetStateAction } from 'react';

interface WaterPlantButtonProps {
  setIsWatering: Dispatch<SetStateAction<boolean>>;
}

export const WaterPlantButton = (props: WaterPlantButtonProps) => {
  const { gameState, saveGameState } = useGameState();

  const hasWateredPlantToday = gameState.completedDailyQuestsCode.includes(3);

  const handleOnClick = () => {
    props.setIsWatering(true);
    setTimeout(() => {
      props.setIsWatering(false);
      saveGameState({
        ...gameState,
        completedDailyQuestsCode: [...gameState.completedDailyQuestsCode, 3],
      });
    }, 2000);
  };

  if (hasWateredPlantToday) return;

  return (
    <div className="absolute top-48 w-full z-50 px-2">
      <div
        onClick={handleOnClick}
        className="w-16 p-2 border-2 border-blue-500 bg-blue-200 rounded-md bg-opacity-80"
      >
        <div className="flex flex-col gap-2">
          <img src="/assets/water-can.png" />
        </div>
      </div>
    </div>
  );
};
