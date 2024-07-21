import styled from 'styled-components';
import { motion } from 'framer-motion';


export const PhotosContainer = styled(motion.ul)`

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 0 30px;
  place-items: center;
  list-style: none;

  li > div {
    display: inline-block;
    position: relative;
  }

  div > div {
    position: absolute;
    background-color: tr;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  li > div > img {
    box-shadow: 0 0 8px 1px rgba(0,0,0,0.5);
    max-width: 100%;
  }
`;