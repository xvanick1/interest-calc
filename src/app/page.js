"use client"

import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import Input from "@/components/Input/Input";
import Picker from "@/components/Picker/Picker";
import SelectInput from "@/components/SelectInput/SelectInput";

export default function Home() {
    const [durationValue, setDurationValue] = useState("");
    const [durationType, setDurationType] = useState("");
    const [compoundRecurrency, setCompoundRecurrency] = useState("");
    const [apy, setApy] = useState("");
    const [depositValue, setDepositValue] = useState("");
    const [finalWealth, setFinalWealth] = useState("0");

    const calculateResult = () => {
        const depositPeriod = durationValue * durationType;
        if (depositValue && apy && compoundRecurrency && depositPeriod) {
            setFinalWealth(depositValue * (1 + (apy / 100) / compoundRecurrency) ** (compoundRecurrency * depositPeriod));
        }
    };

    const handleDepositChange = (value) => {
        setDepositValue(value);
        calculateResult();
    }

    const handleApyChange = (value) => {
        setApy(value);
        calculateResult();
    }

    const handleRecurrencyChange = (recurrencyValue) => {
        setCompoundRecurrency(recurrencyValue);
        calculateResult();
    }

    const handleDataFromSelectInput = (inputValue, optionValue) => {
        setDurationValue(inputValue);
        setDurationType(optionValue);
        calculateResult();
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
                            placeholder="30"
                            inputType="number"
                            mode="numeric"
                            min={1}
                            step={1}
                            toParent={handleDataFromSelectInput}
                        />
                        <span className={styles.result}>{finalWealth !== null ? finalWealth : "0"} €</span>
                    </div>
                    <div className={styles.graph}>
                        <h1 className={styles.h1}>TODO: Graph</h1>
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
