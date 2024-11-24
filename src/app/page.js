"use client"

import styles from "./page.module.css";
import { useState, useMemo } from "react";
import Link from "next/link";
import Input from "@/components/Input/Input";
import Picker from "@/components/Picker/Picker";
import SelectInput from "@/components/SelectInput/SelectInput";
import Chart from "@/components/Chart/Chart";

const validateValue = (value) => {
    const num = parseFloat(value);
    return isNaN(num) || num < 0 ? 0 : num;
}

export default function Home() {
    const [depositValue, setDepositValue] = useState(0);
    const [apy, setApy] = useState(0);
    const [compoundRecurrency, setCompoundRecurrency] = useState(0);
    const [durationValue, setDurationValue] = useState(0);
    const [durationType, setDurationType] = useState(0);
    const [finalWealth, setFinalWealth] = useState("");

    useMemo(() => {
        const depositPeriod = durationValue * durationType;
        let wealth = depositValue * (1 + apy / compoundRecurrency) ** (compoundRecurrency * (depositPeriod / 365));

        wealth = validateValue(wealth);
        setFinalWealth(wealth.toFixed(2));
    }, [depositValue, apy, durationValue, durationType, compoundRecurrency]);

    const handleDepositChange = (value) => {
        value = validateValue(value);
        setDepositValue(value);
    }

    const handleApyChange = (value) => {
        value = value / 100;
        value = validateValue(value);
        setApy(value);
    }

    const handleRecurrencyChange = (value) => {
        value = validateValue(value);
        setCompoundRecurrency(value);
    }

    const handleDataFromSelectInput = (inputValue, optionValue) => {
        inputValue = validateValue(inputValue);
        optionValue = validateValue(optionValue);

        setDurationValue(inputValue);
        setDurationType(optionValue);
    };

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>Let's get rich!</h1>
                <div className={styles.container}>
                    <div className={styles.inputForm}>
                        <Input
                            id="deposit"
                            label="Initial deposit"
                            placeholder="10 000"
                            inputType="number"
                            mode="decimal"
                            symbol="€"
                            min={1}
                            step={0.01}
                            toParent={handleDepositChange}
                        />
                        <Input
                            id="apy"
                            label="Annual Interest Rate"
                            placeholder="3.7"
                            inputType="number"
                            mode="numeric"
                            symbol="%"
                            min={0}
                            step={0.01}
                            toParent={handleApyChange}
                        />
                        <Picker
                            id="compound_freq_days"
                            label="How often is interest paid"
                            toParent={handleRecurrencyChange}
                        />
                        <SelectInput
                            id="deposit_duration_days"
                            label="Duration of deposit"
                            placeholder={12}
                            inputType="number"
                            mode="numeric"
                            min={1}
                            step={1}
                            toParent={handleDataFromSelectInput}
                        />
                        <span className={styles.result}>{finalWealth} €</span>
                    </div>
                    <div className={styles.graph}>
                        <Chart/>
                    </div>
                </div>
            </main>
            <footer className={styles.footer}>
                <p>Created by J.</p>
                <p>Did you experience any weird behavior? <Link href="https://github.com/xvanick1/interest-calc/issues"> Let me know.</Link></p>
            </footer>
        </div>
    );
}
