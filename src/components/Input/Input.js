import React from 'react';
import styles from './Input.module.css';

const Input = ({ id, label, placeholder, inputType, mode, value, min, step, symbol, onChange }) => {
    return (
        <div id={id} className={styles.container}>
            <label
                className={styles.label}>{label}</label>
            <div
                className={styles.inputContainer}
                style={{ "--input-symbol": `"${symbol || ' ' }"` }}>
                <input
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