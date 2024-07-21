import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup, logDOM } from '@testing-library/react';
import MainContainer from '.';
import Header from '../Header';
import Description from '../Description';
import Photos from '../Photos';


describe('MainContainer', () => {
  afterEach(cleanup);
  it('should render Header, Description and Photos component', () => {
    render(
      <MainContainer>
        <Header />
        <Description />
        <Photos />
      </MainContainer>);
    expect(screen.getByText("Portraits")).toBeDefined();
    expect(screen.getByRole("paragraph")).toBeDefined();
    expect(screen.getAllByAltText("oi")).toBeDefined();
    console.log(logDOM());
  });
});