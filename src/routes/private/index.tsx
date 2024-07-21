import { useCallback, useEffect, useState } from "react";
import * as S from './styles';

import { PrivateRouteParams, ResponseData } from "./types";

export default function PrivateRoute({ isAuthenticated, children }: PrivateRouteParams) {
  const [inputValue, setInputValue] = useState('');
  const [token, setToken] = useState('');
  const [isAuth, setisAuth] = useState(false);

  useEffect(() => {
    setisAuth(isAuthenticated() ? true : false);
    token && sessionStorage.setItem('userToken', token);
  }, [token])

  const handleSubmit = useCallback(async (event: React.MouseEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:3000/signin', {
        method: "POST",
        body: JSON.stringify({ password: inputValue }),
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      });

      const data: ResponseData = await response.json();
      setToken(data.data);
      window.location.reload();
    } catch (err) {
      if (err) throw err;
    }
  }, [inputValue]);

  return (
    <>
      {isAuth ? children :
        <S.Credentials>
          <label htmlFor="password">Insira sua credencial</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(event) => setInputValue(event.target.value)} />
          <button type="submit" onClick={handleSubmit}>Enviar</button>
        </S.Credentials>
      }
    </>
  );
}