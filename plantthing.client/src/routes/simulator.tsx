import { SimulatorPage } from '@modules/simulator/views/SimulatorPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/simulator')({
  component: SimulatorPage,
});
