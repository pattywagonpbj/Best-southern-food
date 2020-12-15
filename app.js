    var username = prompt("Please enter your name");
    document.write("Welcome, " + username);

    function asktofindbreakfastspot(){
        var breakfastQuestion = confirm("Would you like to find a good breakfast spot?");
        if (breakfastQuestion==true){
            alert("Lets Go!");
        } else if (breakfastQuestion==false){
            alert("Learn to love breakfast!");
            window.location.replace('https://vinepair.com/articles/best-wines-2020/');
        }
    }

    function askUserHowManyStatesCookASouthernBreakfast(){
        var userAnswer = prompt ('How many states cook a southern breakfast?');
        while (userAnswer != 4){
            userAnswer = prompt('Try again!');
        } if (userAnswer = 4){
            alert('You got it!')
        }
    }

    function placeCurrentDate(){
        var todayDate = new Date(); 
        document.write(todayDate);
    }

    function numberGame(){
        var gameAnswer = prompt('Pick a number between 1 and 100. You get 12 guesses, so make them count!');
        for (var i = 0; i < 60; i++){
            if(gameAnswer === '23'){
                alert('You got it right! Congratulations!');
                break;
            } 
            if(i === 12 && gameAnswer != 4){
                alert('Well that was clearly not the answer, better luck next time champ!'); 
            }
            gameAnswer = prompt(`Pick a number between 1 and 100. You have ${23-i} guesses!`); 
        }
    }