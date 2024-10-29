import  { ChangeEvent, useContext, useEffect, useState } from "react";
import { RateContext } from "@creditAgricole/contexts/RateContext";
import { usePolling } from "@creditAgricole/hooks/usePolling";
export const CurrencyConverter = () => {
  const [euroAmount, setEuroAmount] = useState<number>(0);
  const [usdAmount, setUsdAmount] = useState<number>(0);
  const currentExChangeRate = useContext(RateContext);

  // Si updateExChangeRateForUSD devient une dependance  de useEffect, il faut un useCallback ici
  const updateExChangeRateForUSD = () => {
    setUsdAmount(parseFloat((euroAmount * currentExChangeRate).toFixed(3)));
  };

  usePolling(updateExChangeRateForUSD, 3000);

  const handleExChangeRateEURChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value: number = parseFloat(e.target.value);
    setEuroAmount(value || 0);
    updateExChangeRateForUSD();
  };

  useEffect(() => {
    updateExChangeRateForUSD();
  }, [currentExChangeRate, euroAmount]);


  return (
    <div className="flex justify-between items-center space-x-4">
      <div className="flex-1">
        <label
          htmlFor="amount"
          className="block text-left text-sm font-medium text-gray-700"
        >
          Montant en Euro:
        </label>
        <div className="mt-1 flex items-center border border-gray-300 rounded-lg px-4 py-2">
          <input
            id="amount"
            type="text"
            placeholder="Saisissez un montant en EUR"
            value={euroAmount}
            onChange={handleExChangeRateEURChange}
            className="flex-1 bg-transparent outline-none text-lg text-gray-900"
          />
          <span className="text-gray-500 ml-2">EUR</span>
        </div>
        <div className="mt-4 text-center text-gray-700">
          <p className="text-lg text-left font-semibold">
            € {euroAmount} EUR ={" "}
            <span className="text-[#049093]"> $ {usdAmount} USD</span>
          </p>
        </div>
      </div>
    </div>
  );
};
