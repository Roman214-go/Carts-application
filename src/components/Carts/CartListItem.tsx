import { useNavigate } from 'react-router-dom';
import type { Cart } from '@/types/cart.types';
import styled from '@emotion/styled';

const Row = styled.div`
  display: flex;
  min-width: 720px;
  align-items: center;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 11px 16px;
  transition: all 0.14s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);
    border-color: #cbd5e1;
    transform: translateY(-1px);
  }
`;

const Cell = styled.div`
  flex: 1;
  padding: 0 8px;
  min-width: 110px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:first-of-type {
    min-width: 80px;
    font-family: monospace;
  }

  &:nth-of-type(2) {
    min-width: 140px;
  }

  &:nth-of-type(3) {
    min-width: 90px;
    text-align: center;
  }

  &:nth-of-type(4) {
    min-width: 110px;
    text-align: right;
    font-weight: 500;
  }

  &:last-of-type {
    min-width: 120px;
    text-align: center;
  }
`;

const Button = styled.button`
  padding: 6px 14px;
  font-size: 14px;
  color: black;
  background: transparent;
  border: 1px solid #132;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.14s ease;

  &:hover {
    background: rgba(234, 255, 0, 0.27);
  }

  &:active {
    background: #dbeafe;
  }
`;

interface CartListItemProps {
  cart: Cart;
}

export const CartListItem = ({ cart }: CartListItemProps) => {
  const navigate = useNavigate();

  return (
    <Row>
      <Cell>{cart.id}</Cell>
      <Cell>{cart.userId}</Cell>
      <Cell>{cart.totalProducts}</Cell>
      <Cell>${Number(cart.total).toFixed(2)}</Cell>
      <Cell>
        <Button onClick={() => navigate(`/carts/${cart.id}`)}>Подробнее</Button>
      </Cell>
    </Row>
  );
};
