import isAuthenticated from '~/auth/auth';
import * as S from './styles';
import { useCallback, useState } from 'react';

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);

  const environment = import.meta.env.MODE;

  const handleForm = useCallback(async (event: React.MouseEvent) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      if (file instanceof File) {
        formData.append('image', file);
      };

      const response = await fetch(`${environment === 'development' ?
        import.meta.env.VITE_APP_API_ENDPOINT_DEV :
        import.meta.env.VITE_APP_API_ENDPOINT_PROD}`,
        {
          method: 'POST',
          body: formData,
          headers: {
            'Authorization': `Bearer ${isAuthenticated()}`
          }
        });
        
        if (response.ok && response.status === 202) {
          window.location.href = import.meta.env.BASE_URL;
        };

    } catch (err) {
      if (err) throw err;
    };
  }, [file]);

  return (
    <S.Container>
      <h1>
        Envie uma imagem para ser exibida no site Portraits
      </h1>

      <form>
        <label htmlFor="photo">Escolha uma imagem:</label>
        <input
          type="file"
          id="photo"
          name="photo"
          accept=".png, .jpg, .jpeg, .webp"
          onChange={(event) => (event.target.files && event.target.files[0]) && setFile(event.target.files[0])}
        />
        <button type="submit" onClick={handleForm}>Enviar</button>
      </form>
    </S.Container>
  );
}