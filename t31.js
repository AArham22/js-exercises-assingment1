let user = new Array(3);
user[0] = "Abdul";
user[1] = "samad";
user[2] = "Ahmed";
user[3] = "kamran";
user[0] = undefined
user[1] = undefined
user[2] = undefined
user[3] = undefined




for (let index = 0; index < user.length; index++) {
    if(user[index] == undefined){
        console.log("we need to find some user")
        // break;
    }
    else{
        console.log("user are available ")
    }
    
}

