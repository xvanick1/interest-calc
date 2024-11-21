import styles from './Input.module.css';


const Input = ({id, label, placeholder, inputType, mode, min, step, symbol, defaultValue, toParent}) => {

    const handleInputChange = (value) => {
        toParent(value);
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
                    defaultValue={defaultValue}
                    onChange={(event => handleInputChange(event.target.value))}/>
            </div>
        </div>
    );
};

export default Input;
