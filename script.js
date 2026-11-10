
function openCalculator() {
    document.getElementById("home").classList.add("hidden");

    document.getElementById("calculator").classList.remove("hidden");
}

function goHome() {
    document.getElementById("calculator").classList.add("hidden");

    document.getElementById("home").classList.remove("hidden");
}

function calculateAge() {

    const dob = document.getElementById("dob").value;
    const result = document.getElementById("result");

    if (dob === "") {
        result.innerHTML = "Select your date of birth";
        return;
    }

    const birthDate = new Date(dob + "T00:00:00");
    const today = new Date();

    if (birthDate > today) {
        result.innerHTML = "Please enter a valid date!";
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();

    let months = today.getMonth() - birthDate.getMonth();

    let days = today.getDate() - birthDate.getDate();

    // Days condition
    if (days < 0) {
        months--;

        let lastMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );

        days = days + lastMonth.getDate();
    }

    // Months condition
    if (months < 0) {
        years--;
        months = months + 12;
    }

    // Display result
    result.innerHTML = `
        <h3>Your Age is:</h3>
        <h2>${years} Years ${months} Months ${days} Days</h2>
    `;
}


// Reset Button
document.querySelector(".reset").addEventListener("click", function() {

    document.getElementById("dob").value = "";

    document.getElementById("result").innerHTML =
        "Your Result will appear here &#127874;";

});
