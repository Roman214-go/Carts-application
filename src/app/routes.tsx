import { Route, Routes, Navigate } from 'react-router-dom';

import { CartsPage } from '@/pages/CartsPage';
import { CartDetailsPage } from '@/pages/CartDetailsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/carts' replace />} />
      <Route path='/carts' element={<CartsPage />} />
      <Route path='/carts/:id' element={<CartDetailsPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};
