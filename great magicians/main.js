var magicians = ["Harry Houdini", "David Copperfield", "Teller", "Dynamo"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
    return magicians;
}
console.log("Original Magicians:");
show_magicians(magicians);
magicians = make_great(magicians);
console.log("\nGreat Magicians:");
show_magicians(magicians);
