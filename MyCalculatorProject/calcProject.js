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











//first manipulate the history and ouput sections
// function getHistory () {
//     return document.getElementById("history-value").innerText;
// }

// function printHistory(num) {
//   return  document.getElementById("history-value").innerText = num;
// }

// function getOutput() {
//     return document.getElementById("output-value").innerText;
// }

// function printOutput (num) {
//     if (num == ""){
//         document.getElementById("output-value").innerText = num;
//     }
//     else{
//         document.getElementById("output-value").innerText = getFormattedNumber(num);   //this line of code helps to make the number value readable ie giving values comma or dot
//     }
// }
//     //this function reads the number and returns comma seperated value
// function getFormattedNumber(num) {
//    //to fix the output CE from giving us the NaN value we will use th if/else statement
//     if (num == ""){
//         return "";
//     }
//     var n = Number(num);
//     var value = n.toLocaleString("en");
//     return value;
// }  
// printOutput("9847543");
// //the code below returns the numbeers back to its original state without the commas
// function reverseNumberFormat(num){
//     return Number(num.replace(/,/g,''));
// }
// var operator = document.getElementsByClassName("operator");
// //here we use the for loop to access the opertors one by one
// for(var i = 0; i < operator.length; i++){
//         operator[i].addEventListener('click', function(){  //inside this function we can give what action we need to perform when he clicks on the operator
//             if (this.id == "clear"){   //when clicked, theis clear button would remove both history and output values
//                 printHistory("");
//                 printOutput("");
//             }
//             //now for the backspace CE button. first we convert it to the number format so the backspace should not deal with the commas in the output
//            else if (this.id == "backspace") {
//                var output = reverseNumberFormat(getOutput()).toString();
//                if(output){ //if output has a value
//                 output = output.substr (0,output.length -1);
//                 printOutput(output);
//             }
//         }
//         else { //this code checks if the output is not empty
//             var output = getOutput();
//             var history = getHistory();
//             //here when the output is empty and history is not, we create a condition to fix thst
//             if (output == ""&& history != ""){
//                 if (isNaN(history[history.length-1])){
//                     history = history.substr(0,history.length-1);
//                 }
//             }
//             if(output !="" || history != ""){
//                 /*if the input is not empty whereas the output is empty,then the output variable must be set to an empty value. 
//                 it will be converted to a number format only if the output has a value. we do that using the conditional operator*/
//                 output = output == ""?
//                 output: reverseNumberFormat(output);
//                 //in a calculator, when an operator is clicked the output value is first added to the history
//                 history += output;
//                 if(this.id == "="){
//                     var result = eval(history);
//                     printOutput(result);
//                     printHistory("");
//                 }
//                 else {
//                     history += this.id;
//                     printHistory(history);
//                     printOutput("");
//                 }
//             }

//         }

//     });
// }
// var number= document.getElementsByClassName("number");
// //here we use the for loop to access the opertors one by one
// for(var i = 0; i < number.length; i++){
//         number[i].addEventListener('click', function(){  //inside this function we can give what action we need to perform when he clicks on the operator
//             var output = reverseNumberFormat(getOutput());
//             if(output != NaN){ //check if output is not a number ie number starts to work when clicked
//                 output += this.id;
//                 printOutput(output);

//             }
//     });
// }


