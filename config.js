import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
  apiKey: "AIzaSyDCUWpZd9_wCk9js8lRQb4JnZttGpIOD7E",
  authDomain: "complaintforum-b1d70.firebaseapp.com",
  projectId: "complaintforum-b1d70",
  storageBucket: "complaintforum-b1d70.appspot.com",
  messagingSenderId: "128696621473",
  appId: "1:128696621473:web:20fec16cad2f3b71f593e0"

};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

