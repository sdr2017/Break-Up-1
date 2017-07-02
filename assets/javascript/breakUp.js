

$(document).ready(function() {

  // Connect with a Firebase Database///////////////////////////////////////////////////////////////////////////////////////////

  var config = {  // Add the Firebase Database
    apiKey: "AIzaSyBOzSjqz7LpVFYpVO5McXdXVq4O7T1Q1No",
    authDomain: "gogopowerrangers-2632a.firebaseapp.com",
    databaseURL: "https://gogopowerrangers-2632a.firebaseio.com",
    projectId: "gogopowerrangers-2632a",
    storageBucket: "",
    messagingSenderId: "317199683141"
  };
  
  firebase.initializeApp(config); // Initialize Firebase
  var database = firebase.database();

  $("#body").attr('background', 'assets/images/homePattern.jpg'); //homepage Background

  // Pulldown menu selectors/////////////////////////////////////////////////////////////////////////////////////////////////////
  
  function breakUpDateSelecter() {
  
    var thisYear = moment().year(); //Pulls the current date and seperates it by day, month, and year
    var thisMonth = moment().month();
    var thisDay = moment().date();
    var months = [ "Janaury", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var $select;

    $select = $(".1-100");  //Age pulldown selector
      for (i = 1; i <= 100; i++) {
        $select.append($('<option></option>').val(i).html(i))
      }

    $select = $(".2000-2020");  //Year selector
      for (i = 2010; i <= thisYear; i++) {
        $select.append($('<option></option>').val(i).html(i))
      }
  
    $(".1-31").hide();  //Hides the month and day selectors 
    $(".currentMonth").hide();
    $(".monthPastYear").hide();
    $(".1-31PastMonth").hide();

    $(".2000-2020").on("change",function() {  //Registers the user selection and parses it into a variable
      var userYear =this.value;

      if (userYear == 2017) { //Determines which forloop is run to fill the months selector
        $(".currentMonth").show();  //Month selector by runing through the array only up to the current month 
        $select = $(".currentMonth");
          for (i = 0; i <= thisMonth; i++) {
          }

          for (j = 0; j <= months[i].length; j++) {  //Pushes the new array length to the html
            $select.append($('<option></option>').val(months[j]).html(months[j]))
          }

      } else {
  
        $(".monthPastYear").show(); //All months selector grabs all of the months from the array and pushes to html 
         $select = $(".monthPastYear");
            for (i = 0; i <= months.length; i++) {
              $select.append($('<option></option>').val(months[i]).html(months[i]))
            }
      }

      $(".currentMonth").on("change", function() {
        var userThisMonth =this.value;
        if (userThisMonth == months[i - 1]) {     
          $(".1-31").show();      
          $select = $(".1-31"); // //Day of the month selector
            for (i = 1; i <= thisDay; i++) {
            $select.append($('<option></option>').val(i).html(i))
           }

        } else {
          
          $(".1-31PastMonth").show();
          $select = $(".1-31PastMonth");
            for (i = 1; i <= 31; i++) { //All day selector
             $select.append($('<option></option>').val(i).html(i))
            }
        }
      })
    })
  }

  breakUpDateSelecter();

  //HIDE & SHOW FUNCTIONS////////////////////////////////////////////////////////////////////////////////////////////////////////

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

  function hideMoveOn() { //for hiding the move on panel
    $("#stageDisplayMoveOn").hide();
  };

  hideMoveOn();

  function showMoveOn() {
    $("#stageDisplayMoveOn").show()
  };

  // Acts on user input data/////////////////////////////////////////////////////////////////////////////////////////////////////
  
  $("#submitDetails").on('click', function(event) {
    event.preventDefault();

    var startMonth = $("#startMonth option:selected").text(); // Get values from user input
    var startDay = $("#startDay option:selected").text();
    var startYear = $("#startYear option:selected").text();
    var dateEnteredString = startMonth + "-" + startDay + "-" + startYear;  // Make user input into string of format "MM-DD-YYYY"
    var dateEnteredObject = moment(dateEnteredString, "MMMM-DD-YYYY");  // Make into a moment.js object - specify format of date we're using
    var dateTodayObject = moment(); // Making a moment.js object that has a value of right now 
    var timeSinceBreakUpInYears = dateTodayObject.diff(dateEnteredObject, "years");  // Get the time since break up in years AS A NUMBER
    var timeSinceBreakUpInDays = dateTodayObject.diff(dateEnteredObject, "days"); // Get the time since break up in days AS A NUMBER
    
    console.log("It has been " + timeSinceBreakUpInYears + " years since your break-up!");
    console.log("It has been " + timeSinceBreakUpInDays + " days since your break-up!");

    if (timeSinceBreakUpInDays < 7) {
      $("#stagePanel").append("Wow, you only recently broke up. We recommend starting out in the Denial stage.");
      showSongs();
      showBooks();
      showMovies();
      $("#choseDenial").click();
    }

    if (timeSinceBreakUpInDays > 7 && timeSinceBreakUpInDays < 14) {
      $("#stagePanel").append("You broke up over a week ago. We recommend moving on to the Anger stage.");
      showSongs();
      showBooks();
      showMovies();
      $("#choseAnger").click();
    }

      if (timeSinceBreakUpInDays >= 14 && timeSinceBreakUpInDays < 21) {
      $("#stagePanel").append("You broke up over two weeks ago. We recommend moving on to the Misery stage.");
      showSongs();
      showBooks();
      showMovies();
      $("#choseMisery").click();
    }

    if (timeSinceBreakUpInDays >= 21 && timeSinceBreakUpInDays < 28) {
      $("#stagePanel").append("You broke up over three weeks ago. We recommend moving on to the Affirmation stage.");
      showSongs();
      showBooks();
      showMovies();
      $("#choseAffirmation").click();
    }

    if (timeSinceBreakUpInDays >= 28 && timeSinceBreakUpInDays < 35) {
      $("#stagePanel").append("You broke up over a month ago. We think you're ready to GrOoVe On!");
      showSongs();
      showBooks();
      showMovies();
      $("#choseGrooveOn").click();
    }

    if (timeSinceBreakUpInDays >= 35) {
      $("#stagePanel").append("Your break-up occurred some time ago. You should seek professional help.");
      showMoveOn();
    }

    var name = $("#nameInput").val().trim();  //collecting info from inputs and pushing user input to firebase
    var gender = $("#genderSelector option:selected").text();
    var age = $("#ageSelector").val().trim();
    var ex = $("#exInput").val().trim(); 
    var newUser = { //making an object out of the information
        name: name,
        gender: gender,
        age: age,
        breakupdate: dateEnteredString,
    };
    console.log(newUser);
    database.ref().push(newUser); //pushing the new user info to firebase

  });
 
  // Book Suggestions///////////////////////////////////////////////////////////////////////////////////////////////////////////

  var denialBooks = ["Under+the+Tuscan+Sun", "High+Fidelity", "Bridget+Jones+Diary", 
    "Gone+Girl", "The+Skeleton+Crew", "MWF+Seeking+BFF", "Self-Help",
    "Tiny+Beautiful+Things", "A+Rogue+by+Any+Other+Name", "Yes+Please"];
  var angerBooks = ["The+Good+Widow", "Magpie+Murder", 
    "A+Darker+Shade+of+Magic", "Year+Zero", "The+Silent+Corner", 
     "A+Knight+of+the+Seven+Kingdoms", "Persona", "The+Child", "He+Said+She+Said", "Libriomancer"];
  var miseryBooks = ["Hyperbole+and+a+Half", "No+Good+Deed", 
    "The+Guest+Cat", "Hug+Me", "The+Perks+of+Being+a+Wallflower", "The+Martian", "Once+Upon+a+River",
    "The+Way+I+Used+to+Be", "What+We+Talk+About+When+We+Talk+About+Love", "Love+Letters+to+the+Dead"];
  var affirmationBooks = ["The+Happy+Book", "A+Man+Called+Ove", "And+the+Mountains+Echoed",
    "The+Last+Days+of+Rabbit+Hayes", "Odd+Thomas", "The+Light+We+Lost", "Milk+and+Honey",
    "I+Am+the+Messenger", "Attitude+Reconstruction", "Hand+Drawn+Jokes+for+Smart+Attractive+People"];
  var grooveOnBooks = ["Men+Are+from+Mars", "Women+Are+from+Venus", "The+100+Simple+Secrets+of+Great+Relationships",
    "The+5+Love+Languages", "First+Comes+Love,+Then+Comes+Money", "The+Soulmate+Experience:+A+Practical+Guide+to+Creating+Extraordinary+Relationships",
    "I+Kissed+Dating+Goodbye", "Boundaries+in+Dating", "Why+We+Broke+Up", "The+Five+Love+Languages+for+Singles", "Modern+Romance"]; 


  //Handling the on the button selector on click event by pushing relevent functions///////////////////////////////////////////// 

  $(document).on("click", "#justBrokeUp", function() {  //taking user to the input fields if clicking "I Just Broke Up!"
    hideSignIn();
    showInputs();
  });

  $(document).on("click", "#recovering", function() { //taking user to the stages if clicking "I'm recovering"
    hideSignIn();
    showStageButtons();
    showSongs();
    showBooks();
    showMovies();
  });

  $(document).on("click", "#submitDetails", function(event) { //taking user to the stages after clicking "submit" in input fields
    console.log("what's up?");
    event.preventDefault();
    hideSignIn();
    hideInputs();
    showStageButtons();
  });

  //Stages on click functions////////////////////////////////////////////////////////////////////////////////////////////////////
  
  var songs = $("#stageDisplaySongs"); //variable of where to push songs items in html
  var books = $("#stageDisplayBooks"); //variable of where to push books items in html
  var movies = $("#stageDisplayMovies"); //variable of where to push movies items in html
  var queryURL = "https://www.goodreads.com/search.xml?key=0wKYZNN20RnrtQAvwc1AA&q="; // GoodReads API Search

  //Denial button pressed////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  $(document).on("click", "#choseDenial", function() {

    $(".breakUpStage").empty().append("Denial");  // appends emotion slection to titles
    $("#body").attr('background', 'assets/images/denialPattern.jpg')  //background
    $(".panel-heading").css("color", "#8aa583");  // Changes the color of the panel heading text to match the button color
   
    var denialIFrame = '<iframe src="https://open.spotify.com/embed/user/megapowerrangers/playlist/2fJkLyw3TDn4sp56QAGggb" width="300" height="535" frameborder="0" allowtransparency="true"></iframe>'  //Songs
    songs.html(denialIFrame);
    var randomBooks = getRandomIndexes(denialBooks, 3); // Books
    $("#stageDisplayBooks").empty();
    for (var index = 0; index < 3; index++) { //Picks a random book from the Denial Books

      $.ajax({
        url: queryURL + randomBooks[index],
        method: "GET"}).done(function(response){
        console.log(response);

        var bookInfoObject = xmlToJson(response);
        var workArray = bookInfoObject.GoodreadsResponse.search.results.work; // Locates the correct JSON information
        var image = workArray[0].best_book.image_url["#text"];// Locates the image and title for the books.
        var title = workArray[0].best_book.title["#text"];
        
        $("#stageDisplayBooks").append('<br><br><strong>' + title + '</strong><br><br>'); // Appends the title and image to the stage display books.
        var bookImage = $('<img id="bookImage">');
        bookImage.attr("src", image);
        $("#stageDisplayBooks").append(bookImage);
      }); 
    }

    $("#stageDisplayMovies").empty(); //Movies
    for(var i=0; i<denialMovies.length; i++) {  //loop for denial movies
      movie = denialMovies[i]; //setting movie to new array value
      getMovies (movie); //call movie function
    };

  });

  //Anger button pressed////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  $(document).on("click", "#choseAnger", function() {
    
    $("#body").attr('background', 'assets/images/angerPattern.jpg');  //background
    $(".breakUpStage").empty().append("Anger");  // appends emotion slection to titles
    var angerIFrame = '<iframe src="https://open.spotify.com/embed/user/megapowerrangers/playlist/7eGiguVw0T63dv3QERdJMx" width="300" height="535" frameborder="0" allowtransparency="true"></iframe>'  //Songs
    songs.html(angerIFrame);
    var randomAngerBooks = getRandomIndexes(angerBooks, 3); // Books
    $("#stageDisplayBooks").empty();
    for (var j = 0; j < 3; j++) {  //Picks a random book from the Anger Books

      $.ajax({
        url: queryURL + randomAngerBooks[j],
        method: "GET"}).done(function(response){
        console.log(response);

        var bookInfoAngerObject = xmlToJson(response);
        var workAngerArray = bookInfoAngerObject.GoodreadsResponse.search.results.work; // Locates the correct JSON information
        var angerImage = workAngerArray[0].best_book.image_url["#text"];// Locates the image and title for the books.
        var angerTitle = workAngerArray[0].best_book.title["#text"];
        
        $("#stageDisplayBooks").append('<br><br><strong>' + angerTitle + '</strong><br><br>');  // Appends the title and image to the stage display books.
        var bookAngerImage = $('<img id="bookImage">');
        bookAngerImage.attr("src", angerImage);
        $("#stageDisplayBooks").append(bookAngerImage);
      }); 
    }
 
    $("#stageDisplayMovies").empty(); //Movies
    for(var i=0; i<angerMovies.length; i++) { //loop for anger movies
      movie = angerMovies[i]; //setting movie to new array value
      getMovies (movie); //call movie function
    };
  });

  //Misery button pressed///////////////////////////////////////////////////////////////////////////////////////////////////////

  $(document).on("click", "#choseMisery", function() {
    
    $("#body").attr('background', 'assets/images/miseryPattern.jpg'); //background
    $(".breakUpStage").empty().append("Misery");  // appends emotion slection to titles
  
    var miseryIFrame = '<iframe src="https://open.spotify.com/embed/user/megapowerrangers/playlist/1bsLiVYXgrHOdO2y8U0HCT" width="300" height="535" frameborder="0" allowtransparency="true"></iframe>' //Songs
    songs.html(miseryIFrame);
  
    var randomMiseryBooks = getRandomIndexes(miseryBooks, 3); // Books
    $("#stageDisplayBooks").empty();
    for (var k = 0; k < 3; k++) { //Picks a random book from the Misery Books
      $.ajax({
        url: queryURL + randomMiseryBooks[k],
        method: "GET"}).done(function(response){
        console.log(response);

        var bookInfoMiseryObject = xmlToJson(response);
        var workMiseryArray = bookInfoMiseryObject.GoodreadsResponse.search.results.work; // Locates the correct JSON information
        var miseryImage = workMiseryArray[0].best_book.image_url["#text"];  // Locates the image and title for the books.
        var miseryTitle = workMiseryArray[0].best_book.title["#text"];
        
        $("#stageDisplayBooks").append('<br><br><strong>' + miseryTitle + '</strong><br><br>'); // Appends the title and image to the stage display books.
        var bookMiseryImage = $('<img id="bookImage">');
        bookMiseryImage.attr("src", miseryImage);
        $("#stageDisplayBooks").append(bookMiseryImage);
      }); 
    }
    
    $("#stageDisplayMovies").empty();  //Movies
      for(var i=0; i<miseryMovies.length; i++) {  //loop for misery movies
        movie = miseryMovies[i]; //setting movie to new array value
        getMovies (movie); //call movie function
       };
  });

  //Affirmation button pressed///////////////////////////////////////////////////////////////////////////////////////////////////

  $(document).on("click", "#choseAffirmation", function() {
    
    $("#body").attr('background', 'assets/images/affirmationPattern.jpg');  //background
    $(".breakUpStage").empty().append("Affirmation");  // appends emotion slection to titles

    var affirmationIFrame = '<iframe src="https://open.spotify.com/embed/user/megapowerrangers/playlist/79qu0ABIQd0fzj7LqzJqWo" width="300" height="535" frameborder="0" allowtransparency="true"></iframe>'  //Songs
    songs.html(affirmationIFrame);

    var randomAffirmationBooks = getRandomIndexes(affirmationBooks, 3); // Books
    $("#stageDisplayBooks").empty();
    for (var l = 0; l < 3; l++) { //Picks a random book from the Affirmation Books
      $.ajax({
        url: queryURL + randomAffirmationBooks[l],
        method: "GET"}).done(function(response){
        console.log(response);

        var bookInfoAffirmationObject = xmlToJson(response);       
        var workAffirmationArray = bookInfoAffirmationObject.GoodreadsResponse.search.results.work; // Locates the correct JSON information       
        var affirmationImage = workAffirmationArray[0].best_book.image_url["#text"];  // Locates the image and title for the books.
        var affirmationTitle = workAffirmationArray[0].best_book.title["#text"];
        
        $("#stageDisplayBooks").append('<br><br><strong>' + affirmationTitle + '</strong><br><br>');  // Appends the title and image to the stage display books.
        var bookAffirmationImage = $('<img id="bookImage">');
        bookAffirmationImage.attr("src", affirmationImage);
        $("#stageDisplayBooks").append(bookAffirmationImage);
      }); 
    }
     
    $("#stageDisplayMovies").empty(); //Movies, empty container
    for(var i=0; i<affirmationMovies.length; i++) { //loop for affirmation movies
      movie = affirmationMovies[i]; //setting movie to new array value
      getMovies (movie); //call movie function
    };
  });

  //Groove On button pressed/////////////////////////////////////////////////////////////////////////////////////////////////////

  $(document).on("click", "#choseGrooveOn", function() {
   
    $("#body").attr('background', 'assets/images/groovePattern.jpg'); //background
    $(".breakUpStage").empty().append("Groove On");  // appends emotion slection to titles

    var grooveIFrame = '<iframe src="https://open.spotify.com/embed/user/megapowerrangers/playlist/47jFq4WEnYApeu9Tb2YASw" width="300" height="535" frameborder="0" allowtransparency="true"></iframe>' //Songs
    songs.html(grooveIFrame);

    var randomGrooveOnBooks = getRandomIndexes(grooveOnBooks, 3); // Books
    $("#stageDisplayBooks").empty();
    for (var m = 0; m < 3; m++) { //Picks a random book from the Groove On Books
      $.ajax({
        url: queryURL + randomGrooveOnBooks[m],
        method: "GET"}).done(function(response){
        console.log(response);

        var bookInfoGrooveOnObject = xmlToJson(response);     
        var workGrooveOnArray = bookInfoGrooveOnObject.GoodreadsResponse.search.results.work; // Locates the correct JSON information  
        var grooveOnImage = workGrooveOnArray[0].best_book.image_url["#text"];  // Locates the image and title for the books.
        var grooveOnTitle = workGrooveOnArray[0].best_book.title["#text"];
        
        $("#stageDisplayBooks").append('<br><br><strong>' + grooveOnTitle + '</strong><br><br>'); // Appends the title and image to the stage display books.
        var bookGrooveOnImage = $('<img id="bookImage">');
        bookGrooveOnImage.attr("src", grooveOnImage);
        $("#stageDisplayBooks").append(bookGrooveOnImage);
      }); 
    }

    $("#stageDisplayMovies").empty(); //Movies empty container
      for(var i=0; i<grooveOnMovies.length; i++) {  //loop for grooveOn movies
        movie = grooveOnMovies[i]; //setting movie to new array value
        getMovies (movie); //call movie function
        };
  });

  //Book select functions////////////////////////////////////////////////////////////////////////////////////////////////////////

  function getRandomIndexes(booksArray, numberOfIndexes) {  // Returns an array
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

  var denialMovies = ["Brazil", "Eternal Sunshine of the Spotless Mind", "The Way We Were"];  //Movie Suggestions
  var angerMovies = ["John Tucker Must Die", "Wreck it Ralph", "Mad Max: Fury Road"];
  var miseryMovies = ["Before Sunrise", "Wall-e", "The Breakup"];
  var affirmationMovies = ["Heathers", "Sliding Doors", "Annie Hall"];
  var grooveOnMovies = ["Princess Bride", "Michael Bolton’s Big Sexy Valentine’s Day Special", "The Emperor’s New Groove"];
  var Movie = ""; //declaring movie var

  function getMovies(movieStage){ //function for movies
    var movieURL = "https://www.omdbapi.com/?t=" + movieStage + "&y=&plot=short&apikey=40e9cece";
    $.ajax({
        url: movieURL,
        method: "GET"
    })
    .done(function(response) {  // We store all of the retrieved data inside of an object called "response"
  
      $("#stageDisplayMovies").append('<br><br><strong>' + response.Title + '</strong><br><br>'); // Transfer content to HTML
      $("#stageDisplayMovies").append(response.Plot + '<br>');
      var movieImage = $('<img id="movieimage">');
      movieImage.attr("src", response.Poster);
      $("#stageDisplayMovies").append(movieImage); 
    });
  }
});

