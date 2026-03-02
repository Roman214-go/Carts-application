export interface CartProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail?: string;
}

export interface Cart {
  id: number;
  userId: number;
  total: number;
  discountedTotal: number;
  totalProducts: number;
  totalQuantity: number;
  products: CartProduct[];
  isDeleted?: boolean;
  deletedOn?: string;
}

export interface GetCartsResponse {
  carts: Cart[];
  total: number;
  limit: number;
  skip: number;
}

export interface GetCartsParams {
  limit: number;
  skip: number;
}

export interface UpdateCartProduct {
  id: number;
  quantity: number;
}

export interface UpdateCartPayload {
  merge: boolean;
  products: UpdateCartProduct[];
}

export interface UpdateCartVariables {
  id: number;
  data: UpdateCartPayload;
}
