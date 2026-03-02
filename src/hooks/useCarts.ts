import { cartService } from '@/services/cart.service';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import type { GetCartsResponse } from '@/types/cart.types';

interface UseCartsParams {
  page: number;
  limit: number;
}

export const useCarts = ({ page, limit }: UseCartsParams) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['carts', page, limit],
    queryFn: () => cartService.getCarts({ skip: page, limit }),
    select: (serverData: GetCartsResponse) => {
      const cached = queryClient.getQueryData<GetCartsResponse>(['carts']);
      if (!cached) return serverData;

      const mergedCarts = serverData.carts.map(c => cached.carts.find(cc => cc.id === c.id) ?? c);

      return { ...serverData, carts: mergedCarts };
    },
  });
};
