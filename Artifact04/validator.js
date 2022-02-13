function isValid() {
    if (firstName() && lastName() && mail() && phone()
    )
    return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

FirstName.addEventListener('blur', firstName, false);
function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid")
        };

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname);
};
LastName.addEventListener('blur', lastName, false);
function lastName(){
    //1) Create variable
    var validLastname=false;

    //2) read value from HTML
    var lastname = document.getElementById("LastName").value;
    var errorMessages = "";

    //3) Do validation
    if (lastname==="null" || lastname==="" || lastname.length > 50 ) {
        errorMessages += "<p>The last name is required and cannot be greater than 20 characters</p>";
        console.log("Last name invalid — length")
        } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Last name invalid — bad characters")
        } else {
                validLastname = true;
                console.log("Last name valid")
        };

    //4) Send error message to HTML
    document.getElementById("lname").innerHTML = errorMessages;

    //5) return status of each field
    return (validLastname);
};
Mail.addEventListener('blur', mail , false);
function mail(){
    //1) Create variable
    var validMail=false;

    //2) read value from HTML
    var email = document.getElementById("Mail").value;
    var errorMessages = "";

    //3) Do validation
    
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        errorMessages += "<p>Email is invalid</p>";
        console.log("Email name invalid")
        } else {
                validMail = true;
                console.log("Email name valid")
        };

    //4) Send error message to HTML
    document.getElementById("wmail").innerHTML = errorMessages;

    //5) return status of each field
    return (validMail);
    };

Phone.addEventListener('blur', phone , false);
function phone(){
    //1) Create variable
    var validPhone=false;

    //2) read value from HTML
    var phoneNumber = document.getElementById("Phone").value;
    var errorMessages = "";

    //3) Do validation
    

    if (isNaN(phoneNumber) || phoneNumber.length >15 || phoneNumber===null || phoneNumber===""){
        errorMessages += "<p>Phone number is invalid</p>";
        console.log("Phone number is invalid")
        } else {
                validPhone = true;
                console.log("Phone number valid")
        };

    //4) Send error message to HTML
    document.getElementById("number").innerHTML = errorMessages;

    //5) return status of each field
    return (validPhone);
    };