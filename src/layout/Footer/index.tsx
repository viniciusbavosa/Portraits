import * as S from './styles';

export default function Footer() {
  const date = new Date();
  const currentYear = date.getUTCFullYear();

  return(
    <S.Footer>
      <p>&copy; {currentYear} Vinícius Bavosa. Todos os direitos reservados.</p>
    </S.Footer>
  );
}