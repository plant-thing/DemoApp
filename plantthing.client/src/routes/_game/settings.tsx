import { SettingsPage } from '@modules/game/views/SettingsPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_game/settings')({
  component: SettingsPage,
});
