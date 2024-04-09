import React, { useEffect, useState } from "react";
import { getCountries, getExhange } from "../utils/api";
import DropDown from "./DropDown";
import {mapNumber} from '../utils/utils'

const Interface = () => {
  const cont = getCountries();
  const countries = cont.map((cont) => {
    const code = cont.isoCode.toLowerCase();
    return {
      label: (
        <div className="label">
          <div className="flag">
            <span key={cont.isoCode} className={`fi fi-${code}`}></span>
            <div>{cont.country}</div>
          </div>
          <div>{cont.currencyCode}</div>
        </div>
      ),
      value: cont.currencyCode,
    };
  });

  const [inputValue, setInputValue] = useState("");
  const [currency, setCurrency] = useState(countries[0].value);
  const [targetCurrency, setTargetCurrency] = useState(countries[1].value);


  const [exchangeRate, setExchangeRate] = useState(0);
  const [time, setTime] = useState("N/A");

  useEffect(() => {
    if (currency && targetCurrency) {
      getExhange(currency , targetCurrency).then((rate) => {
        setExchangeRate(rate[0]);
        setTime(rate[1]);
      });
    }
  }, [currency , targetCurrency]);

  return (
    <>
      <div className="background">
        <h2>Currency Converter</h2>
        <section className="card">
          <DropDown countries={countries} setCurrency={setCurrency} placeholder={countries[0].label}/>
          <DropDown countries={countries} setCurrency={setTargetCurrency}  placeholder={countries[1].label}/>
          <input
            type="text"
            step="any"
            placeholder={`Enter Amount in ${currency}`}
            inputMode="numeric"
            pattern="[0-9٠-٩]*"
            value={inputValue}
            onChange={(e) => {
              const newValue = e.target.value.replace(/[^\d٠-٩]/g, "");
              setInputValue( mapNumber(newValue));

            }}
          />

          <div className="output">
            <div>
              Exchange Rate:{" "}
              <h4 style={{ display: "inline", color: "lightgreen" }}>
                {exchangeRate}
              </h4>{" "}
              {currency}
            </div>
            <div>
              Total Amount:{" "}
              <h4 style={{ display: "inline", color: "lightgreen" }}>
                {(inputValue * exchangeRate).toLocaleString()}
              </h4>{" "}
              {targetCurrency}
            </div>
            <div>As of {time}</div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Interface;
