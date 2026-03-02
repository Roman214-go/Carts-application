import { cartService } from '@/services/cart.service';
import { useQuery } from '@tanstack/react-query';

import type { Cart } from '@/types/cart.types';

export const useCart = (id: number | undefined) => {
  return useQuery<Cart>({
    queryKey: ['cart', id],
    queryFn: () => cartService.getCart(id as number),
    enabled: !!id,
  });
};
