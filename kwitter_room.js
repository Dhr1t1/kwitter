
var firebaseConfig = {
      apiKey: "AIzaSyAMMgB6i6KP64hamwF84tSZygRteIwmcvs",
      authDomain: "kwitter-6278a.firebaseapp.com",
      databaseURL: "https://kwitter-6278a-default-rtdb.firebaseio.com",
      projectId: "kwitter-6278a",
      storageBucket: "kwitter-6278a.appspot.com",
      messagingSenderId: "328562905976",
      appId: "1:328562905976:web:3df9fdcd565ba14c98ae8d"
    };
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}

getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}