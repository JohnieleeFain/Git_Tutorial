// Zip Code Validator
function checkCAZipCode(code) {
    if (code >= 90001 && code <= 96162) {
        return true;
    }
    else {
        return false;
    }
}

function checkAnyZipCode(code) {
    if (code >= 00501 && code <= 99950) {
        return true;
    }
    else {
        return false;
    }
}

function checkZip(code) {
    if (checkAnyZipCode(code)) {
        if (checkCAZipCode(code)) {
            return 1;
        }
        else {
            return 0;
        }
    }
    else {
        return -1;
    }
}

function displaycheckZip(inputId, outputId) {
    // Get the value from the input text box
    var code = document.getElementById(inputId).value;
    var outputText = "";
    // call each function to determine the output text.
    if (checkZip(code) == -1) {
        outputText = "The number " + code + " is an invalid zip code.";
        changeElementClass(outputId, "invalid");
    }
    if (checkZip(code) == 0) {
        outputText = "The number " + code + " is a valid zip code.";
        changeElementClass(outputId, "valid");
    }
    if (checkZip(code) == 1) {
        outputText = "The number " + code + " is a valid California zip code."
        changeElementClass(outputId, "CAvalid");
    }
    // Update the output element's inner HTML
    document.getElementById(outputId).innerHTML = outputText;
}
// Phone Number with Valid format: (###) ###-####
// Valid format: (###) ###-####
function validNumber(number) {
    var chars = [0, 4, 5, 9];
    if (number.charAt(0) == '(' && number.charAt(4) == ')' && number.charAt(5) == ' ' && number.charAt(9) == '-' && number.length == 14) {
        number = removeCharsAtIndex(number, chars);
        for (var i = 0; i < number.length; i++) {
            if (!Number.isInteger(Number.parseInt(number.charAt(i)))) {
                return false;
            }
        }
        return true;
    }
    return false;
}

function removeCharsAtIndex(string, chars) {
    for (var i = 0; i < chars.length; i++) {
        string = string.substring(0, chars[i] - i) + string.substring(chars[i] + 1 - i);
        console.log(string);
    }
    return string;
}

function validatePhoneNumber(inputElementID, outputElementID) {
    var inputElement = document.getElementsByName(inputElementID)[0];
    var outputElement = document.getElementsByName(outputElementID)[0];
    switch (validNumber(inputElement.value)) {
    case false:
        outputElement.value = 'Not valid.';
        outputElement.style.border = 'solid #ff0000';
        outputElement.style.backgroundColor = '#ff8080';
        break;
    case true:
        outputElement.value = 'Valid.';
        outputElement.style.border = 'solid #00ff00';
        outputElement.style.backgroundColor = '#80ff80';
        break;
    }
}
//Quadratic Equation
function realSolutions(a, b, c) {
    var discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant > 0) {
        return 2;
    }
    else if (discriminant == 0) {
        return 1;
    }
    else if (discriminant < 0) {
        return 0;
    }
}
//Element Function
function changeElementClass(id, className) {
    var el = document.getElementById(id);
    el.className = className;
}
