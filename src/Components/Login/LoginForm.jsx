import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../Input';
import Button from '../Button';
import style from '../../Css/loginForm.module.css';
import useForm from '../../Hooks/useForm';
import { TOKEN_POST, API_URL, USER_GET } from '../../api';
import { UserContext } from '../../useContext';

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section>
      <h1 className={style.title}>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" {...username} />
        <Input label="Senha" type="password" {...password} />
        {loading ? <Button name="Carregando ...." /> : <Button name="Entrar" />}
      </form>
      {error ? <p>{error}</p> : null}
      <div style={{ marginBottom: '3rem' }}>
        <Link to="/login/perdeu">Perdeu a senha?</Link>
      </div>

      <h2 style={{ marginBottom: '2rem' }}>Cadastre-se</h2>
      <span style={{ marginBottom: '1.2rem', display: 'block' }}>
        Ainda não possui conta ? Cadastre-se agora
      </span>
      <Link to="/login/criar">
        <Button name="Cadastro" />
      </Link>
    </section>
  );
};
