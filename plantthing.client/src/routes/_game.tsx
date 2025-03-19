import { GameLayout } from '@modules/game/components/GameLayout';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_game')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <GameLayout>
      <Outlet />
    </GameLayout>
  );
}
