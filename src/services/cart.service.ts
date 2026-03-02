import { api } from './api';

import type { Cart, GetCartsResponse, GetCartsParams, UpdateCartPayload } from '@/types/cart.types';

export const cartService = {
  async getCarts(params: GetCartsParams): Promise<GetCartsResponse> {
    const { limit, skip } = params;
    const response = await api.get<GetCartsResponse>(`/carts?limit=${limit}&skip=${skip}`);
    return response.data;
  },

  async getCart(id: number): Promise<Cart> {
    const response = await api.get<Cart>(`/carts/${id}`);
    return response.data;
  },

  async updateCart(id: number, payload: UpdateCartPayload): Promise<Cart> {
    const response = await api.put<Cart>(`/carts/${id}`, payload);
    return response.data;
  },
};
