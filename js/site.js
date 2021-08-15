// get values, call functions
function getValues() {
    let ditValue = document.getElementById("ditValue");
    let viseValue = document.getElementById("viseValue");

    ditValue = parseInt(ditValue);
    viseValue = parseInt(viseValue);
}

// logic function
function createValues() {
let hundredValues = []
    for (let hValue = 0; hValue <= 100; hValue++) {
        
        if (hvalue % 3 == 0 && hvalue % 5 == 0) {
            hundreValues.push("Divise");
            
        } else {
            if (hvalue % 3 == 0 && hvalue % 5 != 0) {
                hundreValues.push("Dit");               
            } else {
                if (hvalue % 3 != 0 && hvalue % 5 == 0) {
                    hundreValues.push("Vise");
                } else {
                    hundreValues.push(hValue);
                }
            }            
        }           
    }
    return hundredValues;
}

//view function
function displayNumbers() {
    

    
    document.getElementById("results").innerHTML = templateTab;
}
