import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import style from '../Css/header.module.css';
import { UserContext } from '../useContext';

const Header = () => {
  const { data, userLogout } = useContext(UserContext);
  return (
    <header className={style.header}>
      <nav className={`container ${style.nav}`}>
        <Link className={style.logo} to="/">
          <img src="src/Assets/dogs.svg" alt="Dogs" />
        </Link>

        {data ? (
          <Link to="/conta" className={style.logout}>
            <div>{data.nome} </div>
            <button onClick={userLogout}>Logout</button>
          </Link>
        ) : (
          <Link className={style.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
