import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component tests', () => {
  it('App renders without error', () => {
    render(<App />);

    expect(screen.getByTestId('app')).toBeInTheDocument();
  });
});
