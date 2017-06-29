var $select;

$(document).ready(function() {
//homepage Background
  $("#body").attr('background', 'assets/images/homePattern.jpg');

  $select = $(".1-100");
    for (i=1;i<=100;i++){
      $select.append($('<option></option>').val(i).html(i))
    }

  $select = $(".1-31");
    for (i=1;i<=31;i++){
      $select.append($('<option></option>').val(i).html(i))
    }

  $select = $(".2000-2020");
    for (i=2015;i<=2018;i++){
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

    if (timeSinceBreakUpInDays < 7) {
      $("#stagePanel").append("Wow, you only recently broke up. We recommend starting out in the Denial stage.");
    }

    if (timeSinceBreakUpInDays > 7 && timeSinceBreakUpInDays < 14) {
      $("#stagePanel").append("You broke up over a week ago. We recommend moving on to the Anger stage.");
    }

      if (timeSinceBreakUpInDays >= 14 && timeSinceBreakUpInDays < 21) {
      $("#stagePanel").append("You broke up over two weeks ago. We recommend moving on to the Misery stage.");
    }

    if (timeSinceBreakUpInDays >= 21 && timeSinceBreakUpInDays < 28) {
      $("#stagePanel").append("You broke up over three weeks ago. We recommend moving on to the Affirmation stage.");
    }

    if (timeSinceBreakUpInDays >= 28 && timeSinceBreakUpInDays < 35) {
      $("#stagePanel").append("You broke up over a month ago. We think you're ready to GrOoVe On!");
    }

    if (timeSinceBreakUpInDays >= 35) {
      $("#stagePanel").append("Your break-up occurred some time ago. You should seek professional help.");
    }

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
  
  // GoodReads API Search
  var queryURL = "https://www.goodreads.com/search.xml?key=0wKYZNN20RnrtQAvwc1AA&q=";


//Denial
  $(document).on("click", "#choseDenial", function() {
    
    $(".breakUpStage").empty().append("Denial");  // appends emotion slection to titles
    //background
      $("#body").attr('background', 'assets/images/denialPattern.jpg');
      $(".panel-heading").css("color", "#8aa583");  // Changes the color of the panel heading text to match the button color
   
    //Songs
    var denialIFrame = '<iframe src="https://open.spotify.com/embed/user/megapowerrangers/playlist/2fJkLyw3TDn4sp56QAGggb" width="300" height="535" frameborder="0" allowtransparency="true"></iframe>'
    songs.html(denialIFrame);


    // Books
    //Picks a random book from the Denial Books
    var randomBooks = getRandomIndexes(denialBooks, 3);
    $("#stageDisplayBooks").empty();
    for (var index = 0; index < 3; index++) {
      $.ajax({
        url: queryURL + randomBooks[index],
        method: "GET"}).done(function(response){
        console.log(response);
        var bookInfoObject = xmlToJson(response);
        // Locates the correct JSON information
        var workArray = bookInfoObject.GoodreadsResponse.search.results.work;
        // Locates the image and title for the books.
        var image = workArray[0].best_book.image_url["#text"];
        var title = workArray[0].best_book.title["#text"];
        // Appends the title and image to the stage display books.
        $("#stageDisplayBooks").append('<br><br><strong>' + title + '</strong><br><br>');
        var bookImage = $('<img id="bookImage">');
        bookImage.attr("src", image);
        $("#stageDisplayBooks").append(bookImage);
      }); 
    }

    //Movies

        //loop for denial movies
        $("#stageDisplayMovies").empty();
        for(var i=0; i<denialMovies.length; i++) {
          movie = denialMovies[i]; //setting movie to new array value
          getMovies (movie); //call movie function

        };

  });

//Anger
  $(document).on("click", "#choseAnger", function() {
    //background
      $("#body").attr('background', 'assets/images/angerPattern.jpg');

    $(".breakUpStage").empty().append("Anger");  // appends emotion slection to titles

    //Songs
    var angerIFrame = '<iframe src="https://open.spotify.com/embed/user/megapowerrangers/playlist/7eGiguVw0T63dv3QERdJMx" width="300" height="535" frameborder="0" allowtransparency="true"></iframe>'
    songs.html(angerIFrame);

    // Books
    //Picks a random book from the Anger Books
    var randomAngerBooks = getRandomIndexes(angerBooks, 3);
    $("#stageDisplayBooks").empty();
    for (var j = 0; j < 3; j++) {
      $.ajax({
        url: queryURL + randomAngerBooks[j],
        method: "GET"}).done(function(response){
        console.log(response);
        var bookInfoAngerObject = xmlToJson(response);
        // Locates the correct JSON information
        var workAngerArray = bookInfoAngerObject.GoodreadsResponse.search.results.work;
        // Locates the image and title for the books.
        var angerImage = workAngerArray[0].best_book.image_url["#text"];
        var angerTitle = workAngerArray[0].best_book.title["#text"];
        // Appends the title and image to the stage display books.
        $("#stageDisplayBooks").append('<br><br><strong>' + angerTitle + '</strong><br><br>');
        var bookAngerImage = $('<img id="bookImage">');
        bookAngerImage.attr("src", angerImage);
        $("#stageDisplayBooks").append(bookAngerImage);
      }); 
    }

    //Movies
     //loop for anger movies
        $("#stageDisplayMovies").empty();
        for(var i=0; i<angerMovies.length; i++) {
          movie = angerMovies[i]; //setting movie to new array value
          getMovies (movie); //call movie function

        };
  });

//Misery
  $(document).on("click", "#choseMisery", function() {
    //background
      $("#body").attr('background', 'assets/images/miseryPattern.jpg');

    $(".breakUpStage").empty().append("Misery");  // appends emotion slection to titles
  
    //Songs
    var miseryIFrame = '<iframe src="https://open.spotify.com/embed/user/megapowerrangers/playlist/1bsLiVYXgrHOdO2y8U0HCT" width="300" height="535" frameborder="0" allowtransparency="true"></iframe>'
    songs.html(miseryIFrame);

    // Books
    //Picks a random book from the Misery Books
    var randomMiseryBooks = getRandomIndexes(miseryBooks, 3);
    $("#stageDisplayBooks").empty();
    for (var k = 0; k < 3; k++) {
      $.ajax({
        url: queryURL + randomMiseryBooks[k],
        method: "GET"}).done(function(response){
        console.log(response);
        var bookInfoMiseryObject = xmlToJson(response);
        // Locates the correct JSON information
        var workMiseryArray = bookInfoMiseryObject.GoodreadsResponse.search.results.work;
        // Locates the image and title for the books.
        var miseryImage = workMiseryArray[0].best_book.image_url["#text"];
        var miseryTitle = workMiseryArray[0].best_book.title["#text"];
        // Appends the title and image to the stage display books.
        $("#stageDisplayBooks").append('<br><br><strong>' + miseryTitle + '</strong><br><br>');
        var bookMiseryImage = $('<img id="bookImage">');
        bookMiseryImage.attr("src", miseryImage);
        $("#stageDisplayBooks").append(bookMiseryImage);
      }); 
    }

    //Movies
     //loop for misery movies
        $("#stageDisplayMovies").empty();
        for(var i=0; i<miseryMovies.length; i++) {
          movie = miseryMovies[i]; //setting movie to new array value
          getMovies (movie); //call movie function

        };
  });

//Affirmation
  $(document).on("click", "#choseAffirmation", function() {
    //background
      $("#body").attr('background', 'assets/images/affirmationPattern.jpg');

    $(".breakUpStage").empty().append("Affirmation");  // appends emotion slection to titles

    //Songs
    var affirmationIFrame = '<iframe src="https://open.spotify.com/embed/user/megapowerrangers/playlist/79qu0ABIQd0fzj7LqzJqWo" width="300" height="535" frameborder="0" allowtransparency="true"></iframe>'
    songs.html(affirmationIFrame);

      // Books
    //Picks a random book from the Affirmation Books
    var randomAffirmationBooks = getRandomIndexes(affirmationBooks, 3);
    $("#stageDisplayBooks").empty();
    for (var l = 0; l < 3; l++) {
      $.ajax({
        url: queryURL + randomAffirmationBooks[l],
        method: "GET"}).done(function(response){
        console.log(response);
        var bookInfoAffirmationObject = xmlToJson(response);
        // Locates the correct JSON information
        var workAffirmationArray = bookInfoAffirmationObject.GoodreadsResponse.search.results.work;
        // Locates the image and title for the books.
        var affirmationImage = workAffirmationArray[0].best_book.image_url["#text"];
        var affirmationTitle = workAffirmationArray[0].best_book.title["#text"];
        // Appends the title and image to the stage display books.
        $("#stageDisplayBooks").append('<br><br><strong>' + affirmationTitle + '</strong><br><br>');
        var bookAffirmationImage = $('<img id="bookImage">');
        bookAffirmationImage.attr("src", affirmationImage);
        $("#stageDisplayBooks").append(bookAffirmationImage);
      }); 
    }

    //Movies
     //loop for affirmation movies
        $("#stageDisplayMovies").empty();
        for(var i=0; i<affirmationMovies.length; i++) {
          movie = affirmationMovies[i]; //setting movie to new array value
          getMovies (movie); //call movie function

        };
  });

//Groove On
  $(document).on("click", "#choseGrooveOn", function() {
    //background
      $("#body").attr('background', 'assets/images/groovePattern.jpg');

    $(".breakUpStage").empty().append("Groove On");  // appends emotion slection to titles

    //Songs
    var grooveIFrame = '<iframe src="https://open.spotify.com/embed/user/megapowerrangers/playlist/47jFq4WEnYApeu9Tb2YASw" width="300" height="535" frameborder="0" allowtransparency="true"></iframe>'
    songs.html(grooveIFrame);

     // Books
    //Picks a random book from the Groove On Books
    var randomGrooveOnBooks = getRandomIndexes(grooveOnBooks, 3);
    $("#stageDisplayBooks").empty();
    for (var m = 0; m < 3; m++) {
      $.ajax({
        url: queryURL + randomGrooveOnBooks[m],
        method: "GET"}).done(function(response){
        console.log(response);
        var bookInfoGrooveOnObject = xmlToJson(response);
        // Locates the correct JSON information
        var workGrooveOnArray = bookInfoGrooveOnObject.GoodreadsResponse.search.results.work;
        // Locates the image and title for the books.
        var grooveOnImage = workGrooveOnArray[0].best_book.image_url["#text"];
        var grooveOnTitle = workGrooveOnArray[0].best_book.title["#text"];
        // Appends the title and image to the stage display books.
        $("#stageDisplayBooks").append('<br><br><strong>' + grooveOnTitle + '</strong><br><br>');
        var bookGrooveOnImage = $('<img id="bookImage">');
        bookGrooveOnImage.attr("src", grooveOnImage);
        $("#stageDisplayBooks").append(bookGrooveOnImage);
      }); 
    }

    //Movies
     //loop for grooveOn movies
        $("#stageDisplayMovies").empty();
        for(var i=0; i<grooveOnMovies.length; i++) {
          movie = grooveOnMovies[i]; //setting movie to new array value
          getMovies (movie); //call movie function

        };
  });

////////////////////////////////////////////////////////////

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

var queryURL = "https://www.goodreads.com/search.xml?key=0wKYZNN20RnrtQAvwc1AA&q="; 

var randomDenialBooks = function () {
  var bookLimit =Object.keys(denialBooks.length);
    randomDenial = Math.floor((Math.random() * bookLimit) +1);
    $("#stageDisplayBooks").html(randomDenial+queryURL);
};

//Movie Suggestions
var denialMovies = ["Brazil", "Eternal Sunshine of the Spotless Mind", "The Way We Were"];
var angerMovies = ["John Tucker Must Die", "Wreck it Ralph", "Mad Max: Fury Road"];
var miseryMovies = ["Before Sunrise", "Wall-e", "The Breakup"];
var affirmationMovies = ["Heathers", "Sliding Doors", "Annie Hall"];
var grooveOnMovies = ["Princess Bride", "Michael Bolton’s Big Sexy Valentine’s Day Special", "The Emperor’s New Groove"];

//declaring movie var
var Movie = "";

  //function for movies
  function getMovies(movieStage){
   var movieURL = "https://www.omdbapi.com/?t=" + movieStage + "&y=&plot=short&apikey=40e9cece";

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

