import { useEffect } from 'react';
import * as S from './styles';
import { MainContainerProps } from './types';

export default function MainContainer({children}: MainContainerProps) {
  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
  };

  useEffect(() => {
    document.addEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <>
      <S.MainContainer>
        {children}
      </S.MainContainer>
    </>
  );
}