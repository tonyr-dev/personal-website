import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import getRouteElement from '../../utils/testing/getRouteElement';

describe('ErrorPage', () => {
  it('renders if given a bad route', () => {
    render(getRouteElement('/not-a-valid-route'));

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Oops!'
    );
  });
});
