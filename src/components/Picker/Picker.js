import React from 'react';
import styles from './Picker.module.css';

const Picker = ({id, label, onChange}) => {
    return (
        <div id={id} className={styles.container}>
            <label className={styles.label}>{label}</label>
            <div className={styles.inputContainer}>
                <div className={styles.optionContainer}>
                    <input className={styles.input} type="radio" name="reccurency" id="radio-daily" value={365}
                           onChange={onChange}/>
                    <label className={styles.optionLabel} htmlFor="radio-daily">Daily</label>
                </div>

                <div className={styles.optionContainer}>
                    <input className={styles.input} type="radio" name="reccurency" id="radio-weekly" value={52.1428}
                           onChange={onChange}/>
                    <label className={styles.optionLabel} htmlFor="radio-weekly">Weekly</label>
                </div>

                <div className={styles.optionContainer}>
                    <input className={styles.input} type="radio" name="reccurency" id="radio-monthly" value={30}
                           onChange={onChange}/>
                    <label className={styles.optionLabel} htmlFor="radio-monthly">Monthly</label>
                </div>

                <div className={styles.optionContainer}>
                    <input className={styles.input} type="radio" name="reccurency" id="radio-yearly" value={1}
                           onChange={onChange}/>
                    <label className={styles.optionLabel} htmlFor="radio-yearly">Annually</label>
                </div>
            </div>
        </div>
    );
};

export default Picker;
