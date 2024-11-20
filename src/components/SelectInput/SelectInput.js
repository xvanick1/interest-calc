import React, { useState, useEffect } from 'react';
import styles from './SelectInput.module.css';

const SelectInput = ({ id, label, placeholder, inputType, mode, min, step, toParent }) => {
    const defaultOptionValue = '7';

    const [inputValue, setInputValue] = useState('');
    const [optionValue, setOptionValue] = useState(defaultOptionValue);

    useEffect(() => {
        toParent(inputValue, optionValue);
    }, [inputValue, optionValue]);

    const handleInputChange = (value) => {
        setInputValue(value);
    }

    const handleOptionChange = (value) => {
        setOptionValue(value);
    }

    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor={id}>{label}</label>
            <div className={styles.inputContainer}>
                <input
                    id={id}
                    className={styles.input}
                    placeholder={placeholder}
                    type={inputType}
                    inputMode={mode}
                    min={min}
                    step={step}
                    onChange={(event) => handleInputChange(event.target.value)}
                />
                <select
                    className={styles.select}
                    defaultValue={defaultOptionValue}
                    onChange={event => handleOptionChange(event.target.value)}
                >
                    <option className={styles.option} value='1'>Days</option>
                    <option className={styles.option} value='7'>Weeks</option>
                    <option className={styles.option} value='30'>Months</option>
                    <option className={styles.option} value='365'>Years</option>
                </select>
            </div>
        </div>
    );
};

export default SelectInput;
