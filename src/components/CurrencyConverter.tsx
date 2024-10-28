import  { ChangeEvent, useContext, useState } from "react";
import { RateContext } from "@creditAgricole/contexts/RateContext";
export const CurrencyConverter = () => {

  const [euroAmount, setEuroAmount] = useState<number>(0);
  const [usdAmount, setUsdAmount] = useState<number>(0);
  const currentExChangeRate = useContext(RateContext);

  const updateExChangeRateForUSD = () => {
    setUsdAmount(parseFloat((euroAmount * currentExChangeRate).toFixed(3)));
  };


  const handleExChangeRateEURChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value: number = parseFloat(e.target.value);
    setEuroAmount(value || 0);
    updateExChangeRateForUSD();
  };


  return (
    <div>
      <h2>Convertisseur EUR/USD</h2>
      <label htmlFor="convertor">Montant en Eur:</label>
      <input
        id="convertor"
        type="number"
        placeholder="Saisissez un montant en EUR"
        value={euroAmount}
        onChange={handleExChangeRateEURChange}
      />
      <div>$ {usdAmount} USD</div>
    </div>
  );
};
