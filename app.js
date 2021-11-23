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
  ///
  calculateCG(resultArr);
  console.log(calculateCG(resultArr));
  showResult.innerText = Number(calculateCG(resultArr)).toFixed(2);
  resultArr = [];
});
resetBtn.addEventListener('click',()=>{
    showResult.innerText = "";
})

function calculateCG(arr) {
  let totalCredit = 18;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i < 5) {
      sum += arr[i] * 3;
      //   console.log(sum);
    } else {
      //   console.log(sum);
      sum += arr[i] * 1.5;
    }
  }
  return sum / totalCredit;
}
