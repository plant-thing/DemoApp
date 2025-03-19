import { Card, ProgressBar } from 'pixel-retroui';
import { useState } from 'react';
import {
  StatsResultClassNameMapping,
  StatsResultNameMapping,
  StatsTypeColorMapping,
  StatsTypeImageMapping,
  StatsTypeMeasureUnitMapping,
  StatsTypeNameMapping,
} from 'src/constants';
import { StatsType } from 'src/types';
import { calculateStatResult } from 'src/utils';
import { StatHelpPopup } from './StatHelpPopup';

interface LiveStatCardProps {
  maxValue: number;
  currentValue: number;
  statType: StatsType;
  tip: string;
}

export const LiveStatCard = (props: LiveStatCardProps) => {
  const result = calculateStatResult(props.currentValue, props.statType);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div onClick={handleOpenPopup}>
      <Card className="p-2">
        <div className="flex flex-col gap-6"></div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <div>
              <img width={20} src={StatsTypeImageMapping[props.statType]} />
            </div>
            <h2 className="text-lg font-semibold">
              {StatsTypeNameMapping[props.statType]}
            </h2>
          </div>
          <span className={StatsResultClassNameMapping[result]}>
            {StatsResultNameMapping[result]}
          </span>
        </div>
        <div className="flex items-center text-sm">
          <span>0</span>
          <ProgressBar
            size="md"
            color={StatsTypeColorMapping[props.statType]}
            borderColor="black"
            progress={(props.currentValue / props.maxValue) * 100}
          />
          <span>{props.maxValue}</span>
        </div>
        <div className="text-center font-semibold">
          {props.currentValue} {StatsTypeMeasureUnitMapping[props.statType]}
        </div>
      </Card>
      <StatHelpPopup
        isPopupOpen={isPopupOpen}
        onClose={handleClosePopup}
        statType={props.statType}
        tip={props.tip}
      />
    </div>
  );
};
