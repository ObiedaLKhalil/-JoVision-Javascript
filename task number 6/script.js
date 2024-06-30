    function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

function B1() {
var numbers = [];
for (var i = 0; i <= 100; i++) {
    numbers.push(i);

}
var index;
document.getElementById("array").innerHTML = numbers;
for(var j=0;j< numbers.length;j++){if(numbers[j]%3==0){
 numbers.splice(j, 1);

}


}
 console.log(numbers);

  }

var button = document.getElementById("B1");
button.addEventListener("click", B1);


function B2() {
var numbers = [];
for (var i = 0; i <= 100; i++) {
    numbers.push(i);

}
document.getElementById("array").innerHTML = numbers;
for (var j = 101; j <= 150; j++) {
    numbers.push(j);
}
 console.log(numbers);

  }

var button = document.getElementById("B2");
button.addEventListener("click", B2);


function B3() {
var numbers = [];
for (var i = 0; i <= 100; i++) {
    numbers.push(i);

}
document.getElementById("array").innerHTML = numbers;
for (var j = 0; j <numbers.length; j++) {
 numbers[j]+=3;
}
 console.log(numbers);

  }

var button = document.getElementById("B3");
button.addEventListener("click", B3);

function B4() {
var numbers = [];
for (var i = 0; i <= 100; i++) {
    numbers.push(i);

}
document.getElementById("array").innerHTML = numbers;
for (var j = 20; j <=40; j++) {
 console.log(numbers[j]);
}


  }

var button = document.getElementById("B4");
button.addEventListener("click", B4);


function B5() {
let arr = [];
for (var i = 0; i <= 100; i++) {
    arr.push(i);

}
document.getElementById("array").innerHTML = arr;

shuffleArray(arr);
console.log(arr);

  }

var button = document.getElementById("B5");
button.addEventListener("click", B5);