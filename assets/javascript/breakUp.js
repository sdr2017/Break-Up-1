var $select;

$(document).ready(function() {

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


        function hideBooks() { //for hiding the food panel
            $("#books").hide();
          };
          hideBooks();

        function showBooks() {
            $("#books").show();
          };

        function hideMovies() { //for hiding the movie panel
            $("#movies").hide();
          };
          hideMovies(); 

        function showMovies() {
            $("#movies").show();
          };

  ///////////////////////////////////////////
  $("#submitDetails").on('click', function() {
    // Get values from user input
    var startMonth = $("#startMonth option:selected").text();
    var startDay = $("#startDay option:selected").text();
    var startYear = $("#startYear option:selected").text();

    // Make user input into string of format "MM-DD-YYYY"
    var dateEnteredString = startMonth + "-" + startDay + "-" + startYear;


    // Make into a moment.js object - specify format of date we're using
    var dateEnteredObject = moment(
      dateEnteredString,
      "MMMM-DD-YYYY"
      );

    // Making a moment.js object that has a value of right now
    var dateTodayObject = moment();

    // Get the time since break up in years AS A NUMBER
    var timeSinceBreakUpInYears = dateTodayObject.diff(
      dateEnteredObject, "years"
      );

    // Get the time since break up in days AS A NUMBER
    var timeSinceBreakUpInDays = dateTodayObject.diff(
      dateEnteredObject, "days"
      );
    console.log("It has been " + timeSinceBreakUpInYears + " years since your break-up!");
    console.log("It has been " + timeSinceBreakUpInDays + " days since your break-up!");
    
  });

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
    showBooks();
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
    showBooks();
    showMovies();

  });

//Stages on click functions//////////////////////////////////
  var songs = $("#stageDisplaySongs"); //variable of where to push songs items in html
  var books = $("#stageDisplayBooks"); //variable of where to push books items in html
  var movies = $("#stageDisplayMovies"); //variable of where to push movies items in html
  var queryURL = "https://www.goodreads.com/search.xml?key=0wKYZNN20RnrtQAvwc1AA&q=";


//Denial
  $(document).on("click", "#choseDenial", function() {
    
    $(".breakUpStage").empty().append("Denial");  // appends emotion slection to titles
   
    //Songs
    var denialIFrame = '<iframe src="https://open.spotify.com/embed/user/megapowerrangers/playlist/2fJkLyw3TDn4sp56QAGggb" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'
    songs.html(denialIFrame);

    //Books
    var randomBooks = getRandomIndexes(denialBooks, 3);
    for (var index = 0; index < 3; index++) {
      $.ajax({
        url: queryURL + randomBooks[index],
        method: "GET"}).done(function(response){console.log(response);}); 
    }
    // randomDenialBooks();
    //Movies
  });

//Anger
  $(document).on("click", "#choseAnger", function() {

    $(".breakUpStage").empty().append("Anger");  // appends emotion slection to titles

    //Songs
    var angerIFrame = '<iframe src="https://open.spotify.com/embed/user/megapowerrangers/playlist/7eGiguVw0T63dv3QERdJMx" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'
    songs.html(angerIFrame);

    //Books

    //Movies
  });

//Misery
  $(document).on("click", "#choseMisery", function() {

    $(".breakUpStage").empty().append("Misery");  // appends emotion slection to titles

    //Songs
    var miseryIFrame = '<iframe src="https://open.spotify.com/embed/user/megapowerrangers/playlist/1bsLiVYXgrHOdO2y8U0HCT" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'
    songs.html(miseryIFrame);

    //Books

    //Movies
  });

//Affirmation
  $(document).on("click", "#choseAffirmation", function() {

    $(".breakUpStage").empty().append("Affirmation");  // appends emotion slection to titles

    //Songs
    var affirmationIFrame = '<iframe src="https://open.spotify.com/embed/user/megapowerrangers/playlist/79qu0ABIQd0fzj7LqzJqWo" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'
    songs.html(affirmationIFrame);

    //Books

    //Movies
  });

//Groove On
  $(document).on("click", "#choseGrooveOn", function() {

    $(".breakUpStage").empty().append("Groove On");  // appends emotion slection to titles

    //Songs
    var grooveIFrame = '<iframe src="https://open.spotify.com/embed/user/megapowerrangers/playlist/47jFq4WEnYApeu9Tb2YASw" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'
    songs.html(grooveIFrame);

    //Books

    //Movies
  });

////////////////////////////////////////////////////////////

var randomDenial = 0;

