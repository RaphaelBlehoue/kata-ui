import {
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { RateContext } from "./RateContext";

const INIT_RATE = 1.1;
const minVariation = -0.05;
const maxVariation = 0.05;

export const RateProvider = ({ children }: PropsWithChildren) => {
  const [exchangeRate, setExchangeRate] = useState<number>(INIT_RATE);

  useEffect(() => {
    const intervalUp = setInterval(() => {
      const variation = parseFloat(
        (Math.random() * (maxVariation - minVariation) + minVariation).toFixed(
          3
        )
      );
      setExchangeRate((prev: number) =>
        parseFloat((prev + variation).toFixed(3))
      );
    }, 3000);
    return () => clearInterval(intervalUp);
  }, []);

  return (
    <RateContext.Provider value={exchangeRate}>{children}</RateContext.Provider>
  );
};
