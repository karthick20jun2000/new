var submit = document.getElementById("submit");
submit.addEventListener("click", displayDetials);

var row = 1;

function displayDetials() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (!username || !password) {
        alert("please enter ");
        return;
    }
    var display = document.getElementById("display");

    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = username;
    cell2.innerHTML = password;

    row++;
}