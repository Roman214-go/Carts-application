import { Link } from 'react-router-dom';

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50%      { transform: translateY(-18px) rotate(2deg); }
`;

const glitch = keyframes`
  0%   { text-shadow: 2px 0 red, -2px 0 #00fff9; }
  20%  { text-shadow: -2px 0 orange, 2px 0 #00fff9; }
  40%  { text-shadow: 2px 0 yellow, -2px 0 #00fff9; }
  60%  { text-shadow: -4px 0 green, 4px 0 #00fff9; }
  80%  { text-shadow: 4px 0 blue, -4px 0 #00fff9; }
  100% { text-shadow: 2px 0 purple, -2px 0 #00fff9; }
`;

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #dfe0ea 0%, #b5b6bc 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const Content = styled.div`
  text-align: center;
  position: relative;
  z-index: 2;
  max-width: 620px;
  padding: 2rem;
`;

const Big404 = styled.h1`
  font-size: clamp(9rem, 20vw, 16rem);
  font-weight: 900;
  margin: 0;
  line-height: 0.85;
  letter-spacing: -0.04em;
  color: transparent;
  background: linear-gradient(90deg, #a78bfa, #60a5fa, #38bdf8);
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${glitch} 2.8s infinite alternate;
  user-select: none;
`;

const Subtitle = styled.p`
  font-size: clamp(1.4rem, 4vw, 2.2rem);
  margin: 1.2rem 0 2.5rem;
  opacity: 0.92;
  font-weight: 300;
`;

const FloatingObject = styled.div`
  position: absolute;
  font-size: 8rem;
  opacity: 0.08;
  animation: ${float} 14s ease-in-out infinite;
  pointer-events: none;
  user-select: none;

  &.one {
    top: 12%;
    left: 8%;
    animation-duration: 16s;
  }
  &.two {
    bottom: 18%;
    right: 10%;
    animation-duration: 22s;
    animation-delay: -6s;
  }
  &.three {
    top: 55%;
    right: 15%;
    animation-duration: 19s;
    animation-delay: -9s;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 0.95rem 2.4rem;
  font-size: 1.15rem;
  font-weight: 600;
  color: white;
  background: #1d1d1d;
  border: none;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px) scale(1.04);
    background: #2c2c2c;
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const NotFoundPage = () => {
  return (
    <Container>
      <FloatingObject className='one'>✦</FloatingObject>
      <FloatingObject className='two'>⟡</FloatingObject>
      <FloatingObject className='three'>✧</FloatingObject>

      <Content>
        <Big404>404</Big404>
        <Subtitle>Кажется этой страницы не существует...</Subtitle>

        <Button to='/carts'>Вернуться на главную</Button>
      </Content>
    </Container>
  );
};
