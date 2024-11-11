import React from 'react';
import styles from './Input.module.css';

const Input = ({id, label, placeholder, inputType, mode, value, min, step, symbol, onChange}) => {
    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor={id}>{label}</label>
            <div
                className={styles.inputContainer}
                style={{"--input-symbol": `"${symbol || ' '}"`}}>
                <input
                    id={id}
                    className={styles.input}
                    placeholder={placeholder}
                    type={inputType}
                    inputMode={mode}
                    value={value}
                    min={min}
                    step={step}
                    onChange={onChange}/>
            </div>
        </div>
    );
};

export default Input;
