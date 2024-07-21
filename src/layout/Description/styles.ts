import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Description = styled(motion.section)`
  grid-row-start: 2 / 3;
  scroll-snap-align: center;
  scroll-snap-stop: always;

  p {
    text-align: center;
  }
`;