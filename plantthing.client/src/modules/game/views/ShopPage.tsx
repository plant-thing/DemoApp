import { BackButton } from '@components/BackButton';
import { useSearch } from '@tanstack/react-router';
import { ShopItems } from 'src/constants';
import { ShopItemType } from 'src/types';
import { ShopItemCard } from '../components/ShopItemCard';
import { ShopTabButton } from '../components/ShopTabButton';

const SearchShopItemTypeMapping: Record<string, ShopItemType> = {
  ['pots']: ShopItemType.pots,
  ['eyes']: ShopItemType.eyes,
  ['rooms']: ShopItemType.rooms,
  ['others']: ShopItemType.others,
};

export const ShopPage = () => {
  const { type } = useSearch({ from: '/_game/shop' });

  const filterType = SearchShopItemTypeMapping[type] ?? ShopItemType.eyes;
  const filteredShopItems = ShopItems.filter(
    (item) => item.type === filterType,
  );

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
        <div className="flex flex-col gap-2 py-2">
          {filteredShopItems.map((item) => {
            return <ShopItemCard key={item.code} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
