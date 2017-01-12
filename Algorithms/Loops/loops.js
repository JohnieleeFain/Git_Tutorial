//Practice Functions
function work(times) {
    for (i = 0; i < times; i++) {
        document.write("All work and no play makes Jack a dull boy.", "<br/>");
    }
}

function factorial(number) {
    var result = 1;
    for (i = number; i > 0; i--) {
        result = result * i;
        console.log(result);
    }
    return result;
}

function multiply(a, b) {
    for (i = 0; i < a.length; i++) {
        a[i] = a[i] * b;
        console.log(a[i]);
    }
    return a;
}

function evenOrOdd(numbers) {
    var results = [];
    for (i = 0; i < numbers.length; i++) {
        if (Number.isInteger(numbers[i])) {
            if (numbers[i] % 2 == 0) {
                results[i] = "even";
            }
            else {
                results[i] = "odd";
            }
        }
        else {
            results[i] = "Not an intejer.";
        }
        console.log(results);
    }
    return results;
}
// Phone Number Functions
function checkNum(val) {
    if (Number.parseInt(val) || val == "0") {
        return true;
    }
    else {
        return false;
    }
}

function validPhone(phoneNum) {
    var count = phoneNum.length
    if (count == 8 && checkNum(phoneNum.charAt(0)) && checkNum(phoneNum.charAt(1)) && checkNum(phoneNum.charAt(2)) && phoneNum.charAt(3) == '-' && checkNum(phoneNum.charAt(4)) && checkNum(phoneNum.charAt(5)) && checkNum(phoneNum.charAt(6)) && checkNum(phoneNum.charAt(7))) {
        return phoneNum;
    }
    else {
        return;
    }
}

function validPhoneList(phoneNum) {
    var array = []
    for (var i = 0; i < phoneNum.length; i++) {
        var num = phoneNum[i]
        array.push(validPhone(num)) //When validPhone is called for each index of the array, the result is pushed to the next spot in the array.
    }
    console.log(array);
    return array.join(" ");
}
//Zip Code Functions
function checkZip(code) {
    var numlength = code.length;
    var firstnum = code.substr(0, 1);
    var isnumber = Number.parseInt(code);
    if (numlength == 5 && firstnum == 9 && String(isnumber).length == 5) {
        return true;
    }
    else if (numlength != 5 || firstnum != 9 || String(isnumber).length != 5) {
        return false;
    }
}

function checkZipList(codes) {
    var results = [];
    for (i = 0; i < codes.length; i++) {
        if (checkZip(codes[i]) == true) {
            results.push(codes[i]);
        }
        console.log(results);
    }
    return results;
}
//Prime Number Functions
function checkPrime(number) {
    if (number <= 2) {
        return true
    }
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

function displayPrimeTest(number) {
    if (checkPrime(number) == true) {
        return "The number " + number + " is PRIME!";
    }
    else {
        return "The number " + number + " is NOT PRIME!"
    }
}
//Shuffle Function
function shuffle(arr) {
    //var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var initialarraylength = arr.length
    var array2 = [] //this will be new shuffled array
    for (var i = 0; i <= (initialarraylength - 1); i++) {
        var x = Math.floor(Math.random() * arr.length) //random number under the length of the array
        array2.push(arr[x]) // pushes random element to new array
        arr.splice(x, 1) //deletes the used value so it isn't repeated
    }
    return array2
}
