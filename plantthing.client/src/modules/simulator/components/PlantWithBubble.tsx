import { Bubble } from "pixel-retroui";

interface Props {
  bubbleText: string;
}

export const PlantWithBubble = (props: Props) => {
  return (
    <div className="flex flex-row justify-center items-center p-2">
      <img src="/assets/plant.png" width="50px" />
      <Bubble direction="left">{props.bubbleText}</Bubble>
    </div>
  );
};
