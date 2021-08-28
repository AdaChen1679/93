//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCSE3ID3Mx1oZHg8wtragzOD2ERO6wT6vU",
      authDomain: "kwitter-37dd8.firebaseapp.com",
      databaseURL: "https://kwitter-37dd8-default-rtdb.firebaseio.com",
      projectId: "kwitter-37dd8",
      storageBucket: "kwitter-37dd8.appspot.com",
      messagingSenderId: "713367047841",
      appId: "1:713367047841:web:ef659041048c380b01aae0"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
