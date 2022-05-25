$(document).ready(function () {
    var firstName = localStorage.getItem("firstName")
    var middleName = localStorage.getItem("middleName")
    var lastName = localStorage.getItem("lastName")
    var dob = localStorage.getItem("dob")
    var email = localStorage.getItem("email")

    if (firstName !== undefined && firstName !== null && firstName !== "") {
        $("#lblFirstName").text("First Name = " + firstName);
    }
    if (middleName !== undefined && middleName !== null && middleName !== "") {
        $("#lblMiddleName").text("Middle Name = " + middleName);
    }
    if (lastName !== undefined && lastName !== null && lastName !== "") {
        $("#lblLastName").text("Last Name = " + lastName);
    }
    if (dob !== undefined && dob !== null && dob !== "") {
        $("#lblDOB").text("Date of Birth = " + dob);
    }
    if (email !== undefined && email !== null && email !== "") {
        $("#lblEmailId").text("Email Id = " + email);
    }

})

function logout() {
    window.location.href = "index.html";
}
