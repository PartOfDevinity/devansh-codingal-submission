console.log("\nUsing while loop for generating OTP")
for(let i = 1; i <= 4; i++){
    digit = Math.floor(Math.random() * 10)
    console.log(digit)
}

console.log("\nusing while loop for generating OTP")
let i = 1
while(i <= 4){
    digit = Math.floor(Math.random() * 10)
    console.log(digit)
    i++
}
const day = "Tuesday"

switch(day) {
    case "Monday":
     console.log("Start of the week!");
     break;
    case "Tuesday":
     console.log("It's tuesday, Keep going!");
     break;
    case "friday":
     console.log("Weekend is near!");
     break;
    default: 
     console.log("It's a regular day.");      
}   