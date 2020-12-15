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

