import { PlantHappiness, StatsResult, StatsType } from './types';

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

export const RoomsImagesMapping: Record<number, string> = {
  [1]: 'bg-[url(/assets/room1.png)]',
  [2]: 'bg-[url(/assets/room2.png)]',
  [3]: 'bg-[url(/assets/room3.png)]',
};

export const SproutImagesMapping: Record<number, string> = {
  [1]: '/assets/sprout1.png',
  [2]: '/assets/sprout2.png',
  [3]: '/assets/sprout3.png',
};

export const EyesImagesMapping: Record<number, string> = {
  [1]: '/assets/eyes1.png',
  [2]: '/assets/eyes2.png',
  [3]: '/assets/eyes3.png',
};

export const PotsImagesMapping: Record<number, string> = {
  [1]: '/assets/pot1.png',
  [2]: '/assets/pot2.png',
  [3]: '/assets/pot3.png',
};
