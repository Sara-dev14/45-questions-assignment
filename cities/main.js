function describe_city(city, country) {
    if (country === void 0) { country = "DefaultCountry"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi", "Pakistan");
describe_city("Tokyo", "Japan");
describe_city("Sydney");
