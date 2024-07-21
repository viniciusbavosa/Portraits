import { easeIn } from 'framer-motion';
import * as S from './styles';

export default function Header() {

  return (
    <>
      <S.Header
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1}}
        transition={{ delay: 0.2, ease: easeIn }}
        >
        <h1>Portraits</h1>
      </S.Header>
    </>
  );
}