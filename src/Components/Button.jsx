import React from 'react';
import style from '../Css/button.module.css';

const Button = ({ name }) => {
  return <button className={style.btn}>{name}</button>;
};

export default Button;
