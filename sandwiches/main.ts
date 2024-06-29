function makeSandwich(...items: string[]) {
    console.log("Your sandwich will have the following items:");
    for (let item of items) {
      console.log("- " + item);
    }
    console.log(""); 
  }
  
  makeSandwich("Lettuce", "Tomato", "Bacon");
  makeSandwich("Turkey", "Cheese");
  makeSandwich("Ham", "Swiss Cheese", "Pickles", "Mustard");
