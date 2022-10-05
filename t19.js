let guest_list ={

    first_guest: "Mohammad Ibrahim",
    second_guest: "Mohammad Ismail",
    third_guest: "Abdul Kareem",
}
let guest_list_1 = ["Mohammad Usman", "Mohammad Iqram", "Abdul Sami"]

// We are gladly inviting  to join us on 25-Dec as we plan to arrange a delicious dinner party.

console.log(" We are gladly inviting " + guest_list.first_guest+" to join us on 25-Dec as we plan to arrange a delicious dinner party");
console.log(" We are gladly inviting " + guest_list.second_guest+" to join us on 25-Dec as we plan to arrange a delicious dinner party");
console.log(" We are gladly inviting " + guest_list.third_guest+" to join us on 25-Dec as we plan to arrange a delicious dinner party");
console.log("");

for (let index = 0; index < guest_list_1.length; index++) {
    
    console.log(" We are gladly inviting " + guest_list_1[index]+ " to join us on 25-Dec as we plan to arrange a delicious dinner party");
}