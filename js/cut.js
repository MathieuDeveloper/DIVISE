function displayValues(fbArray) {

    let tableBoby = document.getElementById("results");
    tableBoby = tableBoby.innerHTML = "";

    let templateRow = document.getElementById("fbTemplate");

    for (let index = 0; index < fbArray.length; index += 5) {



        let tableRow = document.importNode(templateRow.content, true);
        let rowCols = tableRow.querySelectorAll("td");

        rowcols[1].classList.add(fbArray[index]);
        rowCols[1] = fbArray[index];

        tableBody.appenedChild(templateRow);

    }
}