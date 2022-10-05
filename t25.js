function alien(alien_color){
    if (alien_color == "Green") {
        console.log("Player just earned 5 points ");
    }
    else{
        console.log("Player didn't earned anything as the color was not the green ");

    }
}


function alien2(alien_color){
    if (alien_color == "Green") {
        console.log("Test passed");
    }
    else{
        console.log("");
        
    }
}
alien("Green")
alien("yellow")
alien2("Green")
alien2("Red")
