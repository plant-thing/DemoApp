import { BackButton } from '@components/BackButton';
import { useGameState } from '@hooks/useGameState';
import { useSearch } from '@tanstack/react-router';
import { ShopTabButton } from '../components/ShopTabButton';

export const ShopPage = () => {
  const { gameState } = useGameState();
  const { type } = useSearch({ from: '/_game/shop' });

  return (
    <div className="flex bg-[url(/assets/background1.png)] grow justify-center animate-bg">
      <BackButton to="/" />

      <div className="container mx-auto p-1 flex flex-col gap-2 pt-32 pb-8">
        <h1 className="text-3xl font-minecraft text-center font-semibold">
          Shop
        </h1>
        <div className="flex justify-center">
          <ShopTabButton title="Pots" search="pots" />
          <ShopTabButton title="Eyes" search="eyes" />
          <ShopTabButton title="Rooms" search="rooms" />
          <ShopTabButton title="Others" search="others" />
        </div>
      </div>
    </div>
  );
};
