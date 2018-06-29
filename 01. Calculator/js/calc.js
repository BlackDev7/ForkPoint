function calculate(){
    var firstNumber = document.getElementById('firstNumber').value;
    var secondNumber = document.getElementById('secondNumber').value;
    var operator = document.getElementById("operator");
    var operatorVal = operator.options[operator.selectedIndex].value;

    const regex = /^-?\d+\.?\d{0,10}$/gm;

        if(firstNumber.match(regex) && secondNumber.match(regex))
        {
            firstNumber = parseFloat(firstNumber);
            secondNumber = parseFloat(secondNumber);
            var result = 0;
            switch (operatorVal)
            {
                case "+":
                    result = firstNumber + secondNumber;
                    break;
                case "-":
                    result = firstNumber - secondNumber;
                    break;
                case "*":
                    result = firstNumber * secondNumber;
                    break;
                case "/":
                    if (firstNumber == 0 || secondNumber == 0)
                    {
                        alert("Cannot divide by 0");
                        return;
                    }
                    else
                    {
                        result = firstNumber / secondNumber;
                    }
                    break;
                case "%":
                    result = firstNumber % secondNumber;
                    break;
            }
            alert("Result: " + result);
        }
        else
        {
            alert("Invalid input, please try again!")
        }
}

function clearCalc()
{
   document.getElementById('firstNumber').value = '';
   document.getElementById('secondNumber').value = '';
}