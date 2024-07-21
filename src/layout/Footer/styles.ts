import styled from "styled-components";

export const Footer = styled.footer`
  margin-top: 30px;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  p {
    font-size: clamp(0.6rem, 1.2vw, 1rem);
    font-weight: 400;
    font-style: italic;
  }
`;