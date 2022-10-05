function alien(alien_color){
    if (alien_color == "Green") {
        console.log("Player just earned 5 points ");
    }
    else if(alien_color == "Yellow") {
        console.log("Player just earned 10 points ");

    }
    else if(alien_color == "Red") {
        console.log("Player just earned 15 points ");

    }
    else{
        // do nothing
    }

}
// Three versions of  the program working for every block respectively 

alien("Green");
alien("Yellow");
alien("Red");