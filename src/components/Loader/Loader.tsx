import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Spinner = styled.div`
  width: 80px;
  height: 80px;
  border: 10px solid #ccc;
  border-top: 10px solid #007bff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const Loader = () => (
  <Overlay>
    <Spinner />
  </Overlay>
);
