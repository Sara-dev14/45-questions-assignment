let numbers: number[] = [1, 2, 3, 4, 5];

console.log(numbers[2]); 

let numberx: number[] = [1, 2, 3, 4, 5];

console.log(numbers[10]);  

let numberz: number[] = [1, 2, 3, 4, 5];

let index: number = 10;
if (index >= 0 && index < numbers.length) {
    console.log(numbers[index]);
} else {
    console.log("Index is out of range.");
}
