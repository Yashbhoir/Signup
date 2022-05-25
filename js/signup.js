function btnSubmitClick() {
    var firstName = $("#txtFirstName").val();
    var middleName = $("#txtMiddleName").val();
    var lastName = $("#txtLastName").val();
    var email = $("#txtEmail").val();
    var dob = $("#txtDOB").val();
    var password = $("#txtPassword").val();
    var confirmPassword = $("#txtConfirmPassword").val();


    if (firstName === undefined || firstName === null || firstName.toString().trim() === "") {
        alert("Please enter first name");
        return;
    }

    if (middleName === undefined || middleName === null || middleName.toString().trim() === "") {
        alert("Please enter first name");
        return;
    }

    if (lastName === undefined || lastName === null || lastName.toString().trim() === "") {
        alert("Please enter first name");
        return;
    }

    if (dob === undefined || dob === null || dob.toString().trim() === "") {
        alert("Please enter first name");
        return;
    }

    if (email === undefined || email === null || email.toString().trim() === "") {
        alert("Please enter first name");
        return;
    }

    if (password === undefined || password === null || password.toString().trim() === "") {
        alert("Please enter first name");
        return;
    }

    if (confirmPassword === undefined || confirmPassword === null || confirmPassword.toString().trim() === "") {
        alert("Please enter first name");
        return;
    }

    if (password !== confirmPassword) {
        alert("Password doesn't match");
        return;
    }


    localStorage.setItem("firstName", firstName);
    localStorage.setItem("middleName", middleName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("dob", dob);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("User registered successfully");

    $("#txtFirstName").val('');
    $("#txtMiddleName").val('');
    $("#txtLastName").val('');
    $("#txtEmail").val('');
    $("#txtDOB").val('');
    $("#txtPassword").val('');
    $("#txtConfirmPassword").val('');


}
