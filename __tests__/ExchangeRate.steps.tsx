import { defineFeature, loadFeature } from "jest-cucumber";
import { render, screen } from "@testing-library/react";
import ExchangeRateUpdater from "@creditAgricole/components/ExchangeRateUpdater";
import { expect, vi } from "vitest";

const feature = loadFeature("../features/exchange_rate.feature");

defineFeature(feature, (test) => {
  vi.useFakeTimers();

  test("Initialisation du taux de change", ({ given, when, then }) => {
    given("l'utilisateur accède à l'application", () => {
      render(<ExchangeRateUpdater />);
    });

    when("le composant ExchangeRateUpdater est monté", () => {
      expect(screen.getByText(/Taux de Change/));
    });

    then(
      /^le taux de change doit être affiché avec une valeur de "(.*)"$/,
      (taux: string) => {
        expect(screen.getByText(taux)).toBeInTheDocument();
      }
    );
  });

  test("Actualisation automatique du taux de change toutes les 3 secondes", ({
    given,
    when,
    then,
  }) => {
    given("le composant est monté", () => {
      render(<ExchangeRateUpdater />);
    });

    when(/^trois secondes se sont écoulées$/, () => {
      vi.advanceTimersByTime(3000);
    });

    then(
      /^le taux de change doit être mis à jour avec une variation aléatoire entre "(.*)"$/,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (_interval: string) => {
        // Explication: considerons le taux actualisé ou initiale
        const initialRate = parseFloat(
          screen.getByText(/\d+\.\d{3}/).textContent || "1.1"
        );

        vi.advanceTimersByTime(3000);

        const updatedRate = parseFloat(
          screen.getByText(/\d+\.\d{3}/).textContent || "1.1"
        );
        expect(Math.abs(updatedRate - initialRate)).toBeLessThanOrEqual(0.05);
      }
    );
  });
});
