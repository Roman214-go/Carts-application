import { CartListItem } from './CartListItem';
import Skeleton from 'react-loading-skeleton';

import type { Cart } from '@/types/cart.types';

import 'react-loading-skeleton/dist/skeleton.css';
import styled from '@emotion/styled';

const ScrollWrapper = styled.div`
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: #aaa #f5f5f5;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f5f5f5;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #aaa;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #888;
  }
`;

const ListContainer = styled.div`
  min-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const HeaderRow = styled.div`
  display: flex;
  min-width: 720px;
  background-color: #f8f9fa;
  border-radius: 8px;
  font-weight: 600;
  color: #333;
  padding: 12px 16px;
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  min-width: 720px;
  align-items: center;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 11px 16px;
  transition: all 0.12s ease;

  &:hover {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    border-color: #d1d5db;
  }
`;

const Cell = styled.div`
  flex: 1;
  padding: 5px 8px;
  min-width: 110px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:first-of-type {
    min-width: 80px;
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

interface CartsListProps {
  carts?: Cart[];
  isLoading?: boolean;
  skeletonCount?: number;
}

export const CartsList = ({ carts, isLoading = false, skeletonCount = 5 }: CartsListProps) => {
  return (
    <ScrollWrapper>
      <ListContainer>
        <HeaderRow>
          <Cell>ID</Cell>
          <Cell>Пользователь</Cell>
          <Cell>Товаров</Cell>
          <Cell>Цена</Cell>
          <Cell>Действия</Cell>
        </HeaderRow>

        {isLoading &&
          Array.from({ length: skeletonCount }).map((_, i) => (
            <Row key={i}>
              <Cell>
                <Skeleton width={50} />
              </Cell>
              <Cell>
                <Skeleton width={100} />
              </Cell>
              <Cell>
                <Skeleton width={60} />
              </Cell>
              <Cell>
                <Skeleton width={80} />
              </Cell>
              <Cell>
                <Skeleton width={90} />
              </Cell>
            </Row>
          ))}

        {!isLoading && carts?.map(cart => <CartListItem key={cart.id} cart={cart} />)}
      </ListContainer>
    </ScrollWrapper>
  );
};
