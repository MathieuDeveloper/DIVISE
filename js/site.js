// get values, call functions
function getValues() {
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);



    logicNumbers(fizzValue, buzzValue);
    displayFb(valArray);
}


//logic function
function logicNumbers(fizzValue, buzzValue) {
    let valArray = [];

    for (let i = 1; i <= 5; i++) {

        if (i % fizzValue == 0 && i % buzzValue == 0) {
            valArray.push('fizzbuzz');

        } else {
            if (i % fizzValue == 0 && i % buzzValue != 0) {
                valArray.push('fizz');
            } else {
                if (i % fizzValue != 0 && i % buzzValue == 0) {
                    valArray.push('buzz');
                } else {
                    valArray.push(i);
                }
            }
        }
    }

    return valArray;
}
// display
function displayFb(valArray){
    let templateRows ="";
    for (let index = 0; i <= valArray.length ; index++) {
        templateRows += `<tr><td>${valArray[index]}</td></tr>`;        
    }

}
