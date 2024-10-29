import { RateContext } from "@creditAgricole/contexts/RateContext";
import { useContext } from "react";

const ExchangeRateUpdater = () => {
  const currentExChangeRate = useContext(RateContext);

  return (
    <div className="mt-4 text-center text-gray-700">
      <p className="text-sm text-left text-gray-500">
        Taux de Change variable EUR/USD à {new Date().toLocaleTimeString()} est de :
        <span className="text-[#049093]">{currentExChangeRate.toFixed(3)}</span>
      </p>
    </div>
  );
};

export default ExchangeRateUpdater;