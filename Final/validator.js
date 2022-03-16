function isValid() {
    if (firstName() && lastName() && mail() && phone() && userName() && password() && address() && city() && state() && country() && zip() 
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

UserName.addEventListener('blur', userName, false);
function userName(){
    //1) Create variable
    var validUsername=false;

    //2) read value from HTML
    var username = document.getElementById("UserName").value;
    var errorMessages = "";

    //3) Do validation
    if (username==="null" || username==="" || username.length > 12 ) {
        errorMessages += "<p>The user name is required and cannot be greater than 12 characters</p>";
        console.log("User name invalid — length")
        } else if (username.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in user name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("User name invalid — bad characters")
        } else {
                validUsername = true;
                console.log("User name valid")
        };

    document.getElementById("uname").innerHTML = errorMessages;

    //5) return status of each field
    return (validUsername);
};

Password.addEventListener('blur', password, false);
function password(){
    //1) Create variable
    var validPassword=false;

    //2) read value from HTML
    var getPassword = document.getElementById("Password").value;
    var errorMessages = "";

    //3) Do validation
    if (getPassword==="null" || getPassword==="" || getPassword.length > 7 ) {
        errorMessages += "<p>The password is required and cannot be greater than 7 characters</p>";
        console.log("Password invalid — length")
        } 
        else {
                validPassword = true;
                console.log("Password valid")
        };

    document.getElementById("pword").innerHTML = errorMessages;

    //5) return status of each field
    return (validPassword);
};
Address.addEventListener('blur', address, false);
function address(){
    //1) Create variable
    var validAddress=false;

    //2) read value from HTML
    var homeAddress = document.getElementById("Address").value;
    var errorMessages = "";

    //3) Do validation
    if (homeAddress==="null" || homeAddress==="") {
        errorMessages += "<p>Address required</p>";
        console.log("Address invalid — length")
        } 
        else {
                validAddress = true;
                console.log("Address is valid")
        };

    document.getElementById("waddress").innerHTML = errorMessages;

    //5) return status of each field
    return (validAddress);
};

City.addEventListener('blur', city, false);
function city(){
    //1) Create variable
    var validCity=false;

    //2) read value from HTML
    var getCity = document.getElementById("City").value;
    var errorMessages = "";

    //3) Do validation
    if (getCity==="null" || getCity==="") {
        errorMessages += "<p>City required</p>";
        console.log("City invalid — length")
        } 
        else {
                validCity = true;
                console.log("City is valid")
        };

    document.getElementById("wcity").innerHTML = errorMessages;

    //5) return status of each field
    return (validCity);
};

State.addEventListener('blur', state, false);
function state(){
    //1) Create variable
    var validState=false;

    //2) read value from HTML
    var getState = document.getElementById("State").value;
    var errorMessages = "";

    //3) Do validation
    if (getState==="null" || getState==="") {
        errorMessages += "<p>State required</p>";
        console.log("State invalid — length")
        } 
        else {
                validState = true;
                console.log("State is valid")
        };

    document.getElementById("wstate").innerHTML = errorMessages;

    //5) return status of each field
    return (validState);
};

Country.addEventListener('blur', country, false);
function country(){
    //1) Create variable
    var validCountry=false;

    //2) read value from HTML
    var seeCountry = document.getElementById("Country").value;
    var errorMessages = "";

    //3) Do validation
    if (seeCountry==="null" || seeCountry==="") {
        errorMessages += "<p>Country required</p>";
        console.log("Country invalid — length")
        } 
        else {
                validCountry = true;
                console.log("Country is valid")
        };

    document.getElementById("wcountry").innerHTML = errorMessages;

    //5) return status of each field
    return (validCountry);
};


ZipCode.addEventListener('blur', zip, false);
function zip(){
    
    var validZip =false;
    var getCountry = document.getElementById("Country").value;
    var getZip = document.getElementById("ZipCode").value;
    var errorMessages = "";

    if (getCountry === "USA") {
        console.log("Country USA")
        if (getZip === "null" || getZip ==="" || isNaN(getZip)) {
            errorMessages += "<p>Please enter zip code</p>";
            console.log("No zip code entered");
        }
        else {
            validZip = true;
            console.log("Zip valid");
        };
    }
    else {
        validZip = true;
        console.log("Zip not required");
    };
    
    document.getElementById("wzip").innerHTML = errorMessages;

    return(validZip);
};


