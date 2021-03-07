import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDOlJ-805pfUJxQbB7_nKcjUMf2mvLTjIA",
  authDomain: "e-commerce-inmobiliaria.firebaseapp.com",
  databaseURL: "https://e-commerce-inmobiliaria-default-rtdb.firebaseio.com",
  storageBucket: "e-commerce-inmobiliaria.appspot.com",
  messagingSenderId: "1027372208079",
};

firebase.initializeApp(config);

export default firebase;
