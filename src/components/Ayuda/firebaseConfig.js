// Importa las funciones necesarias del SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Reemplaza esto con tu propia configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD3szl-FUKplki9oXJKsZa6IP_dPTxw0iU",
    authDomain: "ayuda-delta.firebaseapp.com",
    projectId: "ayuda-delta",
    storageBucket: "ayuda-delta.firebasestorage.app",
    messagingSenderId: "917068608601",
    appId: "1:917068608601:web:7c684a8d5b16b157d5ad48"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta la instancia de Firestore
export const db = getFirestore(app);