import { CartsList } from '@/components/CartList/CartList';
import { Pagination } from '@/components/Pagination/Pagination';
import { useCarts } from '@/hooks/useCarts';
import { usePaginationStore } from '@/store/usePaginationStore';

import styled from '@emotion/styled';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

export const CartsPage = () => {
  const { page, limit } = usePaginationStore();
  const { data, isLoading, isError } = useCarts({ page, limit });

  if (isError) return <PageContainer>Ошибка загрузки корзин. Попробуйте позже</PageContainer>;

  return (
    <PageContainer>
      <h1>Список корзин</h1>
      <CartsList carts={data?.carts} isLoading={isLoading} skeletonCount={limit} />
      <Pagination total={data?.total ?? 0} />
    </PageContainer>
  );
};
