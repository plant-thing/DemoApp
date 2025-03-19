import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { GameStateProvider } from './providers/gameStateProvider';
import { routeTree } from './routeTree.gen';
const queryClient = new QueryClient();

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <GameStateProvider>
        <RouterProvider router={router} />
      </GameStateProvider>
    </QueryClientProvider>
  </StrictMode>,
);
