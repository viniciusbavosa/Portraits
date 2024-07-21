import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup, logDOM } from '@testing-library/react';
import Description from '.';


describe('Description', () => {
  afterEach(cleanup);
  it('should render a paragraph', () => {
    render(<Description />);

    expect(screen.findByRole('paragraph')).toBeDefined();
    console.log(logDOM());
  });
});