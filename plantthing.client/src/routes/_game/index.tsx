import { HomePage } from '@modules/game/views/HomePage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_game/')({
  component: HomePage,
});
