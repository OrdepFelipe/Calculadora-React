/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Botao.module.css';

const Botao = ({ label, click, operacao, double, triple }) => {
  let className = styles.botao;
  if (operacao) className += ` ${styles.operacao}`;
  if (double) className += ` ${styles.double}`;
  if (triple) className += ` ${styles.triple}`;

  return (
    <button onClick={click} className={className}>
      {label}
    </button>
  );
};

export default Botao;
