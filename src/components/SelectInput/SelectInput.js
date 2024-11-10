import React from 'react';
import styles from './SelectInput.module.css';

const SelectInput = ({ id, label, placeholder, inputType, mode, value, min, step, symbol, onChange }) => {
    return (
        <div id={id} className={styles.container}>
            <label className={styles.label}>{label}</label>
            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    placeholder={placeholder}
                    type={inputType}
                    inputMode={mode}
                    value={value}
                    min={min}
                    step={step}
                    onChange={onChange}
                />
                <select className={styles.select} id="duration" onChange={onChange} value={value}>
                    <option className={styles.option} value="days">Days</option>
                    <option className={styles.option} value="weeks">Weeks</option>
                    <option className={styles.option} value="months">Months</option>
                    <option className={styles.option} value="years">Years</option>
                </select>
            </div>
        </div>
    );
};

export default SelectInput;
