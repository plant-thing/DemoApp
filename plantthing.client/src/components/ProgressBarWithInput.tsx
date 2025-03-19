import { Input, ProgressBar } from "pixel-retroui";

interface Props {
    label: string;
    value: number;
    min: number;
    max: number;
    step: number;
    progressBarColor: string | undefined;
    onChange: (newValue: number) => void;
  }

export const ProgressBarWithInput = (props: Props) => {

    return (
        <div className="flex flex-row gap-4">
            <div className="flex flex-col grow">
                <h3 className="text-1xl font-minecraft font-semibold">{props.label}</h3>
                <ProgressBar
                size="md"
                color={props.progressBarColor}
                borderColor="black"
                progress={(1 / props.max) * props.value * 100}
                />
            </div>
            <Input
                value={props.value}
                onChange={(e) => props.onChange(isNaN(e.target.valueAsNumber) ? 0 : e.target.valueAsNumber)}
                className="w-32"
                inputMode="numeric"
                step={props.step}
                type="number"
                min={props.min}
                max={props.max}
            />
        </div>
    );
}