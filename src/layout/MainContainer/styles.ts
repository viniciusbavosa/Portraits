import styled from 'styled-components';

export const MainContainer = styled.main`
  min-block-size: 100vh;
  display: grid;
  grid-template-columns: minmax(100px, 100vw);
  grid-template-rows: repeat(2, minmax(100px, 100vh)) 1fr;
  place-items: center;
  padding: 30px;
`;