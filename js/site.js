// get values, call functions
function getValues() {
    let ditValue = document.getElementById("ditValue").value;
    let viseValue = document.getElementById("viseValue").value;

    ditValue = parseInt(ditValue);
    viseValue = parseInt(viseValue);


    
    displayNumbers(ditValue, viseValue);

}


//view function
function displayNumbers(ditValue, viseValue) {
    let templateTab = ""

    for (let i = 0; i <= 100; i++) {
        
        if (i % ditValue == 0 && i % viseValue == 0) {
            templateTab += `<tr><td>FizzBuzz</td></tr>`;
            
        } else {
            if (i % ditValue == 0 && i % viseValue != 0) {
                templateTab += `<tr><td>Fizz</td></tr>`;               
            } else {
                if (i % ditValue != 0 && i % viseValue == 0) {
                    templateTab += `<tr><td>Buzz</td></tr>`;
                } else {
                    templateTab += `<tr><td>${i}</td></tr>`;
                }
            }            
        }           
    }

document.getElementById("results").innerHTML = templateTab;
}
