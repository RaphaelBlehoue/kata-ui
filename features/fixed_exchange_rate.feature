Feature: Utilisation d'un taux de change personnalisé et fixe pour EUR/USD


  Rule: Etant donnée un taux de change initialisé à 1,1


    Scenario: Utiliser un taux de change personnalisé et fixe pour la conversion EUR/USD
      Given l'utilisateur a saisi un taux de change fixe de "2.1"
      When l'utilisateur saisit un montant de "2334" EUR
      Then le montant en USD doit être de "4,901.4" USD