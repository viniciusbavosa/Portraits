import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Header = styled(motion.header)`
  grid-row: 1 / 2;
  scroll-snap-align: center;
  scroll-snap-stop: always;

  h1 {
    font-weight: 300;
    font-style: italic;
  }
`;