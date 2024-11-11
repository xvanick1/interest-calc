import React from 'react';
import styles from './SelectInput.module.css';

const SelectInput = ({id, label, placeholder, inputType, mode, defaultValue, value, min, step, onChange}) => {
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
                    value={value}
                    min={min}
                    step={step}
                    onChange={onChange}
                />
                <select className={styles.select} onChange={onChange} value={value} defaultValue={defaultValue}>
                    <option className={styles.option} value="1">Days</option>
                    <option className={styles.option} value="7">Weeks</option>
                    <option className={styles.option} value="30">Months</option>
                    <option className={styles.option} value="365">Years</option>
                </select>
            </div>
        </div>
    );
};

export default SelectInput;
