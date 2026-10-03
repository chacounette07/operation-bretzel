// =====================================================================
//  Opération Bretzel : configuration des comptes (Firebase)
// =====================================================================
//  Tant que ce fichier n'est pas rempli, le jeu marche quand même,
//  mais sans comptes : la progression reste dans le navigateur.
//
//  Pour activer les comptes (étape 7 du guide README.md) :
//    1. Dans la console Firebase, copie le bloc « const firebaseConfig = { … }; »
//    2. Remplace tout le bloc ci-dessous par le tien.
//  Ne change rien d'autre.
//
//  Ces valeurs ne sont pas secrètes : c'est normal qu'elles soient
//  visibles sur GitHub. Ce sont les règles Firestore qui protègent
//  la progression de chaque joueur.
// =====================================================================

const firebaseConfig = {
  apiKey: "COLLE-ICI-TA-CLE",
  authDomain: "ton-projet.firebaseapp.com",
  projectId: "ton-projet",
  storageBucket: "ton-projet.firebasestorage.app",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000"
};
