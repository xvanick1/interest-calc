"use client"

import styles from "./page.module.css";
import {useState} from "react";

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
        <div id="container">
          <div id="inputForm">
            <input id="deposit" type="string" placeholder="Initial Deposit Value" value={deposit} onChange={handleValueChange}/>
            <input id="apy" type="string" placeholder="Yearly Interest Rate (APY)" value={apy} onChange={handleValueChange}/>
            <input id="compound_freq_days" type="string" placeholder="How often in year is interest paid" value={compound_freq_days} onChange={handleValueChange}/>
            <input id="deposit_duration_days" type="string" placeholder="Duration of deposit" value={deposit_duration_days} onChange={handleValueChange}/>
            <span id="result">{finalWealth !== null ? finalWealth : "amount"}</span>
          </div>
          <div id="graph">
            {/*  TODO: Graph*/}
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        Created by J.
      </footer>
    </div>
  );
}
