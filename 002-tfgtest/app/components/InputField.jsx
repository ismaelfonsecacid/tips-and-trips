
// InputField.js
import React from 'react';
import styles from './InputField.module.css';

function InputField({ label, type, name, value, onChange, required, disabled, error,placeHolder }) {
  const errorClass = error ? styles.error : '';

  return (
    <div>
      <label>
        {label}:
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required
          className={`${styles.input} ${errorClass}`}
          disabled={disabled}
          placeholder={placeHolder}
        />
      </label>
    </div>
  );
}

export default InputField;