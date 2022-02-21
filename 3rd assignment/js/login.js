email = document.getElementById("email");
password = document.getElementById("password");

email_error = document.getElementById("email_error");
password_error = document.getElementById("password_error");

login_error = document.getElementById("login_error");

email_reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


function email_vali() {
    email_val = email.value;
    if (email_val == "") {
        email_error.innerHTML = "This field is reuired";
        return false;
    } else if (!email_reg.test(email_val)) {
        email_error.innerHTML = "Email is invalid eg : abc123@gmail.com";
        return false;

    } else {
        email_error.innerHTML = "";
        return true;

    }

}

function password_vali() {
    password_val = password.value;
    if (password_val == "") {
        password_error.innerHTML = "This field is reuired";
        return false;

    } else if (password_val.length < 8 || password_val.length > 24) {
        password_error.innerHTML = "Character Must have min 8 maximum 24";
        return false;

    } else {
        password_error.innerHTML = "";
        return true;

    }

}

function validateForm() {

    let email = email_vali();
    let password = password_vali();

    if (email && password) {
        if (email_val == "admin123@gmail.com" && password_val == "12345678")
            return true;
        else {
            login_error.innerHTML = "Email or password is not correct"
            return false;
        }
    } else
        return false

}