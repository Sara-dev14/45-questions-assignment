function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`The shirt is size ${size} with the message: ${message}`);
}

make_shirt();

make_shirt("Medium");

make_shirt("Small", "JavaScript is awesome!");
