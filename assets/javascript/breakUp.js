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

	// Adding the restaurant API
	var zomatoKey = "b853dcffd2d93f88579c208dec0d059f";
	var cuisines = "https://developers.zomato.com/api/v2.1/cuisines/search?q=";

