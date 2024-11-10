"use client"

import styles from "./page.module.css";
import {useState} from "react";
import Link from 'next/link'
import Input from '@/components/Input/Input';
import Picker from "@/components/Picker/Picker";
import SelectInput from "@/components/SelectInput/SelectInput";

export default function Home() {
  let [finalWealth, setFinalWealth] = useState(null);
  let [deposit, setDeposit] = useState(null);
  let [apy, setApy] = useState(null);
  let [compound_freq_days, setCompound_freq_days] = useState(null);
  let [deposit_duration_days, setDeposit_duration_days] = useState(null);

  const handleValueChange = (event) => {
    event.target.id === "deposit" ? setDeposit(event.target.value) : null;
    event.target.id === "apy" ? setApy(event.target.value) : null;
    event.target.id === "compound_freq_days" ? setCompound_freq_days(event.target.value) : null;
    event.target.id === "deposit_duration_days" ? setDeposit_duration_days(event.target.value) : null;

    calculateResult();
  }

  const calculateResult = () => {
    if(!(deposit === '' || apy === '' || compound_freq_days === '' || compound_freq_days === '')) {
       setFinalWealth(deposit * (1 + (apy / 100) / compound_freq_days) ** (compound_freq_days * deposit_duration_days))
    }
  }

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
                value={deposit}
                min={1}
                step={0.01}
                />
            <Input
                id="apy"
                label="Annual Interest Rate"
                placeholder="3.7"
                inputType="number"
                mode="numeric"
                symbol="%"
                min={0}
                value={apy}
                step={0.01}
                />
            <Picker
                id="compound_freq_days"
                label="How often is interest paid"
                value={compound_freq_days}
                />
            <SelectInput
                id="deposit_duration_days"
                label="Duration of deposit"
                placeholder="30"
                inputType="number"
                mode="numeric"
                min={1}
                value={deposit_duration_days}
                step={1}

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
