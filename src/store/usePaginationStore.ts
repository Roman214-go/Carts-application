import { create } from 'zustand';

interface PaginationState {
  page: number;
  limit: number;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
}

export const usePaginationStore = create<PaginationState>(set => ({
  page: 1,
  limit: 5,

  setPage: page => set({ page }),
  setLimit: limit => set({ limit, page: 1 }),
}));
