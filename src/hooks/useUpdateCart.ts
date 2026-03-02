import { useMutation, useQueryClient } from '@tanstack/react-query';
import { cartService } from '@/services/cart.service';

import type { UpdateCartVariables } from '@/types/cart.types';
import { toast } from 'react-toastify';

export const useUpdateCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: UpdateCartVariables) => cartService.updateCart(id, data),

    onSuccess: updatedCart => {
      queryClient.setQueryData(['cart', updatedCart.id], updatedCart);

      queryClient.invalidateQueries({ queryKey: ['carts'] });
      toast.success('Товар был успешно обновлен');
    },
    onError: () => {
      toast.error('Ошибка при обновлении товара');
    },
  });
};
