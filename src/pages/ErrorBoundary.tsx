import { Component, ReactNode } from 'react';

import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  text-align: center;
  color: #333;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 16px;
  color: red;
`;

const Subtitle = styled.p`
  font-size: 20px;
  margin-bottom: 24px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #1d1d1d;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #2d2d2d;
  }
`;

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Caught by ErrorBoundary:', error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Title>Что-то пошло не так</Title>
          <Subtitle>Произошла ошибка в приложении.</Subtitle>
          <Button onClick={this.handleReload}>Перезагрузить страницу</Button>
        </Container>
      );
    }

    return this.props.children;
  }
}
