import { PlantWithBubble } from './modules/simulator/components/PlantWithBubble';
import { SimulatorFormCard } from './modules/simulator/components/SimulatorFormCard';

function App() {
  return (
    <div className="container mx-auto p-1">
      <div className="flex flex-col gap-4 my-8">
        <div className="flex flex-col">
          <h1 className="text-6xl font-minecraft text-center font-semibold">
            Plant Thing
          </h1>
          <PlantWithBubble bubbleText="Sensor simulator" />
        </div>
        <div className="flex flex-col">
          <SimulatorFormCard sensorId={1} />
        </div>
      </div>
    </div>
  );
}

export default App;
