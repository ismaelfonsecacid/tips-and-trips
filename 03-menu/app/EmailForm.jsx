'use client'

import React, { useState } from 'react';
import { useForm } from '@formspree/react';

export default function EmailForm() {
  const [state, handleSubmit] = useForm("mqkovlvk");
  const [emailError, setEmailError] = useState('');
  const [subjectError, setSubjectError] = useState('');

  const validateEmail = (value) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (!isValidEmail) {
      setEmailError('Ingresa un correo electrónico válido');
    } else {
      setEmailError('');
    }
  };

  const validateSubject = (value) => {
    if (value.trim() === '') {
      setSubjectError('El campo de asunto no puede estar vacío');
    } else {
      setSubjectError('');
    }
  };

  const handleEmailBlur = (e) => {
    validateEmail(e.target.value);
  };

  const handleSubjectBlur = (e) => {
    validateSubject(e.target.value);
  };

  if (state.succeeded) {
    return <p>¡Gracias por unirte!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Dirección de correo electrónico</label>
      <input
        id="email"
        type="email"
        name="email"
        required
        onBlur={handleEmailBlur}
      />
      {emailError && <p>{emailError}</p>}

      <label htmlFor="subject">Asunto</label>
      <input
        name="subject"
        id="subject"
        required
        onBlur={handleSubjectBlur}
      />
      {subjectError && <p>{subjectError}</p>}

      <label htmlFor="message">Mensaje</label>
      <textarea id="message" name="message" required />

      <button type="submit" disabled={state.submitting}>Enviar</button>
    </form>
  );
}
