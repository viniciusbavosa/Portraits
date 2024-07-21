import styled from "styled-components";

export const Loading = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: relative;

  h1 {
    font-weight: 300;
    font-style: italic;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;