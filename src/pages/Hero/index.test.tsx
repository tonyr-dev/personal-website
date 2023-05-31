import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '.';

describe('Home', () => {
  it('renders', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Home');
  });
});
