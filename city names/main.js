function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
var cityCountry1 = city_country("Lahore", "Pakistan");
var cityCountry2 = city_country("Tokyo", "Japan");
var cityCountry3 = city_country("Paris", "France");
console.log(cityCountry1); // "Lahore, Pakistan"
console.log(cityCountry2); // "Tokyo, Japan"
console.log(cityCountry3); // "Paris, France"
