import { createContext, useCallback, useEffect, useState } from 'react';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';

export const UserContext = createContext();
export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function userLogin(username, password) {
    const { options, url } = TOKEN_POST({ username, password });
    try {
      setLoading(true);
      setError(false);
      setLogin(true);
      const response = await fetch(url, options);
      const { token } = await response.json();
      if (!response.ok) throw new Error('Erro no token');
      window.localStorage.setItem('token', token);
      getUser(token);
    } catch (err) {
      setError('Erro no UserLogin');
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  const userLogout = useCallback(async function () {
    setData(null);
    setError(null);
    setLogin(false);
    setLoading(false);
    window.localStorage.removeItem('token');
  });
  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        const { url, options } = TOKEN_VALIDATE_POST(token);
        try {
          setError(false);
          setLoading(true);
          const response = await fetch(url, options);
          if (!response.ok) {
            throw new Error('Errou no autoLogin');
          }
          await getUser(token);
        } catch (err) {
          setLoading(false);
          setError(err.message);
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, data, loading, error, userLogout, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
