import { useGameState } from '@hooks/useGameState';

export const CoinsCounter = () => {
  const { gameState } = useGameState();

  return (
    <div className="flex gap-2 px-2 py-1 bg-yellow-100 bg-opacity-80 border-4 border-white border-l-0 w-24 items-center">
      <div style={{ width: 16 }}>
        <img src="/assets/coin.png" />
      </div>
      <h3>{gameState.coins}</h3>
    </div>
  );
};
