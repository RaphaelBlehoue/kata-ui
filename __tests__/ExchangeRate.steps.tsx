import { defineFeature, loadFeature } from "jest-cucumber";
import ExchangeRateUpdater from "@creditAgricole/components/ExchangeRateUpdater";
import { vi } from "vitest";

const feature = loadFeature("../features/exchange_rate.feature");

defineFeature(feature, (test) => {
  vi.useFakeTimers();

  test("Initialisation du taux de change", ({ given, when, then }) => {
    given("l'utilisateur accède à l'application", () => {
    });

    when("le composant ExchangeRateUpdater est monté", () => {
    });

    then(
      /^le taux de change doit être affiché avec une valeur de "(.*)"$/,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (taux: string) => {
      }
    );
  });

  test("Actualisation automatique du taux de change toutes les 3 secondes", ({
    given,
    when,
    then,
  }) => {
    given("le composant est monté", () => {
    });

    when(/^trois secondes se sont écoulées$/, () => {
    });

    then(
      /^le taux de change doit être mis à jour avec une variation aléatoire entre "(.*)"$/,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (_interval: string) => {
      }
    );
  });
});
