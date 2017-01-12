function betterGreeting(d) {
  var hour = d.getHours();
  console.log("hours = " + hour);
  if (hour < 10) {
    return "Good morning.";
  } else {
    return "Good day.";
  }
}



function superiorGreeting(d) {
    var hour = d.getHours();
    if (hour < 18) {
        return "Good day.";
    }
    else if (hour < 10) {
        return "Good morning.";
    }
    else {
        return "Good evening.";
    }
}

function dayQuote(d) {
    var quote = "";
    switch (d.getDay()) {
    case 0:
        quote = "Day off - but Monday is on the way!";
        break;
    case 1:
        quote = "Ugh - its Monday :(";
        break;
    case 2:
        quote = "It's Tuesday - the weekend is a long way off.";
        break;
    case 3:
        quote = "It's Wednesday, halfway through.";
        break;
    case 4:
        quote = "It's Thursday - only one more day...";
        break;
    case 5:
        quote = "Thank goodness it's Friday!";
        break;
    case 6:
        quote = "It's Saturday! My favorite day! :)";
    }
    return quote;
}

function simpleDayQuote(d) {
    var quote;
    switch (d.getDay()) {
    case 6:
        quote = "Today is Saturday - Yea!";
        break;
    case 0:
        quote = "Today is Sunday - Yea!";
        break;
    default:
        quote = "Looking forward to the Weekend!";
    }
    return quote;
}

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
        return true;
    }
    else {
        return false;
    }
}

function checkZipcode(x) {
    if (x <= 99999 && x >= 90000) {
        return "True";
    }
    else {
        return "False";
    }
}

function betterRandomInt(a, b) {
    return Math.floor((Math.random() * (b - a + 1)) + a);
}

function switcher(x,phoneNum,name) {
var randInt = Math.floor(Math.random()*3);
switch (randInt) {
case 0: return checkZipcode(x)
case 1: return validPhone(phoneNum)
default: return betterNameGame(name)
}
}

function checkVowel(letter) {
letter.toLowerCase();
if (letter != "a" && letter != "A" && letter != "e" && letter != "E" && letter != "i" && letter != "I" && letter != "o" && letter != "O" && letter != "u" && letter != "U") {
return false;
}
else {
return true;
}
}

function betterNameGame(name) {
var letter1 = name.substr(0, 1);
var shortname1 = name.substr(1);
var letter2 = name.substr(1, 1);
var shortname2 = name.substr(2);
var letter3 = name.substr(2, 1);
var shortname3 = name.substr(3);
if (checkVowel(letter1) == true) {
return name + ", " + name + ", bo-b" + name + "<br/>" + "Banana-fana-fo-f" + name + "<br/>" + "fee-fy-mo-m" + name + "<br/>" + name + "!";
}
else if (checkVowel(letter1) == false && checkVowel(letter2) == true) {
return name + ", " + name + ", bo-b" + shortname1 + "<br/>" + "Banana-fana-fo-f" + shortname1 + "<br/>" + "Fee-fy-mo-m" + shortname1 + "<br/>" + name + "!";
}
else if (checkVowel(letter1) == false && checkVowel(letter2) == false && checkVowel(letter3) == true) {
return name + ", " + name + ", bo-b" + shortname2 + "<br/>" + "Banana-fana-fo-f" + shortname2 + "<br/>" + "Fee-fy-mo-m" + shortname2 + "<br/>" + name + "!";
}
else {
return name + ", " + name + ", bo-b" + shortname3 + "<br/>" + "Banana-fana-fo-f" + shortname3 + "<br/>" + "Fee-fy-mo-m" + shortname3 + "<br/>" + name + "!";
}
}
