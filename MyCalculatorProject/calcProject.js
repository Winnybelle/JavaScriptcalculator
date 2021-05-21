//step1: use selectors to target our DOM elements
var zero = document.getElementById("zero");
var displayBtn = document.getElementById("display-value");
var clearBtn = document.getElementById("clear");
var number = document.getElementsByClassName("number");
var operator = document.getElementsByClassName("operator");



//step2: create variables that will hold temporary values
var numInput = "0";
var pendingInput;
var arrayEval = [];

//step4: create a function to update the display value
updateValue = (e) => {
    var holdValue = e.target.innerText;
    if (numInput === "0"){
        numInput = " ";
    }
// Append the content of the button we clicked to our numInput variable and display it
numInput += holdValue;
displayBtn.innerText = numInput;
}

//step 5: Create a function that performs the mathematical operations
calcOperators = (e) => {
    var operatorBtn = e.target.innerText;
   switch(operatorBtn) {
    case "+":
        pendingInput = numInput;
        numInput = "0";
        displayBtn.innerText = numInput;
        arrayEval.push(pendingInput);
        arrayEval.push("+");
         break;
    case "-":
            pendingInput = numInput;
            numInput = "0";
            displayBtn.innerText = numInput;
            arrayEval.push(pendingInput);
            arrayEval.push("-");
         break;
    case "*":
            pendingInput = numInput;
            numInput = "0";
            displayBtn.innerText = numInput;
            arrayEval.push(pendingInput);
            arrayEval.push("*");
         break;
    case "/":
            pendingInput = numInput;
            numInput = "0";
            displayBtn.innerText = numInput;
            arrayEval.push(pendingInput);
            arrayEval.push("/");
         break;
    case "%":
            pendingInput = numInput;
            numInput = " ";
            displayBtn.innerText = numInput;
            arrayEval.push(pendingInput);
            arrayEval.push("%");
         break;     
    case "=":
           arrayEval.push(numInput);
           var evaluation = eval(arrayEval.join(" "));
           // convert datatype from number to string
           numInput = evaluation + "";
           displayBtn.innerText = numInput;
           arrayEval = []; //clears the array
         break;
    default:
         break;
        }
}

//step3: add event listeners to the button to perform an action when clicked
//lets revisit our eventlistener
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", updateValue)
}
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click",calcOperators);
}


numInput = "0";
pendingInput = undefined;
arrayEval = "";

 //Step 6: Create a function that will clear everything
// On clicking the clear button, all values and the display are being reset 
clearBtn.onclick = () => {
    numInput= "0";
    pendingInput = undefined;
    arrayEval = [];
    displayBtn.innerHTML = numInput;
}
//step 7: Not allowing two decimal points in input
// zero.onclick = () => { 
//     if(!numInput.includes(".")) {
//         numInput += " ";
//     }
//     displayBtn.innerText = numInput;
// }











