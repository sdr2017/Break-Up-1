var $select;

$(document).ready(function() {


        $(document).on("click", ".1-100", function() {
            var $select = $(".1-100");
            for (i=1;i<=100;i++){
              $select.append($('<option></option>').val(i).html(i))
            }
        });

        $(document).on("click", ".2000-2020", function() {
            var $select = $(".1-31");
            for (i=1;i<=31;i++){
              $select.append($('<option></option>').val(i).html(i))
            }
        });
        $(document).on("click", ".1-31", function() {
            var $select = $(".2000-2020");
            for (i=2000;i<=2020;i++){
              $select.append($('<option></option>').val(i).html(i))
            }
        });

// Forloops that populate the pulldown menues for age, day of the month, and year.
  $select = $(".1-100");
    for (i=1;i<=100;i++){
      $select.append($('<option></option>').val(i).html(i))
    }

  $select = $(".1-31");
    for (i=1;i<=31;i++){
      $select.append($('<option></option>').val(i).html(i))
    }

  $select = $(".2000-2020");
    for (i=2000;i<=2020;i++){
      $select.append($('<option></option>').val(i).html(i))
  }

  //HIDE & SHOW FUNCTIONS///////////////////////////////////////////

        function hideSignIn() { //for hiding the sign in buttons
            $("#signIn").hide();
          };
        function showSignIn() {
            $("#signIn").show();
          };

        
        function hideInputs() { //for hiding the input fields
            $("#inputFields").hide();
          };
          hideInputs();
        
        function showInputs() {
            $("#inputFields").show();
          };

        
        function hideStageButtons() { //for hiding the stage buttons
            $("#buttonStages").hide();
          };
          hideStageButtons();

        function showStageButtons() {
            $("#buttonStages").show();
          };


        function hideSongs() { //for hiding the songs panel
            $("#songs").hide();
          };
          hideSongs();

        function showSongs() {
            $("#songs").show();
          };


        function hideFood() { //for hiding the food panel
            $("#food").hide();
          };
          hideFood();

        function showFood() {
            $("#food").show();
          };

        function hideMovies() { //for hiding the movie panel
            $("#movies").hide();
          };
          hideMovies(); 

        function showMovies() {
            $("#movies").show();
          };

  ///////////////////////////////////////////


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

