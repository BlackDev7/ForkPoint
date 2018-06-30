function calculate(){

    const regex = /(\d+\.?\d{0,10})/g;
    const invalidInput = /([^\d+\.?\d{0,10}|*\/+-])/;
    const operatorEnd = /[*/+-]$/;
    const operators = /[*/+-]/;

    var input = document.getElementById('equation').value;

    if(input.match(invalidInput) || input.match(operatorEnd)){
        alert("Wrong Input");
    }
    else{

        var matches = regex.exec(input);
        console.dir(matches.length);
        for(var i=0; i<matches.length; i++){
            console.dir(matches[i].value);
        }

    }

}

function removeLast() {
    var currentEq = document.getElementById('equation').value;
    document.getElementById('equation').value = currentEq.substring(0, currentEq.length-1);
}
