import {
  StatsResultClassNameMapping,
  StatsResultNameMapping,
  StatsTypeImageMapping,
  StatsTypeNameMapping,
} from 'src/constants';
import { StatsResult, StatsType } from 'src/types';

interface StatSummaryProps {
  statType: StatsType;
  result: StatsResult;
  tip?: string;
}

const StatsResultRewardMapping: Record<StatsResult, number> = {
  [StatsResult.notQuite]: 1,
  [StatsResult.good]: 2,
  [StatsResult.great]: 3,
  [StatsResult.perfect]: 5,
};

export const StatSummary = (props: StatSummaryProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-1 items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
            <div>
              <img width={20} src={StatsTypeImageMapping[props.statType]} />
            </div>
            <span>{StatsTypeNameMapping[props.statType]}:</span>
          </div>
          <span className={StatsResultClassNameMapping[props.result]}>
            {StatsResultNameMapping[props.result]}
          </span>
        </div>
        <div className="flex items-center">
          ...{StatsResultRewardMapping[props.result]}
          <img src="/assets/coin.png" />
        </div>
      </div>
      <div>
        {props.tip && (
          <span className="text-sm text-gray-500">{props.tip}</span>
        )}
      </div>
    </div>
  );
};
