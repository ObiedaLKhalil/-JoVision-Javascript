
function clickMe() {
var numbers = [];
for (var i = 0; i <= 100; i++) {
    numbers.push(i);

}
document.getElementById("array").innerHTML = numbers;


    var sum = 0;

     for (var j = 0; j < numbers.length; j++) {
        sum += numbers[j];
    }

      console.log(sum);
document.getElementById("sum").innerHTML = sum;
sum=0;
}

var button = document.getElementById("clickButton");
button.addEventListener("click", clickMe);