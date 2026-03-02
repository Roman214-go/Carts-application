import debounce from 'lodash.debounce';
import type { CartProduct } from '@/types/cart.types';
import styled from '@emotion/styled';

const TableWrapper = styled.div`
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: #aaa transparent;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #aaa;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #888;
  }
`;

const Table = styled.table`
  width: 100%;
  min-width: 680px;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 15px;
  color: #1a1a1a;
  table-layout: auto;
`;

const Th = styled.th`
  text-align: left;
  padding: 14px 16px;
  font-weight: 600;
  color: #333;
  background: #f8f9fa;
  border-bottom: 2px solid #e0e0e0;
  white-space: nowrap;

  &:first-of-type {
    border-top-left-radius: 8px;
  }

  &:last-of-type {
    border-top-right-radius: 8px;
  }
`;

const Td = styled.td`
  padding: 14px 16px;
  background: white;
  border-bottom: 1px solid #f0f0f0;
  vertical-align: middle;
  white-space: nowrap;

  &:last-child {
    text-align: center;
  }
`;

const Row = styled.tr`
  transition: background-color 0.12s ease;

  &:hover {
    background-color: #f9fcff;
    td {
      background-color: #f9fcff;
    }
  }

  &:last-child {
    td {
      border-bottom: none;
    }
  }

  &:last-child td:first-of-type {
    border-bottom-left-radius: 8px;
  }

  &:last-child td:last-of-type {
    border-bottom-right-radius: 8px;
  }
`;

const Input = styled.input`
  width: 80px;
  padding: 8px 10px;
  border: 1px solid #d0d5dd;
  border-radius: 6px;
  text-align: center;
  font-size: 15px;
  transition: all 0.15s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: #f2ff00;
    box-shadow: 0 0 0 3px #f2ff0015;
  }

  &:disabled {
    background: #f3f4f6;
    color: #6b7280;
  }
`;

const Button = styled.button`
  padding: 8px 14px;
  background: #f30000;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.18s ease;

  &:hover {
    background: #d70101;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #d1d5db;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

interface Props {
  products: CartProduct[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onDelete: (productId: number) => void;
  isMutating: boolean;
}

export const CartProductsTable = ({ products, onUpdateQuantity, onDelete, isMutating }: Props) => {
  const handleChange = debounce((productId: number, value: number) => {
    const qty = Math.max(0, Math.floor(value));
    if (qty === 0) {
      onDelete(productId);
    } else {
      onUpdateQuantity(productId, qty);
    }
  }, 480);

  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <Th>Название</Th>
            <Th>Цена</Th>
            <Th>Количество</Th>
            <Th>Итого</Th>
            <Th></Th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <Row key={product.id}>
              <Td>{product.title}</Td>
              <Td>${product.price.toFixed(2)}</Td>
              <Td>
                <Input
                  type='number'
                  min={0}
                  defaultValue={product.quantity}
                  disabled={isMutating}
                  onChange={e => handleChange(product.id, Number(e.target.value))}
                />
              </Td>
              <Td>
                <strong>${(product.price * product.quantity).toFixed(2)}</strong>
              </Td>
              <Td>
                <Button disabled={isMutating} onClick={() => onDelete(product.id)}>
                  Удалить
                </Button>
              </Td>
            </Row>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};
