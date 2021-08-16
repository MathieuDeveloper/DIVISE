// get values, call functions
function getValues() {
    let ditValue = document.getElementById("ditValue").value;
    let viseValue = document.getElementById("viseValue").value;

    ditValue = parseInt(ditValue);
    viseValue = parseInt(viseValue);

    createValues(ditValue, viseValue);
    alert(hundredValues);
    displayNumbers(hundredValues);

}

// logic function
function createValues(ditValue, viseValue) {
let hundredValues = []
    for (let hValue = 0; hValue <= 100; hValue++) {
        
        if (hValue % ditValue == 0 && hValue % viseValue == 0) {
            hundredValues.push("Divise");
            
        } else {
            if (hValue % ditValue == 0 && hValue % viseValue != 0) {
                hundredValues.push("Dit");               
            } else {
                if (hValue % ditValue != 0 && hValue % viseValue == 0) {
                    hundredValues.push("Vise");
                } else {
                    hundredValues.push(hValue);
                }
            }            
        }           
    }
    return hundredValues;
}

//view function
function displayNumbers(hundredValues) {
    let templateTab = ""

    for (let index = 0; index < hundredValues.length; index++) {

        let number = hundredValues[index];

        templateTab += `<tr><td>${number}</td></tr>`;

 document.getElementById("results").innerHTML = templateTab;
    
}
}
