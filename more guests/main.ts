let guestArray: string[] = ["hania","moeez","ayesha"];

let canNotAttened:string = "ayesha";

let newGuest :string ="aina";

guestArray[guestArray.indexOf(canNotAttened)]=newGuest;

console.log(guestArray);

// guestArray.map((items)=> console.log (`hello, ${items} you are invited to dinner`));

console.log("Welcome all we found a bigger dinner table!");

guestArray.unshift("bushra");


let middleGuest:string = "aqsa";
let midleIndex = guestArray.length/2;
guestArray.splice(midleIndex,0,middleGuest);


guestArray.push("maria");

guestArray.map((item)=> console.log(`\nDear ${item} You are invited to dinner!`));