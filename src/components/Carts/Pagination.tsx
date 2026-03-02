import { usePaginationStore } from '@/store/usePaginationStore';
import { GrNext, GrPrevious } from 'react-icons/gr';

import styled from '@emotion/styled';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 24px;
`;

const Button = styled.button<{ disabled?: boolean }>`
  color: black;
  font-size: 20px;
  border: none;
  background: none;

  &:hover:enabled {
    color: green;
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

interface PaginationProps {
  total: number;
}

export const Pagination = ({ total }: PaginationProps) => {
  const { page, limit, setPage } = usePaginationStore();
  const totalPages = Math.ceil(total / limit);

  return (
    <PaginationWrapper>
      <Button disabled={page <= 1} onClick={() => setPage(page - 1)}>
        <GrPrevious />
      </Button>
      <span>
        {page} / {totalPages}
      </span>
      <Button disabled={page >= totalPages} onClick={() => setPage(page + 1)}>
        <GrNext />
      </Button>
    </PaginationWrapper>
  );
};
