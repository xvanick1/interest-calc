import React, { useState, useEffect} from 'react';
import styles from './Input.module.css';


const Input = ({id, label, placeholder, inputType, mode, min, step, symbol, toParent}) => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        toParent(inputValue);
    }, [inputValue]);

    const handleInputChange = (value) => {
        setInputValue(value);
    }

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
                    min={min}
                    step={step}
                    value={inputValue}
                    onChange={(event => handleInputChange(event.target.value))}/>
            </div>
        </div>
    );
};

export default Input;
