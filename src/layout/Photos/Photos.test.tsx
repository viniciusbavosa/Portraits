import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup, logDOM } from '@testing-library/react';
import Photos from '.';


describe('Photos', () => {
  afterEach(cleanup);
  it('should render img elements inside a div component', () => {
    render(<Photos />);
    expect(screen.findByRole('img')).toBeDefined();
    console.log(logDOM());
  });
});