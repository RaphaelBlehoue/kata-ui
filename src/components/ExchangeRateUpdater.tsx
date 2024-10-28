import { useState, useEffect } from "react";

const ExchangeRateUpdater = () => {
  const [exchangeRate, setExchangeRate] = useState<number>(1.1);

  const getRandomVariation = (): number => {
    const min = -0.05;
    const max = 0.05;
    return parseFloat((Math.random() * (max - min) + min).toFixed(3));
  };

  useEffect(() => {
    const updateExchangeRate = () => {
      setExchangeRate((prevRate) =>
        parseFloat((prevRate + getRandomVariation()).toFixed(3))
      );
    };

    const intervalId = setInterval(updateExchangeRate, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Taux de Change EUR/USD</h2>
      <p>{exchangeRate.toFixed(3)}</p>
    </div>
  );
};

export default ExchangeRateUpdater;
