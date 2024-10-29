import { defineFeature, loadFeature } from "jest-cucumber";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect, vi } from "vitest";
import { CurrencyConverter } from "@creditAgricole/components/CurrencyConverter";
import { RateProvider } from "@creditAgricole/contexts/RateProvider";

const feature = loadFeature("../features/fixed_exchange_rate.feature");

defineFeature(feature, (test) => {
  vi.useFakeTimers();

test("Utiliser un taux de change personnalisé et fixe pour la conversion EUR/USD", ({
  given,
  when,
  then,
}) => {
  given(
    /^l'utilisateur a saisi un taux de change fixe de "(.*)"$/,
    (taux: string) => {
      render(
        <RateProvider>
          <CurrencyConverter />
        </RateProvider>
      );
      const customRateInput = screen.getByPlaceholderText(/Entrez un Taux fixe/i);
      fireEvent.change(customRateInput, { target: { value: taux } });
    }
  );

  when(/^l'utilisateur saisit un montant de "(.*)" EUR$/, (amount: string) => {
      const euroInput = screen.getByPlaceholderText(/Montant en EUR/i);
      fireEvent.change(euroInput, { target: { value: amount } });
  });

  then(/^le montant en USD doit être de "(.*)" USD$/, (converted: string) => {
    waitFor(() => {
      expect(screen.getByText(converted)).toBeInTheDocument();
    });
  });
});
});
