let persons_name = "\tMohammad Ibrahim\t \n"

console.log("With whitespaces and extra lines : ");
console.log(persons_name);

console.log("After removing  whitespaces and extra lines : ");
let end_ = persons_name.trimEnd().trimStart();
console.log(end_);

