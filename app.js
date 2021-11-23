let form = document.getElementById("form");
let resetBtn = document.querySelector("#reset");
let showResult = document.querySelector(".show");
//
let theory1 = document.getElementById("Power");
let theory2 = document.getElementById("VLSI");
let theory3 = document.getElementById("Hetero");
let theory4 = document.getElementById("CompArc");
let theory5 = document.getElementById("HUM");
//
let lab1 = document.getElementById("powerlab");
let lab2 = document.getElementById("VLSI-lab");

//
let resultArr = [];
//
form.addEventListener("submit", (e) => {
  e.preventDefault();
  resultArr.push(theory1.value);
  resultArr.push(theory2.value);
  resultArr.push(theory3.value);
  resultArr.push(theory4.value);
  resultArr.push(theory5.value);
  //
  resultArr.push(lab1.value);
  resultArr.push(lab2.value);
  //
  console.log(resultArr);
});
