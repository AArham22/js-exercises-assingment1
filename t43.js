var magicians = ["David Copperfield" , "Doug Henning", "Mark Wilson"]

function show_magicians(){
    for (let index = 0; index < magicians.length; index++) {
        console.log(magicians[index]);
        
    }

    
}
function make_great(){
    for (let index = 0; index < magicians.length; index++) {
        console.log("The Great "+magicians[index]);
        
    }

    
}
// Call show_magicians() with each array to show that you have one array of the original names

show_magicians();
console.log("");
// and one array with the Great added to each magician’s name.
make_great();