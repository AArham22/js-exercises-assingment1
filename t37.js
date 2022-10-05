let size, msg;

function make_shirt(size, msg) {
    if (size == "large" || size == "medium") {
        console.log("")
        console.log("The message should be printed on a shirt is I love JavaScript and the size of the shirt would be " + size);
    }
    else {
        console.log("")
        console.log("The message should be printed on a shirt is " + msg + " and the size of the shirt would be " + size);
    }

}

make_shirt("large","hello large boy")
make_shirt("medium","hello medium boy")
make_shirt("small","Die with memories, not dreams")


