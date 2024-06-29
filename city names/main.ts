function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

let cityCountry1 = city_country("Lahore", "Pakistan");
let cityCountry2 = city_country("Tokyo", "Japan");
let cityCountry3 = city_country("Paris", "France");

console.log(cityCountry1); // "Lahore, Pakistan"
console.log(cityCountry2); // "Tokyo, Japan"
console.log(cityCountry3); // "Paris, France"
