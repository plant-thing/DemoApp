import { QuestsPage } from '@modules/game/views/QuestsPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_game/quests')({
  component: QuestsPage,
});
