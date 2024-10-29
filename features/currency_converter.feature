Feature: Conversion entre EUR et USD


  Rule: Etant donnée un taux de change initialisé à 1,1


    Scenario: Affichage initial de la conversion
      Given l'utilisateur saisit un montant de "100" EUR
      When le taux de change est de "1.100"
      Then le montant en USD doit être de "110,00 USD"