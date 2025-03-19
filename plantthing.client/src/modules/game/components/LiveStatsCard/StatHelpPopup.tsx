import { Popup } from 'pixel-retroui';
import {
  StatsTypeImageMapping,
  StatsTypeMeasureUnitMapping,
  StatsTypeNameMapping,
  StatsTypePerfectMetricMapping,
  StatsTypeStepMetricMapping,
} from 'src/constants';
import { StatsType } from 'src/types';
import { PlantWithBubble } from '../PlantWithBubble';

interface StatHelpPopupProps {
  isPopupOpen: boolean;
  onClose: () => void;
  statType: StatsType;
  tip: string;
}

export const StatHelpPopup = (props: StatHelpPopupProps) => {
  const perfectValue = StatsTypePerfectMetricMapping[props.statType];
  const stepMetric = StatsTypeStepMetricMapping[props.statType];
  const unit = StatsTypeMeasureUnitMapping[props.statType];

  return (
    <Popup isOpen={props.isPopupOpen} onClose={props.onClose} className="p-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-1">
          <div>
            <img width={32} src={StatsTypeImageMapping[props.statType]} />
          </div>
          <h1 className="text-3xl font-semibold">
            {StatsTypeNameMapping[props.statType]}
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Prefered values</h2>
          <p>
            Value should be between{' '}
            <strong>
              {perfectValue - stepMetric}
              {unit}
            </strong>{' '}
            and{' '}
            <strong>
              {perfectValue + stepMetric}
              {unit}
            </strong>
          </p>
        </div>
        <PlantWithBubble bubbleText={props.tip} />
      </div>
    </Popup>
  );
};
