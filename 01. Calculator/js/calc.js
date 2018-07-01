$("body").on("click", "button", function (event) {
    var clickVal = $(this).val();
    switch(clickVal) {
        case 'calc':
            calculate();
            break;
        case 'CE':
            $("#equation").val("");
            break;
        case 'C':
            removeLast();
            break;
        default:
            addToEquation(clickVal);
            break;
    }
});

$("#equation").keypress(keyPressedHandler);

function calculate(){
    const invalidInput = /([^\d+\.?\d|*\/+-])/;
    const operatorEnd = /[*/+-\.]$/;
    var input = document.getElementById('equation').value;

    if(input.match(invalidInput)) {
        alert("Wrong Input");
    }

    else {
 
        if(input.match(operatorEnd)) {
            return;
        }
        if(input.length > 254) {
            alert("Maximum character lenght: 255, try with less characters!");
        } else {
            var result = eval(input);
            if(result == undefined) return false;
            if(result == "Infinity" || result == "-Infinity") {
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
        if(charInput == ".") {
            if(currentEQ.length == 0){
                addCharToEQ(0);
            }
            var anyDotsBeforeRegex = /^(\d+(\.\d+)+?(?=[\-\+\/\*]?))/;
            var reversedEq = currentEQ.split("").reverse().join("");
            if(anyDotsBeforeRegex.test(reversedEq)){
                return;
            }
        }
        if(operators.includes(lastCharOfEQ)) {
            removeLast();
        }
        addCharToEQ(charInput);
    } else {
        addCharToEQ(charInput);
    }
}

function addCharToEQ(charInput) {
    document.getElementById('equation').value += charInput;
}

function keyPressedHandler(e){
    var keyCode = e.keyCode;
    if(keyCode == 13) calculate();
    if((keyCode > 47 && keyCode < 58) || (keyCode > 41 && keyCode < 48)) {
        if(keyCode == 44){
            addToEquation(".");
            return false;
        }
        addToEquation(e.key);
        return false;
     
    } else {
        return false;
    }
}