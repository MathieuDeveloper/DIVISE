// get values, call functions
function getValues() {
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        let fbArray = fizzBuzz(fizzValue, buzzValue);
        displayFb(fbArray);
    } else {
        alert("You must enter integers");
    }
}

//logic function
function fizzBuzz(fizzValue, buzzValue) {
    let valuesArray = [];
    for (let i = 1; i <= 100; i++) {
        if (i % fizzValue == 0 && i % buzzValue == 0) {
            valuesArray.push('FizzBuzz');
        } else if (i % fizzValue == 0 && i % buzzValue != 0) {
            valuesArray.push('Fizz');
        } else if (i % fizzValue != 0 && i % buzzValue == 0) {
            valuesArray.push('Buzz');
        } else {
            valuesArray.push(i);
        }
    }
    return valuesArray;
}

// display function
function displayFb(fbArray) {
    let tableBody = document.getElementById("results");
    tableBody.innerHTML = "";
    let templateRow = document.getElementById("fbTemplate");

    for (let index = 0; index < fbArray.length; index += 5) {

        let tableRow = document.importNode(templateRow.content, true);
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];

        rowCols[1].classList.add(fbArray[index + 1]);
        rowCols[1].textContent = fbArray[index + 1];

        rowCols[2].classList.add(fbArray[index + 2 ]);
        rowCols[2].textContent = fbArray[index + 2];

        rowCols[3].classList.add(fbArray[index + 3]);
        rowCols[3].textContent = fbArray[index + 3];

        rowCols[4].classList.add(fbArray[index + 4]);
        rowCols[4].textContent = fbArray[index + 4];
        
        tableBody.appendChild(tableRow);
    }


}