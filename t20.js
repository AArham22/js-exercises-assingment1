// countries, cities, languages,

let a , b ,c;
let couarr ,ciarr , lanarr;
function countries(a,b,c){
    return couarr = [a,b,c];
}

function cities(a,b,c){
    return ciarr = [a,b,c];
}

function languages(a,b,c){
    return lanarr = [a,b,c];
}

console.log(countries("Pakistan" , "Japan " , "Germany"));
console.log(cities("Karachi" , "Tokyo" , "Berlin"));
console.log(languages("Urdu" , "Japanese " , "German"));

for (let index = 0; index < couarr.length; index++) {
    console.log("Country : " + couarr[index]);
    
}
for (let index = 0; index < ciarr.length; index++) {
    console.log("City : "+ciarr[index]);
    
}
for (let index = 0; index < lanarr.length; index++) {
    console.log("Language : "+lanarr[index]);
    
}
