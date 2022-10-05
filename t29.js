let favourite_fruit = ["Banana ", " Apple" , "Lemons" ];

for (let index = 0; index < favourite_fruit.length; index++) {
    if(favourite_fruit[index] == favourite_fruit[0]){
        console.log("You really like  " + favourite_fruit[0]);
    }
    else if(favourite_fruit[index] == favourite_fruit[1]){
        console.log("You really like  " + favourite_fruit[1]);
    }
    else if(favourite_fruit[index] == favourite_fruit[2]){
        console.log("You really like  " + favourite_fruit[2]);
    }
    else{
        console.log("Not found");
    }
    
}