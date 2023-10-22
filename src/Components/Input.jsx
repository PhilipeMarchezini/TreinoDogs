import React from 'react';
import style from '../Css/input.module.css';

export const Input = ({ value, label, onChange, error, onBlur, type }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        className={style.form}
        value={value}
        id={label}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
      />
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};
