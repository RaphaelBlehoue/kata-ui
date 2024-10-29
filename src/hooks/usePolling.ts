import { useEffect } from "react";

export const usePolling = (callback: () => void, interval: number) => {
  useEffect(() => {
    const polling = setInterval(callback, interval);
    return () => clearInterval(polling);
  }, [callback, interval]);
};