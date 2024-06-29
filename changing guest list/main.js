var guestArray = ["hania", "moeez", "ayesha"];
var canNotAttened = "ayesha";
console.log("".concat(canNotAttened, " can not make it to dinner"));
var newGuest = "aina";
guestArray[guestArray.indexOf(canNotAttened)] = newGuest;
console.log(guestArray);
guestArray.map(function (items) { return console.log("hello, ".concat(items, " you are invited to dinner")); });
