import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyDjsBJ3IdRZRRh50J-GXnEitkaRDN_vPIY",
  authDomain: "application-93416.firebaseapp.com",
  projectId: "application-93416",
  storageBucket: "application-93416.appspot.com",
  messagingSenderId: "257477397376",
  appId: "1:257477397376:web:30e65417bbab82b84ecf65"
};

const app = initializeApp(config);
export const dataBase = getFirestore();