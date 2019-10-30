import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyBxZlTq90fb8JcOn2FMBUYq_Sn1fn1a5hc',
  authDomain: 'todoist-clone-e00bf.firebaseapp.com',
  databaseURL: 'https://todoist-clone-e00bf.firebaseio.com',
  projectId: 'todoist-clone-e00bf',
  storageBucket: 'todoist-clone-e00bf.appspot.com',
  messagingSenderId: '910655443148',
  appId: '1:910655443148:web:4cf7ebd44833ec5199f269'
})

export { firebaseConfig as firebase }
