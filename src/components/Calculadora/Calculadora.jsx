// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styles from './Calculadora.module.css';
import Display from "../Display/Display"
import Botao from "../Botao/Botao"

const Calculadora = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [expression, setExpression] = useState('');

    const addDigit = (n) => {
        if (expression.endsWith('=') || displayValue === '0') {
            setExpression(n);
            setDisplayValue(n);
        } else {
            setExpression(expression + n);
            setDisplayValue(expression + n);
        }
    };

    const setOperation = (op) => {
        if (!expression || expression.endsWith('=') || ['+', '-', '*', '/'].some(o => expression.endsWith(o))) {
            return;
        } else {
            setExpression(expression + op);
            setDisplayValue(expression + op);
        }
    };

    const clearMemory = () => {
        setDisplayValue('0');
        setExpression('');
    };

    const evaluate = () => {
        try {
            const result = eval(expression);  // Simplificação do uso de eval para evitar problemas
            setDisplayValue(result.toString());
            setExpression(expression + ' =');
        } catch (e) {
            setDisplayValue('Erro');
            setExpression('');
        }
    };


    return (
        <div className={styles.calculator}>
            <Display value={displayValue} />
            <Botao label="AC" click={clearMemory} triple />
            <Botao label="/" click={() => setOperation('/')} operacao />
            <Botao label="7" click={() => addDigit('7')} />
            <Botao label="8" click={() => addDigit('8')} />
            <Botao label="9" click={() => addDigit('9')} />
            <Botao label="*" click={() => setOperation('*')} operacao />
            <Botao label="4" click={() => addDigit('4')} />
            <Botao label="5" click={() => addDigit('5')} />
            <Botao label="6" click={() => addDigit('6')} />
            <Botao label="-" click={() => setOperation('-')} operacao />
            <Botao label="1" click={() => addDigit('1')} />
            <Botao label="2" click={() => addDigit('2')} />
            <Botao label="3" click={() => addDigit('3')} />
            <Botao label="+" click={() => setOperation('+')} operacao />
            <Botao label="0" click={() => addDigit('0')} double />
            <Botao label="." click={() => addDigit('.')} />
            <Botao label="=" click={evaluate} operacao />
        </div>
    );
};

export default Calculadora;
