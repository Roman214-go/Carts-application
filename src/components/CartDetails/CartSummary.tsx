import type { CartProduct } from '@/types/cart.types';

import styled from '@emotion/styled';

const Summary = styled.div`
  margin-top: 24px;
  font-size: 20px;
  font-weight: bold;
`;

interface Props {
  products: CartProduct[];
}

export const CartSummary = ({ products }: Props) => {
  const total = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <Summary>
      <div>Общая сумма: ${total.toFixed(2)}</div>
    </Summary>
  );
};
