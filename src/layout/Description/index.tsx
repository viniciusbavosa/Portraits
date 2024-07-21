import * as S from './styles';
import { easeIn } from 'framer-motion';

export default function Description() {

  return (
    <>
      <S.Description 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, ease: easeIn }}
        >
        <p>Aqui guardo minhas memórias através da fotografia.</p>
      </S.Description>
    </>
  );
}