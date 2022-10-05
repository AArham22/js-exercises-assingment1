// equality and inequality with strings
let str = "Toyota";
let str1 = "Honda";
console.log(str != str1);
console.log(str == str1);

// using the lower case function

let up = "ANIMAL";
let low = "animal";
console.log(up != low);
console.log(up == low);

//  item is in array 
let items = ["Chair" , "Table " , " Pen " , "Pencil"];

for (let index = 0; index < items.length; index++) {
    if(items[index] == "Chair"){
       console.log(items[index] == "Chair");
       break;
    }
    else{   
    }
}
// item is not in a array 
for (let index = 0; index < items.length; index++) {
    if(items[index] != "paper"){
       console.log(items[index] != "paper");
       break;
    }
    else{   
    }
}


