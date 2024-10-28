Feature: Affichage et actualisation du taux de change EUR/USD


  Rule: Etant donnée un taux de change initialisé à 1,1


    Scenario: Initialisation du taux de change
      Given l'utilisateur accède à l'application
      When le composant ExchangeRateUpdater est monté
      Then le taux de change doit être affiché avec une valeur de "1.100"

    Scenario: Actualisation automatique du taux de change toutes les 3 secondes
      Given le composant est monté
      When trois secondes se sont écoulées
      Then le taux de change doit être mis à jour avec une variation aléatoire entre "-0,05 et +0,05"