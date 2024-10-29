# kata-ui todo.md

# Point 7 et 8 non-traités a cause du Temps Imparti

---

### Raccourcis Pris dans le Projet en Raison du Temps Imparti

1. **Utilisation de Tailwind CSS pour le Design**
   - Étant donné les contraintes de temps et en réponse à la note :"Une attention particulière devra être portée sur l’UX”, j'ai opté pour **Tailwind CSS**, un framework CSS, afin d'accélérer la mise en place du design.

2. **Inspiration du Site Wise pour l'UI**
   - Pour le design de UX, je me suis inspiré du site **[Wise](https://wise.com/)**, qui présente une interface simple.

3. **Configurations d'Environnement (dev et test)**
   - Pour la configuration des environnements (développement local et tests), j'ai utilisé des **configurations minimales** disponibles sur mon dépôt GitLab personnel. Cela m'a permis de mettre rapidement en place les scénarios Gherkin en utilisant **Example Mapping** pour les tests, que j'ai utilisé pour le développement

---



### Quelques Améliorations Possibles

---

1. **Accessibilité (a11y)**
   - On pourrait ajouter des labels ou descriptions pour une meilleure expérience utilisateur, en particulier pour les personnes utilisant des lecteurs d’écran.

2. **Modularité et Refactorisation du Code**
   - **Refactoriser le Calcul de Variation dans un Utilitaire** : Déplacer le calcul de variation (actuellement dans le composant `CurrencyConverter`) dans une fonction utilitaire, par exemple dans `currencyUtils.ts`, améliorerait la lisibilité.
   - **Découpage du Composant `CurrencyConverter`** : Il pourrait être découpé en plusieurs sous-composants et partager des données globales dans le contexte pour limiter le "props drilling".

3. **Flexibilité des Fonctionnalités**
   - **Possibilité de Faire un Switch sur le Taux Fixe** : Actuellement, le champ de taux fixe est en libre saisie. On pourrait ajouter un bouton qui permet de le désactiver et le réactiver, même lorsqu’il possède une valeur. Cela améliorerait la flexibilité pour l’utilisateur.
   - **Extension des Taux Disponibles** : Utiliser une API pour ajouter d'autres taux dans une liste déroulante et permettre une conversion en temps réel.

4. **Gestion des Erreurs et Validation**
   - **Validation et Gestion des Erreurs** : Si l’utilisateur entre un taux fixe invalide (par exemple, un texte ou un nombre extrêmement élevé), une gestion d’erreur pourrait afficher un message clair et réinitialiser le champ de taux fixe. Cela est valable pour les autres champs également.

5. **Tests**
   - **Ajout de Cas Non-Passants dans les Tests** : Ajouter des cas de test non-passants et compléter les scénarios. Une documentation avec SpecFlow pourrait également être incluse pour faciliter la compréhension des spécifications de test.

---