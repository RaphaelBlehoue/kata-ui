import { createContext } from "react";

const INIT_RATE = 1.1;

export const RateContext = createContext<number>(INIT_RATE);
