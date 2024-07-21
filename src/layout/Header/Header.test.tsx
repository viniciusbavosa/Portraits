import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  afterEach(cleanup);
  it('should have an h1 "Portraits"', () => {
    render(<Header />);
    expect(screen.getByText("Portraits")).toBeDefined();
  });
});