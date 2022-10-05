// Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information

var name,title,number;
function make_album(name,title,number = undefined){
    let music_album = {
        artist_name: name,
        album_title: title,
        number_of_tracks: number
    }

    console.log(music_album.artist_name + " : " + music_album.album_title + " " + music_album.number_of_tracks);

}

// Use the function to make three dictionaries representing different albums Print each return value to show that Objects are storing the album information correctly

make_album("Atif aslam" , "Meri kahani" , 12);
make_album("Atif aslam" , "Jal pari" , 10);
make_album("Atif aslam" , "Doorie");


// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object.

// Make at least one new function call that includes the number of tracks on an album.