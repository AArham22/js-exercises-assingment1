console.log("five places in the world you’d like to visit. ");

// original array 
let places = ["Rome","Maui","Masai Mara","New Zealand","Istanbul"];

console.log("Original array ");
console.log("")
for (let index = 0; index < places.length; index++) {
    console.log(places[index]);
    
}


// Temporary sorted array 
let copy_ = [...places];
console.log("")
console.log("Sorted array : ");
for (var i = 0; i < copy_.length; i++) {
    for (var j = i+1; j < copy_.length; j++) {
        if(copy_[i] > copy_[j]){

            var temp = copy_[i];
            copy_[i] = copy_[j];
            copy_[j] = temp;

        }
        
        
    }
    console.log(copy_[i]);
    
    
}

console.log("")
console.log("Still in original formate  : ");
for (let index3 = 0; index3 < places.length; index3++) {
    console.log(places[index3]);
    
}
console.log("");
console.log("Reverse alphabtic order :");
for (var i = 0; i < copy_.length; i++) {
    for (var j = i+1; j < copy_.length; j++) {
        if(copy_[i] < copy_[j]){

            var temp = copy_[i];
            copy_[i] = copy_[j];
            copy_[j] = temp;

        }
        
        
    }
    console.log(copy_[i]);
    
    
}
console.log("")
console.log("Still in original formate  : ");
for (let index3 = 0; index3 < places.length; index3++) {
    console.log(places[index3]);
    
}

let reverse_ = places.reverse();
console.log("")
console.log("Array in the reverse form with its original order affected by the reverse functionality")
for (let q = 0; q < reverse_.length; q++) {
    console.log(places[q]);
    
}

let backagain = reverse_.reverse();
console.log("")
console.log("Array back to its original formate : ")
for (let q = 0; q < reverse_.length; q++) {
    console.log(reverse_[q]);
    
}
console.log("")
console.log("Array sorted according to alphabetic order in the way that its order has been changed")
let changed_ = places.sort();
for (let q = 0; q < changed_.length; q++) {
    console.log(changed_[q]);
    
}

let reversealpha_ = changed_.reverse();
console.log("");
console.log("Array is noe dsiplayed in the reverse alphabtic order : ");
for (let q = 0; q < reversealpha_.length; q++) {
    console.log(reversealpha_[q]);
    
}








