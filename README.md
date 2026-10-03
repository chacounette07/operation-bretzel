# Opération Bretzel 🥨

Jeu de révision d'allemand : la famille, les nombres jusqu'à 99 et « Wie geht's ? ».
Chaque erreur devient un fantôme 👻 qui revient jusqu'à ce qu'il soit vaincu.
Avec un **identifiant** (pseudo + mot de passe), chaque joueur retrouve sa progression sur tous ses appareils.

## Ce qu'il y a dans ce dossier

| Fichier | À quoi il sert |
|---|---|
| `index.html` | le jeu |
| `firebase-config.js` | la configuration des comptes (à remplir à l'étape 7) |
| `firestore.rules` | les règles de sécurité de la base (à coller à l'étape 6) |
| `README.md` | ce guide |

---

## Partie 1 : mettre le jeu en ligne avec GitHub Pages (5 minutes)

**1. Crée le dépôt.** Sur [github.com](https://github.com), connecte-toi, clique sur **+** en haut à droite, puis **New repository**.
Nom : `operation-bretzel`. Laisse **Public** coché. Clique sur **Create repository**.

**2. Dépose les fichiers.** Sur la page du dépôt, clique sur le lien **uploading an existing file**
(ou **Add file › Upload files**). Glisse les **4 fichiers** du dossier (pas le dossier lui-même), puis clique sur **Commit changes**.

**3. Active GitHub Pages.** Onglet **Settings**, puis **Pages** dans le menu de gauche.
Sous « Build and deployment » : Source = **Deploy from a branch**, Branch = **main** et **/ (root)**, puis **Save**.
Attends 1 à 2 minutes et recharge la page : l'adresse du jeu apparaît en haut, du type
`https://ton-pseudo-github.github.io/operation-bretzel/`.

👉 Le jeu marche déjà, mais **sans comptes** : la progression reste dans le navigateur.

---

## Partie 2 : activer les comptes avec Firebase (10 minutes, gratuit)

GitHub Pages ne fait qu'afficher des pages : il ne peut pas garder des comptes.
On utilise donc **Firebase** (de Google, gratuit) pour stocker les identifiants et la progression.
Il te faut un compte Google.

**4. Crée un projet Firebase.** Va sur [console.firebase.google.com](https://console.firebase.google.com),
clique sur **Créer un projet** (Create a project), nomme-le `operation-bretzel`.
Tu peux désactiver Google Analytics (inutile ici). Clique sur **Créer le projet**.

**5. Active la connexion par mot de passe.** Dans le menu de gauche : **Authentication** › **Commencer** (Get started).
Onglet **Sign-in method** (Mode de connexion) › **Adresse e-mail/Mot de passe** (Email/Password).
Active le **premier** interrupteur seulement (pas « lien par e-mail »), puis **Enregistrer**.

**6. Crée la base de données et colle les règles.** Dans le menu de gauche : **Firestore Database** › **Créer une base de données**.
Si on te demande une édition, choisis **Standard**. Emplacement : `europe-west9 (Paris)` par exemple.
Choisis **Démarrer en mode production**, puis **Créer**.
Ensuite, onglet **Règles** (Rules) : efface tout, colle le contenu du fichier `firestore.rules`, puis **Publier**.

**7. Copie la configuration dans `firebase-config.js`.** Clique sur la roue ⚙️ à côté de « Vue d'ensemble du projet »,
puis **Paramètres du projet**. En bas, dans « Vos applications », clique sur l'icône Web **`</>`**.
Donne un surnom (par exemple `jeu`), ne coche pas « Firebase Hosting », clique sur **Enregistrer l'application**.
Firebase affiche un bout de code : copie **uniquement** le bloc qui commence par `const firebaseConfig = {` et finit par `};`.

Sur GitHub, ouvre le fichier `firebase-config.js`, clique sur le crayon ✏️ (Edit this file),
remplace le bloc `const firebaseConfig = { … };` par le tien, puis **Commit changes**.

**8. Teste.** Attends 1 à 2 minutes, puis ouvre l'adresse du jeu. L'écran « Crée ton identifiant » apparaît :
crée ton identifiant, joue une mission, puis ouvre le jeu sur un autre appareil (ton téléphone par exemple)
et connecte-toi avec le même identifiant. Ta progression est là. 🎉

---

## Questions fréquentes

**C'est vraiment gratuit ?**
Oui. GitHub Pages est gratuit pour un dépôt public. Firebase est gratuit (offre « Spark ») jusqu'à
50 000 lectures et 20 000 sauvegardes par jour, largement assez pour une classe entière. Aucune carte bancaire n'est demandée.

**La clé `apiKey` est visible sur GitHub, c'est grave ?**
Non. Pour Firebase, cette clé n'est pas un secret : elle indique juste à quel projet se connecter.
Ce qui protège les données, ce sont les règles de l'étape 6 : chaque joueur ne peut lire et modifier **que** sa propre progression.

**Le jeu affiche un message en bas de l'écran d'accueil.**
- « Comptes désactivés : remplis firebase-config.js » : l'étape 7 n'est pas encore faite.
- « firebase-config.js contient une erreur » : tu as sûrement collé tout le code de Firebase. Garde seulement le bloc `const firebaseConfig = { … };`.
- « Firestore refuse l'accès » : refais l'étape 6 (règles) et vérifie que tu as bien cliqué sur **Publier**.
- « La base Firestore n'existe pas encore » : la base de l'étape 6 n'a pas été créée.
- « Les comptes ne sont pas encore activés dans Firebase » : refais l'étape 5.

**Un joueur a oublié son mot de passe.**
Le jeu ne demande pas d'adresse e-mail, donc on ne peut pas envoyer de lien pour le changer.
Dans Firebase : **Authentication** › **Users**, supprime son compte (il apparaît sous la forme `pseudo@ton-projet.firebaseapp.com`).
Il pourra recréer un identifiant, mais il repartira de zéro. Conseil pour tout le monde : noter son mot de passe.

**Où voir les joueurs et leur progression ?**
Dans Firebase : **Authentication** › **Users** pour les identifiants, **Firestore Database** › collection `joueurs` pour la progression.

**Et la vie privée ?**
Le jeu ne demande ni nom, ni e-mail : juste un pseudo et un mot de passe. Conseille à chacun de ne pas utiliser son vrai nom.
Chaque joueur peut supprimer son compte et sa progression lui-même (menu « Mon compte »).
