import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { CartProductsTable } from '@/components/CartDetails/CartProductsTable';
import { CartSummary } from '@/components/CartSummary/CartSummary';
import { Loader } from '@/components/Loader/Loader';
import { useCart } from '@/hooks/useCart';
import { useUpdateCart } from '@/hooks/useUpdateCart';

import styled from '@emotion/styled';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

export const CartDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: cart, isLoading, isError } = useCart(Number(id));
  const mutation = useUpdateCart();

  const [products, setProducts] = useState(cart?.products || []);

  useEffect(() => {
    if (cart) setProducts(cart.products);
  }, [cart]);

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    const updatedProducts = products.map(p => (p.id === productId ? { ...p, quantity } : p));
    setProducts(updatedProducts);

    mutation.mutate({
      id: Number(id),
      data: { merge: true, products: updatedProducts.map(p => ({ id: p.id, quantity: p.quantity })) },
    });
  };

  const handleDeleteProduct = (productId: number) => {
    const updatedProducts = products.filter(p => p.id !== productId);
    setProducts(updatedProducts);

    mutation.mutate({
      id: Number(id),
      data: { merge: true, products: updatedProducts.map(p => ({ id: p.id, quantity: p.quantity })) },
    });
  };

  if (isLoading) return <Loader />;
  if (isError || !cart)
    return (
      <PageContainer>
        Ошибка загрузки корзины.{' '}
        <Link style={{ textDecoration: 'underline' }} to='/carts'>
          На главную
        </Link>
      </PageContainer>
    );

  return (
    <PageContainer>
      <Link style={{ textDecoration: 'underline', fontSize: 20 }} to='/carts'>
        На главную
      </Link>
      <h1>Корзина {cart.id}</h1>

      <p>ID пользователя: {cart.userId}</p>

      <CartProductsTable
        products={products}
        onUpdateQuantity={handleUpdateQuantity}
        onDelete={handleDeleteProduct}
        isMutating={false}
      />

      <CartSummary products={products} />
    </PageContainer>
  );
};
