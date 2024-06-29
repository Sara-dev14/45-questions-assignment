let animals: string[] = ["Dog", "Cat", "Rabbit"];

console.log("List of animals:");
for (let animal of animals) {
    console.log(animal);
}

console.log("\nStatements about each animal:");
for (let animal of animals) {
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
