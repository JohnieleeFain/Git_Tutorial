function theProduct(a, b) {
return a * b;
}

function theSum(a, b) {
return a + b;
}

function nameGame(x) {
var y = x.substring(1);
    var song = x + ", " + x + ", bo-b" + y + "</br> Bannana-fana-fo-f" + y + "</br>Fee-fy-mo-m" + y + "</br>" + x;
return song;
}

function giveCoins(money) {
var x = money * 100;
var quarters = Math.floor(x/25);
x = x - quarters*25;
var dimes = Math.floor(x/10);
x = x - dimes*10;
var nickels = Math.floor(x/5);
x = x - nickels*5;
var pennies = Math.floor(x/1);
   var coins = [quarters, " Quarters", dimes, " Dimes", nickels, " Nickels", pennies, " Pennies"];
    return coins;
}

function betterRandomInt (a, b) {
return Math.floor((Math.random() * (b - a + 1)) + a);
}
