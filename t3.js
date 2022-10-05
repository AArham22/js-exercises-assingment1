// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.



const nameofperson2_ = "ABDUL SALAM";
const nameofperson2 = "mohammad ahmed";
let lowercase_ = nameofperson2_.toLowerCase();
let uppercase_ = nameofperson2.toUpperCase();


console.log(lowercase_);
console.log(uppercase_);
//first statement working
let first_letter = nameofperson2.charAt(0).toUpperCase();
const start_1 = nameofperson2.indexOf(nameofperson2.charAt(1));
const end_1 = nameofperson2.indexOf(" ");
let first_statement = nameofperson2.substring(start_1,end_1);
// console.log(first_letter+""+first_statement);





// second statement working
let second_letter = nameofperson2.indexOf(" ");
// a gain
let second_letter_addition = second_letter + 1;  
const second_statement = nameofperson2.substring(second_letter_addition);
// A
const firstlettercapitalization = second_statement.charAt(0).toUpperCase();
// hmed  
const movingahead = nameofperson2.substring(second_letter_addition+1);
// console.log(firstlettercapitalization.concat(movingahead));



// finalizing title case
console.log(first_letter+""+first_statement + " " + firstlettercapitalization.concat(movingahead));















   






// we are converting the nameofperson2_ in to tittle case 

// first we have to convert it into lowercase 
// than get the first letter from the white space before
// after white space index value+1 convert into uppercase
// const nameofperson2 = "mohammad ahmed";

// pass by reference
// let zeroindex = nameofperson2.charAt(0).toUpperCase();
// // first letter convert into uppercase 





// for (let i = 1; i < nameofperson2.length; i++) {
//     let chara = nameofperson2.charAt(i);
//     let change2 = nameofperson2.charAt(i+1).toUpperCase();
//     if(nameofperson2.charAt(i) == " "){
//         // let change2 = nameofperson2.charAt(i+1).toUpperCase();
//         console.log(change2);
//         i++;
//     }
//     else{
//         // let chara = nameofperson2.charAt(i);
//         console.log(chara);
//         // console.log(chara + " " + change2);
//     }

    
// }





