
document.getElementById("aggiungiGoalButton").addEventListener("click", function() {
    document.getElementById("goalForm").style.display = "block";
    document.getElementById("rimuoviForm").style.display = "none";
});

document.getElementById("aggiungiGoal").addEventListener("submit", function(event) {
    event.preventDefault();

    const match = document.getElementById("match").value;
    const anno = document.getElementById("anno").value;
    const goals = document.getElementById("goals").value;
    const tableBody = document.getElementById("goalTable").getElementsByTagName('tbody')[0];

    addNewRowV1(tableBody , match , anno , goals);

    document.getElementById("goalForm").style.display = "none";
    document.getElementById("aggiungiGoal").reset();

});


function addNewRowV1(tableBody , match, anno, goals){
    const newRowHTML = `
        <tr>
            <td>${match}</td>
            <td>${anno}</td>
            <td>${goals}</td>
            <td><button class="btn btn-danger btn-sm deleteButton"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
    `;

    tableBody.innerHTML += newRowHTML;
    console.log('Adding new Row , with method 1');
}


function addNewRowV2(tableBody , match, anno, goals){

    const newRow = tableBody.insertRow();

    const matchCell = newRow.insertCell(0);
    const annoCell = newRow.insertCell(1);
    const goalsCell = newRow.insertCell(2);
    const rimuoviButtonCell = newRow.insertCell(3);

    matchCell.textContent = match;
    annoCell.innerHTML = `<span class="badge bg-primary">${anno}</span>`;
    goalsCell.textContent = goals;
    rimuoviButtonCell.innerHTML =`<button class="btn btn-danger btn-sm deleteButton"><i class="fa-solid fa-trash"></i></button>`

    console.log('Adding new Row , with method 2');
}
