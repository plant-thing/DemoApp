import {
  StatsTypePerfectMetricMapping,
  StatsTypeStepMetricMapping,
} from './constants';
import { StatsResult, StatsType } from './types';

export const calculateStatLevel = (
  currentValue: number,
  statType: StatsType,
) => {
  const perfectMetric = StatsTypePerfectMetricMapping[statType];
  const steps = StatsTypeStepMetricMapping[statType] + 0.01;

  return Math.floor(Math.abs(perfectMetric - currentValue) / steps);
};

export const getStatsResultForLevel = (level: number) => {
  switch (level) {
    case 0:
      return StatsResult.perfect;
    case 1:
      return StatsResult.great;
    case 2:
      return StatsResult.good;
    default:
      return StatsResult.notQuite;
  }
};

export const calculateStatResult = (
  currentValue: number,
  statType: StatsType,
) => {
  const level = calculateStatLevel(currentValue, statType);
  return getStatsResultForLevel(level);
};
