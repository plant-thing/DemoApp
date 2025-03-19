import { ProfilePage } from '@modules/game/views/ProfilePage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_game/profile')({
  component: ProfilePage,
});
