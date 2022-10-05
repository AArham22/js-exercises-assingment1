// Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name.

var manufacturer,model_name,color,hp;

function car_details(manufacturer,model_name,color,hp){
    complete_info = {
        make: manufacturer,
        model: model_name,
        body: color,
        horse_power: hp
    }
    console.log(complete_info.make);
    console.log(complete_info.model);
    console.log(complete_info.body);
    console.log(complete_info.horse_power);
}
car_details("Honda" , "Civic" , "Black" , 1800,"Turbo","Punjab Registered");








// It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.