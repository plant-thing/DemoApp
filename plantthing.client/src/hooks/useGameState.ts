import { useContext } from 'react';
import { GameStateContext } from '../contexts';

export function useGameState() {
  const context = useContext(GameStateContext);
  if (!context) {
    throw new Error('useGameState must be used within an GameStateProvider');
  }
  return context;
}
