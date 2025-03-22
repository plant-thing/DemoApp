import {
  DailyQuest,
  PlantHappiness,
  ShopItem,
  ShopItemType,
  StatsResult,
  StatsType,
} from './types';

export const StatsTypeImageMapping: Record<StatsType, string> = {
  [StatsType.light]: '/assets/light.png',
  [StatsType.soil]: '/assets/soil.png',
  [StatsType.temperature]: '/assets/temperature.png',
  [StatsType.water]: '/assets/water.png',
};

export const StatsResultNameMapping: Record<StatsResult, string> = {
  [StatsResult.notQuite]: 'Not quite',
  [StatsResult.good]: 'Good',
  [StatsResult.great]: 'Great',
  [StatsResult.perfect]: 'Perfect',
};

export const StatsResultClassNameMapping: Record<StatsResult, string> = {
  [StatsResult.notQuite]: 'font-medium text-orange-500',
  [StatsResult.good]: 'font-medium text-green-500',
  [StatsResult.great]: 'font-semibold text-green-600',
  [StatsResult.perfect]: 'font-bold text-green-700',
};

export const StatsTypeNameMapping: Record<StatsType, string> = {
  [StatsType.light]: 'Light',
  [StatsType.soil]: 'Soil',
  [StatsType.temperature]: 'Temperature',
  [StatsType.water]: 'Water',
};

export const StatsTypeMeasureUnitMapping: Record<StatsType, string> = {
  [StatsType.light]: 'Lux',
  [StatsType.soil]: 'pH',
  [StatsType.temperature]: '°C',
  [StatsType.water]: '%',
};

export const LevelExpMapping: Record<number, number> = {
  [1]: 100,
  [2]: 300,
  [3]: 600,
  [4]: 1000,
  [5]: 1500,
  [6]: 2100,
};

export const StatsTypePerfectMetricMapping: Record<StatsType, number> = {
  [StatsType.light]: 1500,
  [StatsType.soil]: 6.5,
  [StatsType.temperature]: 20,
  [StatsType.water]: 40,
};

export const StatsTypeStepMetricMapping: Record<StatsType, number> = {
  [StatsType.light]: 500,
  [StatsType.soil]: 0.5,
  [StatsType.temperature]: 4,
  [StatsType.water]: 10,
};

export const StatsTypeColorMapping: Record<StatsType, string> = {
  [StatsType.light]: 'yellow',
  [StatsType.soil]: 'green',
  [StatsType.temperature]: 'red',
  [StatsType.water]: 'blue',
};

export const StatsResultHappinessMapping: Record<StatsResult, PlantHappiness> =
  {
    [StatsResult.notQuite]: PlantHappiness.neutral,
    [StatsResult.good]: PlantHappiness.good,
    [StatsResult.great]: PlantHappiness.good,
    [StatsResult.perfect]: PlantHappiness.happy,
  };

export const MaxLuxValue = 5000;

export const MaxpHValue = 14;

export const MaxWaterValue = 100;

export const MaxTempatureValue = 40;

export const SproutImagesMapping: Record<number, string> = {
  [1]: '/assets/sprout1.png',
  [2]: '/assets/sprout2.png',
  [3]: '/assets/sprout3.png',
};

export const ShopItems: ShopItem[] = [
  //Eyes
  {
    code: 1,
    name: 'Starter eyes',
    imageUrl: '/assets/eyes1.png',
    shopImageUrl: '/assets/shop/eyes1.png',
    requiredLevel: 0,
    coinCost: 0,
    type: ShopItemType.eyes,
  },
  {
    code: 2,
    name: 'Blue eyes',
    imageUrl: '/assets/eyes2.png',
    shopImageUrl: '/assets/shop/eyes2.png',
    requiredLevel: 2,
    coinCost: 20,
    type: ShopItemType.eyes,
  },
  //Pots
  {
    code: 3,
    name: 'Starter pot',
    imageUrl: '/assets/pot1.png',
    shopImageUrl: '/assets/shop/pot1.png',
    requiredLevel: 0,
    coinCost: 0,
    type: ShopItemType.pots,
  },
  {
    code: 4,
    name: 'Blue pot',
    imageUrl: '/assets/pot2.png',
    shopImageUrl: '/assets/shop/pot2.png',
    requiredLevel: 2,
    coinCost: 20,
    type: ShopItemType.pots,
  },
  {
    code: 5,
    name: 'Cheap Red pot',
    imageUrl: '/assets/pot3.png',
    shopImageUrl: '/assets/shop/pot3.png',
    requiredLevel: 2,
    coinCost: 40,
    type: ShopItemType.pots,
  },
  {
    code: 6,
    name: 'Red pot',
    imageUrl: '/assets/pot3.png',
    shopImageUrl: '/assets/shop/pot3.png',
    requiredLevel: 3,
    coinCost: 40,
    type: ShopItemType.pots,
  },
  //Rooms
  {
    code: 7,
    name: 'Starter room',
    imageUrl: 'bg-[url(/assets/room1.png)]',
    shopImageUrl: '/assets/shop/room1.png',
    requiredLevel: 0,
    coinCost: 0,
    type: ShopItemType.rooms,
  },
  {
    code: 8,
    name: 'City night',
    imageUrl: 'bg-[url(/assets/room2.png)]',
    shopImageUrl: '/assets/shop/room2.png',
    requiredLevel: 3,
    gemsCost: 3,
    type: ShopItemType.rooms,
  },
];

export const DailyQuests: DailyQuest[] = [
  {
    code: 1,
    title: 'Daily login',
    description: 'Login daily for a reward',
    imageUrl: '/assets/quest/1.png',
    reward: {
      coins: 10,
      exp: 50,
    },
  },
  {
    code: 2,
    title: 'How is your plant?',
    description: 'Check the live stats of your plant',
    imageUrl: '/assets/quest/2.png',
    reward: {
      coins: 25,
      exp: 25,
    },
  },
  {
    code: 3,
    title: 'Water your plant',
    description: 'Water your virtual plant',
    imageUrl: '/assets/quest/3.png',
    reward: {
      gems: 1,
      exp: 50,
    },
  },
];
