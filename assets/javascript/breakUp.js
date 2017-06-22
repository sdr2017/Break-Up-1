$(document).ready(function() {

// Add the Firebase Database
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBOzSjqz7LpVFYpVO5McXdXVq4O7T1Q1No",
    authDomain: "gogopowerrangers-2632a.firebaseapp.com",
    databaseURL: "https://gogopowerrangers-2632a.firebaseio.com",
    projectId: "gogopowerrangers-2632a",
    storageBucket: "",
    messagingSenderId: "317199683141"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  	var name = "";
    var gender = "";
    var age = 0;
    var mood = "";
    var zipcode = 0;
    var breakupdate = 0;
    var currentmood = "";

     database.ref().push({
        name: name,
        gender: gender,
        age: age,
        mood: mood,
        zipcode: zipcode,
        breakupdate: breakupdate,
        currentmood: currentmood
        
      });

});





// Add the Spotify API

