function btnLoginClick() {
    var emailId = $("#txtEmail").val();
    var password = $("#txtPassword").val();
    var localEmail = localStorage.getItem("email");
    var localPassword = localStorage.getItem("password");

    if (emailId === undefined || emailId === null || emailId.toString().trim() === "") {
        alert("Please enter email id");
        return;
    }
    if (password === undefined || password === null || password.toString().trim() === "") {
        alert("Please enter password");
        return;
    }

    if (emailId === localEmail && password === localPassword) {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials, please try again");
        return;
    }


}
