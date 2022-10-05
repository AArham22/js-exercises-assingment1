let user_name = ["Abdul samad" , "Kamran" , "Ahmed"];

let new_user = ["abdul samad" ,"salman" , "Rehan"];


for (let index = 0; index < user_name.length; index++) {
   
    if(user_name[index].toLowerCase() == new_user[index].toLowerCase()){
        console.log(new_user[index] + " username already exist ")
    }
    else{
        console.log(new_user[index] + " Username exist");
    }
    
}