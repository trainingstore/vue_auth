import Vue from "vue";
import App from "./App.vue";
import router from "./router"
import firebase from 'firebase'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDwuuBJLU8p1NegdL3wYNdN4rj4zb8amj8",
    authDomain: "auth-ca096.firebaseapp.com",
    projectId: "auth-ca096",
    storageBucket: "auth-ca096.appspot.com",
    messagingSenderId: "1069238863735",
    appId: "1:1069238863735:web:7e654e2a7c6e9be8cb8372"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
