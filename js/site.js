// get values, call functions
function getValues() {
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);


    
    displayNumbers(fizzValue, buzzValue);

}


//view function
function displayNumbers(fizzValue, buzzValue) {
    let templateTab = ""

    for (let i = 1; i <= 100; i++) {
        
        if (i % fizzValue == 0 && i % buzzValue == 0) {
            templateTab += `<tr><td>FizzBuzz</td></tr>`;
            
        } else {
            if (i % fizzValue == 0 && i % buzzValue != 0) {
                templateTab += `<tr><td>Fizz</td></tr>`;               
            } else {
                if (i % fizzValue != 0 && i % buzzValue == 0) {
                    templateTab += `<tr><td>Buzz</td></tr>`;
                } else {
                    templateTab += `<tr><td>${i}</td></tr>`;
                }
            }            
        }           
    }

document.getElementById("results").innerHTML = templateTab;
}
