// JavaScript source code
function myFunction() {
    var x = document.getElementById("myInput");
    var eyes = document.getElementById("eye");
    if (x.type === "password") {
        x.type = "text";
        eyes.src = "visible1.svg";
    } else {
        x.type = "password";
        eyes.src = "notvisible1.svg";
    }
}

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("email").value;
    var password = document.getElementById("myInput").value;
    var cheker = document.getElementById("politique").checked;
    if (username == "admin" && password == "1234" && cheker == true) {
        alert("Login successfully");
        window.location = "success.html"; // Redirecting to other page.
        return false;
    }
    else {
        attempt--;// Decrementing by one.
        alert("You have left " + attempt + " attempt;");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("email").disabled = true;
            document.getElementById("myInput").disabled = true;
            document.getElementById("remember").disabled = true;
            document.getElementById("politique").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}


