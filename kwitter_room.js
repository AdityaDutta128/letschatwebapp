
var firebaseConfig = {
  apiKey: "AIzaSyAs21KXUwD4rkAJMaVp2hqGW_LCeVRIXQA",
  authDomain: "let-schatwebapp.firebaseapp.com",
  databaseURL: "https://let-schatwebapp-default-rtdb.firebaseio.com",
  projectId: "let-schatwebapp",
  storageBucket: "let-schatwebapp.appspot.com",
  messagingSenderId: "641335323960",
  appId: "1:641335323960:web:3b8d8691107fcb9ebe65cd"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name"); 
document.getElementById("UserName").innerHTML = "Welcome " + user_name + "!"; 
function addRoom() { room_name = document.getElementById("room_name").value; 
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); 
localStorage.setItem("room_name", room_name); 
window.location = "kwitter_page.html"; }

function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
Room_names = childKey;
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
document.getElementById("output").innterHTML += row;
});
});
}

getData(); 
function redirectToRoomName(name) { console.log(name); 
  localStorage.setItem("room_name", name); 
  window.location = "kwitter_page.html"; }


function logOut() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}