// Book Suggestions
var denialBooks = ["Under+the+Tuscan+Sun", "High+Fidelity", "Bridget+Jones+Diary", 
"Gone+Girl", "The+Skeleton+Crew", "MWF+Seeking+BFF", "Self-Help",
"Tiny+Beautiful+Things", "A+Rogue+by+Any+Other+Name", "Yes+Please"];
var angerBooks = ["The+Long+Way+to+a+Small+Angry+Planet", "Brilliance", 
"A+Darker+Shade+of+Magic", "Year+Zero", "The+Paradox+Trilogy", 
"A+Knight+of+the+Seven+Kingdoms", "Persona", "Frostborn", "The+October+Daye", "Libriomancer"];
var miseryBooks = ["Hyperbole+and+a+Half", "Mr.+Penumbra’s+24-Hour+Bookshop", 
"The+Guest+Cat", "Hug+Me", "The+Perks+of+Being+a+Wallflower", "The+Martian", "Once+Upon+a+River",
"The Way I Used to Be", "What+We+Talk+About+When+We+Talk+About+Love", "Love+Letters+to+the+Dead"];
var affirmationBooks = ["The+Happy+Book", "A+Man+Called+Ove", "And+the+Mountains+Echoed",
"The+Last+Days+of+Rabbit+Hayes", "Odd+Thomas", "I'll+Give+You+the+Sun", "Milk+and+Honey",
"I+Am+the+Messenger", "Attitude+Reconstruction:+A+Blueprint+for+Building+a+Better+Life", "Hand+Drawn+Jokes+for+Smart+Attractive+People"];
var grooveOnBooks = ["Men+Are+from+Mars", "Women+Are+from+Venus", "The+100+Simple+Secrets+of+Great+Relationships",
"The+5+Love+Languages", "First+Comes+Love,+Then+Comes+Money", "The+Soulmate+Experience:+A+Practical+Guide+to+Creating+Extraordinary+Relationships",
"I+Kissed+Dating+Goodbye", "Boundaries+in+Dating", "Why+We+Broke+Up", "The+Five+Love+Languages+for+Singles", "Modern+Romance"]; 

// Randomly select 3 books
// -- Get one random number within the range of array length
// -- Get index immediately after and two indexes after
// -- if (randomIndex > array.length - 1)
// ---- randomIndex - arr.length

// Randomly select 3 books - ALTERNATIVE
// -- Make an array with 3 random numbers
// -- [Math.random * array.length]
// console.log(getRandomIndexes(grooveOnBooks, 5));

// Returns an array
function getRandomIndexes(booksArray, numberOfIndexes) {
  if (numberOfIndexes > booksArray.length) {
    throw new Error(
      "Too many indexes requested!" +
      "It can't be greater than the array length"
      );
  }
  var randomIndexes = [];
  for (var i = 0; i < numberOfIndexes; i += 1) {
    randomIndexes.push(booksArray[getRandomIndex(booksArray)]);
  }

  return randomIndexes;

  function getRandomIndex(booksArray) {
    var arrayLength = booksArray.length;
    var randomDecimal = Math.random();
    var arrayLengthDecimal = randomDecimal * arrayLength;
    var randomArrayIndex = Math.floor(arrayLengthDecimal);
    return randomArrayIndex;
  }
}

// Randomly select 3 books
// For each book
// -- build the query url
// -- pull from url
// -- update ui with stuff

var queryURL = "https://www.goodreads.com/search.xml?key=0wKYZNN20RnrtQAvwc1AA&q="; 

var randomDenialBooks = function () {
  var bookLimit =Object.keys(denialBooks.length);
    randomDenial = Math.floor((Math.random() * bookLimit) +1);
    $("#stageDisplayBooks").html(randomDenial+queryURL);
};
// Book Suggestion API

//Movie Suggestions
var denialMovies = ["Brazil", "Eternal Sunshine of the Spotless Mind", "The Way We Were"];
var angerMovies = ["John Tucker Must Die", "Wreck it Ralph", "Mad Max: Fury Road"];
var miseryMovies = ["Before Sunrise", "Wall-e", "The Breakup"];
var affirmationMovies = ["Heathers", "Sliding Doors", "Annie Hall"];
var grooveOnMovies = ["Princess Bride", "Michael Bolton’s Big Sexy Valentine’s Day Special", "The Emperor’s New Groove"];

//declaring movie var
var Movie = "";

  $("#choseDenial").on("click", function(event) {

        // Preventing the submit button from trying to submit the form
        event.preventDefault();

        //loop for denial movies
        for(var i=0; i<denialMovies.length; i++) {
          movie = denialMovies[i]; //setting movie to new array value
          getMovies (movie); //call movie function

        };
     
  });



  //function for movies
  function getMovies(movieStage){
   var movieURL = "http://www.omdbapi.com/?t=" + movieStage + "&y=&plot=short&apikey=40e9cece";

    // CODE GOES HERE
    $.ajax({
        url: movieURL,
        method: "GET"
      })
      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) {

        // Transfer content to HTML
        $("#stageDisplayMovies").append('<br><br><strong>' + response.Title + '</strong><br><br>');
        $("#stageDisplayMovies").append(response.Plot + '<br>');
        var movieImage = $('<img id="movieimage">');
        movieImage.attr("src", response.Poster);
        $("#stageDisplayMovies").append(movieImage);

      
      });
  }

});

