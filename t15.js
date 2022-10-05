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

guest_list.push("Amjad khan");

for (let i = 0; i < guest_list.length; i++) {
    
    console.log(guest_list[i]);
}

