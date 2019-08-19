import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
// import firebase from 'firebase'

Vue.config.productionTip = false

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyBllnLL7fdsvX4MLVtIhPqIP9c65d7AmL0',
//   authDomain: 'treasure2019-ric.firebaseapp.com',
//   databaseURL: 'https://treasure2019-ric.firebaseio.com',
//   projectId: 'treasure2019-ric',
//   storageBucket: '',
//   messagingSenderId: '121526578288',
//   appId: "1:121526578288:web:92c9e64cc38720e7"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})