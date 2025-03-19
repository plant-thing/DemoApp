import { CoinsCounter } from './CoinsCounter';
import { GemsCounter } from './GemsCounter';

export const TopBar = () => {
  return (
    <div className="absolute top-8 w-full">
      <div className="flex flex-col gap-2">
        <CoinsCounter />
        <GemsCounter />
      </div>
    </div>
  );
};
