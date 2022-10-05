let guest_list = ["Mohammad Ibrahim", "Mohammad Ismail", "Abdul Kareem"
]

console.log();

for (let index = 0; index < guest_list.length; index++) {
    console.log("We are gladly inviting " + guest_list[index] + " to join us on 25-Dec as we plan to arrange a delicious dinner party.");
    console.log();
}


// updating the second guest as he is not able to attend the event
console.log();
console.log();
console.log(guest_list[1] + " is not able to attend the event Replacing him with Abdul Samad ");
console.log();
console.log();




guest_list[1] = "Abdul Samad";
console.log();

for (let index1 = 0; index1 < guest_list.length; index1++) {
    console.log("We are gladly inviting " + guest_list[index1] + " to join us on 25-Dec as we plan to arrange a delicious dinner party.");
    console.log();
}


console.log("");

console.log("As we found a bigger dinner table for our event so ");

console.log("");

// at the beginning of the array 
console.log("Guest added at the beginning of the list ")
let beginning_guest = guest_list.unshift("Mohammad Shahid");
for (let index = 0; index < guest_list.length; index++) {
    console.log(guest_list[index]);
    
}

console.log("");

// if we want to add the element in middle of the array so we have to follow sorting techniques otherwise its not possible to shift any value from a particular index value so in this case we are going to use bubble sort technique
console.log("")
console.log("Guest added at the middle of the list ")
console.log("")
for (let i = 0; i < guest_list.length; i++) {
    if(i == 0){
        // console.log(guest_list[i]);
    }
    else if(i == 1){
        var temp = guest_list[i];
        guest_list[i] = "Mohammad Bilal";
        // console.log(guest_list[i]);
        
    }
    else if(i == 2){
        var temp1 = guest_list[i];
        guest_list[i] = temp;
        // console.log(guest_list[i]);
    }
    
    else if(i == 3){
        var temp2 = guest_list[i];
        guest_list[i] = temp1;
        guest_list[i+1] = temp2;
        // console.log(guest_list[i]);
        // console.log(guest_list[i+1]);
        
    }

    
}

for (let index = 0; index < guest_list.length; index++) {
    console.log(guest_list[index]);
    
}
// now we have add the guest at the end of  the list


let last_guest = guest_list.push("Sara Amjad");
console.log("");
console.log("Guest added at the end of  the list");

for (let index = 0; index < guest_list.length; index++) {
    console.log(guest_list[index]);
    
}

console.log("");
console.log("You can invite only two people for dinner ")
console.log("");

console.log("Removing name from the list of  the guest ");
let removeguest1 = guest_list.pop("Sara Amjad");
console.log("");
console.log("Sorry " + removeguest1 + " You are not invited on dinner");
console.log("");

let removeguest2 = guest_list.pop("Abdul Kareem");
console.log("");
console.log("Sorry " + removeguest2 + " You are not invited on dinner");
console.log("");

let removeguest3 = guest_list.pop("Abdul Samad");
console.log("");
console.log("Sorry " + removeguest3 + " You are not invited on dinner");
console.log("");



console.log("")
for (let index = 0; index < guest_list.length; index++) {
    console.log("You are still invited on dinner : "+guest_list[index]);
    
}

let removeagain = guest_list.pop();
let removeagain2 = guest_list.pop();

console.log("");
console.log("");
console.log("Last two names from list are also removed thats why undefined si displayed if we use for loop so it wouldnt display undefined as the loop is the length of  the array so after poping element the length of the array becomes 1 so if we have to display the empty list at the end of out program so we have to display it with customized approach ");

console.log("");

for (let k = 0; k < 3; k++) {
    console.log(guest_list[k]);
    
}
