function calculate(){
    const regex = /(\d+\.?\d{0,7})/g;
    const invalidInput = /([^\d+\.?\d|*\/+-])/;
    const operatorEnd = /[*/+-\.]$/;
    var input = document.getElementById('equation').value;

    if(input.match(invalidInput) || input.match(operatorEnd)){
        alert("Wrong Input");
    }

    else{

        if(input.length > 254){
            alert("Maximum character lenght: 255, try with less characters!");
        } else {
            var result = eval(input);
            
            if(result == "Infinity") {
                alert("Cannot divide by 0");
            } else {
                alert("Result: " + result);
            }
        }
    }
}

function removeLast() {
    var currentEq = document.getElementById('equation').value;
    document.getElementById('equation').value = currentEq.substring(0, currentEq.length-1);

}

function addToEquation(charInput) {
    const operators = ["-", "+", "*", "/", "."];
    var currentEQ = document.getElementById('equation').value;
    var lastCharOfEQ = currentEQ[currentEQ.length-1];
    if(operators.includes(charInput)) {
       if(operators.includes(lastCharOfEQ)){
        document.getElementById('equation').value = currentEQ.substring(0, currentEQ.length-1);
       }
       document.getElementById('equation').value += charInput;
    } else {
        document.getElementById('equation').value += charInput;
    }
}