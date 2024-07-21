import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup, logDOM } from '@testing-library/react';
import PhotosContainer from '.';

describe('PhotosContainer', () => {
  afterEach(cleanup);
  it('should render images', () => {
    render(<PhotosContainer />);
    expect(screen.findAllByRole('img')).toBeDefined();
    console.log(logDOM());
  });
});