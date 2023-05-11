import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '.';

describe('Home', () => {
  it('renders', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Home');
  });
});
