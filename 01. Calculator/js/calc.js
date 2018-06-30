function calculate(){

    const regex = /(\d{0,10}\.?\d{0,10})/g;
    const invalidInput = /([^\d+\.?\d|*\/+-])/;
    const operatorEnd = /[*/+-]$/;

    var input = document.getElementById('equation').value;

    if(input.match(invalidInput) || input.match(operatorEnd)){
        alert("Wrong Input");
    }

    else{

        if(input.length > 254){

            alert("Maximum character lenght: 255, try with less characters!");

        } else{
            var result = eval(input);
            if(result == "Infinity"){
                alert("Cannot divide by 0");
            }
            else{
                alert("Result: " + result);
            }
        }
    }

}

function removeLast() {
    var currentEq = document.getElementById('equation').value;
    document.getElementById('equation').value = currentEq.substring(0, currentEq.length-1);
}
