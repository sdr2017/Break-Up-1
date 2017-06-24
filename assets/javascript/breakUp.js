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

//taking user to the input fields if clicking "I Just Broke Up!"
  $(document).on("click", "#justBrokeUp", function() {
    hideSignIn();
    showInputs();
  });

//taking user to the stages if clicking "I'm recovering"
  $(document).on("click", "#recovering", function() {
    hideSignIn();
    showStageButtons();
    showSongs();
    showFood();
    showMovies();
  });

//taking user to the stages after clicking "submit" in input fields
  $(document).on("click", "#submitDetails", function(event) {
    console.log("what's up?");
    event.preventDefault();
    hideSignIn();
    hideInputs();
    showStageButtons();
    showSongs();
    showFood();
    showMovies();

  });

//Stages on click functions//////////////////////////////////
  var songs = $("#stageDisplaySongs");

  $(document).on("click", "#choseDenial", function() {
    var denialIFrame = '<iframe src="https://open.spotify.com/embed/user/megapowerrangers/playlist/2fJkLyw3TDn4sp56QAGggb" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'
    songs.html(denialIFrame);
  });

  $(document).on("click", "#choseAnger", function() {
    var angerIFrame = '<iframe src="https://open.spotify.com/embed/user/megapowerrangers/playlist/7eGiguVw0T63dv3QERdJMx" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'
    songs.html(angerIFrame);
  });

  $(document).on("click", "#choseMisery", function() {
    var miseryIFrame = '<iframe src="https://open.spotify.com/embed/user/megapowerrangers/playlist/1bsLiVYXgrHOdO2y8U0HCT" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'
    songs.html(miseryIFrame);
  });

  $(document).on("click", "#choseAffirmation", function() {
    var affirmationIFrame = '<iframe src="https://open.spotify.com/embed/user/megapowerrangers/playlist/79qu0ABIQd0fzj7LqzJqWo" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'
    songs.html(affirmationIFrame);
  });

  $(document).on("click", "#choseGrooveOn", function() {
    var grooveIFrame = '<iframe src="https://open.spotify.com/embed/user/megapowerrangers/playlist/47jFq4WEnYApeu9Tb2YASw" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'
    songs.html(grooveIFrame);
  });

////////////////////////////////////////////////////////////

});

