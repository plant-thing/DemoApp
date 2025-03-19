import { PlantWithBubble } from '../components/PlantWithBubble';
import { SimulatorFormCard } from '../components/SimulatorFormCard';

export const SimulatorPage = () => {
  return (
    <div className="bg-[url(/assets/background3.png)] h-screen">
      <div className="container:sm mx-auto p-1">
        <div className="flex flex-col gap-1 my-1">
          <div className="flex flex-col">
            <h1 className="text-5xl font-minecraft text-center font-semibold">
              Plant Thing
            </h1>
            <PlantWithBubble bubbleText="Sensor simulator" />
          </div>
          <div className="flex flex-col">
            <SimulatorFormCard sensorId={1} />
          </div>
        </div>
      </div>
    </div>
  );
};
