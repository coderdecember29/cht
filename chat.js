const firebaseConfig = {
  apiKey: "AIzaSyAeGwscduLA2OzH7Ip3gITDrt2GxrxNhCU",
  authDomain: "chat-database-4838f.firebaseapp.com",
  databaseURL: "https://chat-database-4838f-default-rtdb.firebaseio.com",
  projectId: "chat-database-4838f",
  storageBucket: "chat-database-4838f.appspot.com",
  messagingSenderId: "946983082332",
  appId: "1:946983082332:web:4677407977c248b2ae0999",
  measurementId: "G-DPKSGBTWPT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  
  
 firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
console.log("roomname - " + Room_names);
row = "<div class='room_name' id='" + Room_names + "' onclick='redirecttoroomname(this.id)'> # " + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      
      });});}
getData();

function addroom()
{
      room_name = document.getElementById("roomsname").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "addingroomname"
      });
      localStorage.setItem("roomname",room_name);

      window.location = "chat.html";
}


function redirecttoroomname(name)
{
console.log(name);
localStorage.setItem("roomname",name);
window.location = "chat.html";
}

function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("roomsname");
      window.location = "index.html";
}
    
