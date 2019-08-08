// Exercise 1:
//
// Use a for loop to print numbers -3 through 8.
//
// for (var i = -3; i <= 8; i++){
//     console.log(i);
// }

// Exercise 2:
//
// Use a for loop to print from 0 to 50. Once it gets to 10, print "TEN!!!" instead of the number.
//
//
// for (var z = 0; z <= 50; z++){
//     if (z===10){
//         console.log("TEN!!!!!!!")
//     }
//     else{
//         console.log(z)
//     }
// }


//     Exercise 3:
//
// Prompt the user to enter a number. Prompt the user to enter another number. Create a for loop that counts from the first number to the second number.

var Num = parseInt(prompt("Enter a Number."));
var End = parseInt(prompt("Enter another number."));

for (var x = Num; x <= End; x++){
    console.log(x)
}
