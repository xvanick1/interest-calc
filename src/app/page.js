"use client"

import styles from "./page.module.css";
import {useState} from "react";
import {Link} from "@nextui-org/link";
import {Input} from "@nextui-org/input";

export default function Home() {
  let [finalWealth, setFinalWealth] = useState(null);
  let [deposit, setDeposit] = useState('');
  let [apy, setApy] = useState('');
  let [compound_freq_days, setCompound_freq_days] = useState('');
  let [deposit_duration_days, setDeposit_duration_days] = useState('');

  const handleValueChange = (event) => {
    event.target.id === "deposit" ? setDeposit(event.target.value) : '';
    event.target.id === "apy" ? setApy(event.target.value) : '';
    event.target.id === "compound_freq_days" ? setCompound_freq_days(event.target.value) : '';
    event.target.id === "deposit_duration_days" ? setDeposit_duration_days(event.target.value) : '';

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
            <input
                className={styles.input}
                id="deposit"
                type="number"
                placeholder="Initial deposit:"
                inputMode="decimal"
                min={1}
                value={deposit}
                step={0.01}
                required
                onChange={handleValueChange}/>
            <input className={styles.input}
                   id="apy"
                   type="number"
                   placeholder="Yearly Interest Rate (APY):"
                   inputMode={"numeric"}
                   min={0}
                   value={apy}
                   step={0.01}
                   required
                   onChange={handleValueChange}/>
            <input className={styles.input}
                   id="compound_freq_days"
                   type="number"
                   placeholder="How often in year is interest paid:"
                   inputMode={"numeric"}
                   min={1}
                   max={365}
                   value={compound_freq_days}
                   step={1}
                   required
                   onChange={handleValueChange}/>
            <input className={styles.input}
                   id="deposit_duration_days"
                   type="number"
                   placeholder="Duration of deposit:"
                   inputMode={"numeric"}
                   min={1}
                   value={deposit_duration_days}
                   step={1}
                   required
                   onChange={handleValueChange}/>
            <span className={styles.result}>{finalWealth !== null ? finalWealth : "0"} €</span>
          </div>
          <div className={styles.graph}>
            <h1 className={styles.h1}>TODO: Graph</h1>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Created by J.</p>
        <p>Did you experience any weird behavior? <Link isExternal href="https://github.com/xvanick1/interest-calc/issues"> Let me know.</Link></p>
      </footer>
    </div>
  );
}
