import { ErrorBoundary } from '@/pages/ErrorBoundary';
import { AppRoutes } from './routes';
import { GlobalStyles } from '@/styles/global';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <ErrorBoundary>
      <GlobalStyles />
      <AppRoutes />
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </ErrorBoundary>
  );
};
