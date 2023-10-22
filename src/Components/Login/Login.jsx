import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { LoginCreate } from './LoginCreate';
import LoginPwLost from './LoginPwLost';
import { LoginReset } from './LoginReset';

export const Login = () => {
  return (
    <div className="animacao">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPwLost />} />
        <Route path="reset" element={<LoginReset />} />
      </Routes>
    </div>
  );
};
