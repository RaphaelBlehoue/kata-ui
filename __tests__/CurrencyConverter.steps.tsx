import { defineFeature, loadFeature } from "jest-cucumber";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import {CurrencyConverter} from "@creditAgricole/components/CurrencyConverter";
import { expect, vi } from "vitest";
import { RateProvider } from "@creditAgricole/contexts/RateProvider";
import ExchangeRateUpdater from "@creditAgricole/components/ExchangeRateUpdater";

const feature = loadFeature("../features/currency_converter.feature");

defineFeature(feature, (test) => {
   vi.useFakeTimers();

test("Affichage initial de la conversion", ({ given, when, then }) => {
    given(/^l'utilisateur saisit un montant de "(.*)" EUR$/, (input: number) => {
      render(
        <RateProvider>
          <CurrencyConverter />
          <ExchangeRateUpdater/>
        </RateProvider>
      );
      const euroInput = screen.getByPlaceholderText(/Montant en EUR/i);
      fireEvent.change(euroInput, { target: { value: input } });
    });

    when(/^le taux de change est de "(.*)"$/, (taux: string) => {
      expect(screen.getByText(taux)).toBeInTheDocument();
    });

    then(/^le montant en USD doit être de "(.*)"$/, (output: string) => {
      waitFor(() => {
        expect(screen.getByText(output)).toBeInTheDocument();
      })
    });
  });
});
