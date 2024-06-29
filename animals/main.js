var animals = ["Dog", "Cat", "Rabbit"];
console.log("List of animals:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
console.log("\nStatements about each animal:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    switch (animal) {
        case "Dog":
            console.log("A dog would make a great pet.");
            break;
        case "Cat":
            console.log("A cat can be an independent companion.");
            break;
        case "Rabbit":
            console.log("A rabbit is a cute and quiet pet.");
            break;
        default:
            console.log("This animal is not recognized.");
    }
}
console.log("\nWhat these animals have in common:");
console.log("Any of these animals would make a great pet!");
