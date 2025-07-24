# Types de Commits Git - Documentation

## 🚀 Types de commits courants

- **feat** : Ajout d'une nouvelle fonctionnalité (feature).
- **fix** : Correction d’un bug.
- **chore** : Tâches de maintenance qui ne modifient ni le code applicatif ni les tests.
- **docs** : Modification de la documentation uniquement (README, commentaires, etc.).
- **style** : Changement de formatage (indentation, espaces, etc.) sans impact fonctionnel.
- **refactor** : Refonte du code sans changer le comportement (ni bug ni feature).
- **perf** : Amélioration de la performance.
- **test** : Ajout ou modification de tests.
- **build** : Changements liés au système de build ou aux dépendances externes.
- **ci** : Changement concernant l’intégration continue (GitLab CI, GitHub Actions...).
- **revert** : Annulation d’un commit précédent.
- **merge** : Fusion de branches (souvent généré automatiquement).

---

## 🔄 Types secondaires

- **update** : Terme vague, souvent utilisé pour signaler une mise à jour mineure (à éviter).
- **init** : Initialisation d’un projet ou d’un module.
- **hotfix** : Correction rapide en production.
- **release** : Préparation ou publication d’une version.
- **config** : Modifications liées à la configuration (ex : fichiers `.env`, `.gitignore`).

---

## ✅ Bonnes pratiques

- **Utiliser un message clair**  
  Exemple : `feat(user): add login page`
- **Éviter les termes vagues**  
  Tels que : `update`, `change`, `modification`.
- **Structure recommandée**  
  `<type>(scope?): description courte`

---

