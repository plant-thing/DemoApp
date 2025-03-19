import { ShopPage } from '@modules/game/views/ShopPage';
import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

const shopSearchSchema = z.object({
  type: z.string().catch('pots'),
});

export const Route = createFileRoute('/_game/shop')({
  component: ShopPage,
  validateSearch: shopSearchSchema,
});
