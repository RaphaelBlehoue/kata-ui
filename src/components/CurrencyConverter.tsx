import  { ChangeEvent, useContext, useEffect, useState } from "react";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { RateContext } from "@creditAgricole/contexts/RateContext";
import { usePolling } from "@creditAgricole/hooks/usePolling";

export const CurrencyConverter = () => {
  const [amount, setAmount] = useState<number>(0);
  const [isEuro, setIsEuro] = useState<boolean>(true); // On considère que la Devise par default c'est EUR
  const [convertedAmount, setConvertedAmount] = useState<number>(0);

  const currentExChangeRate = useContext(RateContext);

  // Si updateExChangeRateForUSD devient une dependance  de useEffect, il faut un useCallback ici
  const updateExChangeRateForUSD = () => {
    const converted = isEuro
      ? amount * currentExChangeRate
      : amount / currentExChangeRate;
    setConvertedAmount(parseFloat(converted.toFixed(3)));
  };

  usePolling(updateExChangeRateForUSD, 3000);

  const handleAmountExChangeRateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value: number = parseFloat(e.target.value);
    setAmount(value || 0);
  };


  const handleSwitch = () => {
    setIsEuro(!isEuro);
    setAmount(convertedAmount);
  };

  useEffect(() => {
    updateExChangeRateForUSD();
  }, [currentExChangeRate, amount, isEuro]);


  return (
    <div className="flex justify-between items-center space-x-4">
      <div className="flex-1">
        <label
          htmlFor="amount"
          className="block text-left text-sm font-medium text-gray-700"
        >
          Montant:
        </label>
        <div className="flex gap-5">
          <div className="w-full max-w-96 mt-1 flex items-center border border-gray-300 rounded-lg px-4 py-2">
            <input
              id="amount"
              type="text"
              placeholder="Saisissez un montant en EUR"
              value={amount}
              onChange={handleAmountExChangeRateChange}
              className="flex-1 bg-transparent outline-none text-lg text-gray-900"
            />
            <button className="px-4 py-2 border-gray-300 rounded-r-md">
              {isEuro ? "EUR" : "USD"}
            </button>
          </div>
          <button
            onClick={handleSwitch}
            className="font-bold text-2xl text-[#049093] hover:text-green-700 transition-transform"
          >
            <HiArrowsRightLeft />
          </button>
          <div className="w-full max-w-96 mt-1 flex items-center border border-gray-300 rounded-lg px-4 py-2">
            <input
              id="amount"
              type="text"
              readOnly
              placeholder="Saisissez un montant en USD"
              value={convertedAmount}
              onChange={handleAmountExChangeRateChange}
              className="flex-1 bg-transparent outline-none text-lg text-gray-900"
            />
            <button className="px-4 py-2 border-gray-300 rounded-r-md">
              {isEuro ? "USD" : "EUR"}
            </button>
          </div>
        </div>

        <div className="mt-4 text-center text-gray-700">
          <p className="text-lg text-left font-semibold">
            € {amount.toLocaleString("fr-FR")} {isEuro ? "EUR" : "USD"} ={" "}
            <span className="text-[#049093]">
              {" "}
              $ {convertedAmount.toLocaleString("en-US")}{" "}
              {isEuro ? "USD" : "EUR"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
