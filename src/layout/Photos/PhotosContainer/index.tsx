import { useEffect, useState } from 'react';
import * as S from './styles';
import { ImageProps } from './types';
import { fetchData } from '~/utils';
import { motion } from 'framer-motion';

export default function PhotosContainer() {
  const [imageList, setImageList] = useState<ImageProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
      fetchData({ currentIndex, setImageList, setCurrentIndex, setError });

      if (error) {
        throw Error('Erro ao buscar dados: ' + error);
      }

  }, [currentIndex, error]);


  return (
    <>
      <S.PhotosContainer>
        {imageList.map((image) => (
          <li key={image.id}>
              <div>
                <motion.img
                  src={image.url} 
                  alt={image.alt} 
                />
                <motion.div></motion.div>
              </div>
            </li>
        ))}
      </S.PhotosContainer>
    </>
  );
}