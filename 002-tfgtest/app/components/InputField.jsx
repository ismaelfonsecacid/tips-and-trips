import React from 'react';

function InputField({ label, type, name, value, onChange, required, error, errorMessage }) {
  return (
    <div>
      <label>
        {label}:
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={error ? 'error' : ''}
        />
      </label>
    </div>
  );
}

export default InputField;
