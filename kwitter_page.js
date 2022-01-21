const firebaseConfig = {
      apiKey: "AIzaSyCJRNVFURS6k4j7hvcz4s46IIPSZfyCAas",
      authDomain: "kwitter-b4ed0.firebaseapp.com",
      databaseURL: "https://kwitter-b4ed0-default-rtdb.firebaseio.com",
      projectId: "kwitter-b4ed0",
      storageBucket: "kwitter-b4ed0.appspot.com",
      messagingSenderId: "590185587201",
      appId: "1:590185587201:web:b595d84134d59157175600"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value ="";
}
