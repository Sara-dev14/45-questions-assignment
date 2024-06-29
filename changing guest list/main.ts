let guestArray: string[] = ["hania","moeez","ayesha"];

let canNotAttened:string = "ayesha";

console.log(`${canNotAttened} can not make it to dinner`);

let newGuest :string ="aina";

guestArray[guestArray.indexOf(canNotAttened)]=newGuest;

console.log(guestArray);

guestArray.map((items)=> console.log (`hello, ${items} you are invited to dinner`));

