import { CartsList } from '@/components/Carts/CartList';
import { Pagination } from '@/components/Carts/Pagination';
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

  if (isError) return <PageContainer>Error loading carts.</PageContainer>;

  return (
    <PageContainer>
      <h1>Список корзин</h1>
      <CartsList carts={data?.carts} isLoading={isLoading} skeletonCount={limit} />
      <Pagination total={data?.total ?? 0} />
    </PageContainer>
  );
};
