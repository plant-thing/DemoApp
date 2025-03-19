import { createContext } from 'react';
import { GameStateValue } from './providers/gameStateProvider';

export const GameStateContext = createContext<GameStateValue | null>(null);
