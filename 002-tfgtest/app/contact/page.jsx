'use client'
import React, { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import styles from './Page.module.css';

export default function EmailForm() {
  const [state, handleSubmit] = useForm('mqkovlvk');
  const [emailError, setEmailError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [emailHasError, setEmailHasError] = useState(false);
  const [subjectHasError, setSubjectHasError] = useState(false);
  const [messageHasError, setMessageHasError] = useState(false);

  const validateEmail = (value) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (!isValidEmail) {
      setEmailError('Ingresa un correo electrónico válido');
      setEmailHasError(true);
    } else {
      setEmailError('');
      setEmailHasError(false);
    }
  };

  const validateSubject = (value) => {
    if (value.trim() === '') {
      setSubjectError('El campo de asunto no puede estar vacío');
      setSubjectHasError(true);
    } else {
      setSubjectError('');
      setSubjectHasError(false);
    }
  };

  const validateMessage = (value) => {
    if (value.trim() === '') {
      setMessageError('El campo de mensaje no puede estar vacío');
      setMessageHasError(true);
    } else {
      setMessageError('');
      setMessageHasError(false);
    }
  };

  const handleEmailBlur = (e) => {
    validateEmail(e.target.value);
  };

  const handleSubjectBlur = (e) => {
    validateSubject(e.target.value);
  };

  const handleMessageBlur = (e) => {
    validateMessage(e.target.value);
  };

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        window.location.href = '/';
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="email">Dirección de correo electrónico</label>
      <input
        id="email"
        type="email"
        name="email"
        required
        onBlur={handleEmailBlur}
        className={`${styles.inputField} ${emailHasError ? styles.errorBorder : ''}`}
      />
      {emailError && <p className={styles.error}>{emailError}</p>}

      <label className={styles.label} htmlFor="subject">Asunto</label>
      <input
        name="subject"
        id="subject"
        required
        onBlur={handleSubjectBlur}
        className={`${styles.inputField} ${subjectHasError ? styles.errorBorder : ''}`}
      />
      {subjectError && <p className={styles.error}>{subjectError}</p>}

      <label className={styles.label} htmlFor="message">Mensaje</label>
      <textarea
        id="message"
        name="message"
        required
        onBlur={handleMessageBlur}
        className={`${styles.inputField} ${messageHasError ? styles.errorBorder : ''}`}
      />
      {messageError && <p className={styles.error}>{messageError}</p>}

      <button
        type="submit"
        disabled={state.submitting}
        className={styles.submitButton}
      >
        Enviar
      </button>

      {state.succeeded && (
        <p className={styles.successMessage}>
          ¡Gracias por unirte! Serás redirigido a la página original en 5 segundos.
        </p>
      )}
    </form>
  );
}
