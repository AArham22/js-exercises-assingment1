// Write a function that accepts a array of items a person wants on a sandwich.
var items_in_sandwich =["Vegetables" , "cheese" , "meat " , "placed on slices of bread" , "placed between slices of bread "]


// The function should have one parameter that collects as many items as the function call provides,
var demand; 
function sandwich(){
    for (let index = 0; index < items_in_sandwich.length; index++) {
        console.log(items_in_sandwich[index])
        
    }
}

function order(demand){
    console.log("I want a sandwich with " + demand)
}
// it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time
console.log("")
order("Vegetables and cheese placed on slices of bread");
console.log("")
order("meat and cheese placed between slices of bread ");
console.log("")
order("Vegetables and cheese placed between slices of bread ");










