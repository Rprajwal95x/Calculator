let display = document.getElementById('display');
let currentInput = "";

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    if (currentInput !== "" ) {
        currentInput += " " + operator + " ";
        display.value = currentInput;
    
    }
    else if( allclear!==""){
        display.value=allclear;
    }
    
}

function clearDisplay() {
    currentInput = "";
    display.value = "";
}
function deleteLast() {
    display.value = display.value.slice(0, -1)
    currentInput = display.value

}
function leftshift() {
    if (currentInput !== "") {
        let num = parseInt(currentInput);
        let shiftedNum = num << 1;  
        currentInput = shiftedNum.toString();
        display.value = currentInput;
    }
}

function rightshift() {
    if (currentInput !== "") {
        let num = parseInt(currentInput);
        let shiftedNum = num >> 1;  
        currentInput = shiftedNum.toString();
        display.value = currentInput;
    }
}
function calculateResult() {
    try {
        let result = eval(currentInput);
        display.value = result;
        currentInput = result.toString(); 
    } catch (error) {
        display.value = "Error";
        currentInput = "";
    }
}
