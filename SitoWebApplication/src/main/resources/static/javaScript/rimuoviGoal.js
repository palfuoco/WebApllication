
document.getElementById("rimuoviGoalButton").addEventListener("click", function() {
    document.getElementById("rimuoviForm").style.display = "block";
    document.getElementById("goalForm").style.display = "none";
});

function rimuoviGoalDalNumero(event) {
    event.preventDefault();

    const numeroGoal = parseInt(document.getElementById("numeroGoal").value);
    const rows =document.getElementById('goalTable').querySelectorAll('tr');

    if (numeroGoal > 0 && numeroGoal <= rows.length) {
        rows[numeroGoal].remove();
        document.getElementById("rimuoviForm").style.display = "none";
        document.getElementById("rimuoviGoalDalNumero").reset();
    } else {
        alert("Numero goal non valido :<");
    }
}

document.querySelectorAll(".deleteButton").forEach(button => {
    button.addEventListener("click", function() {
        const row = button.closest("tr");
        row.parentNode.removeChild(row);
    });
});

function deleteRow(button) {
    const row = button.parentNode.parentNode;

    row.parentNode.removeChild(row);
}
