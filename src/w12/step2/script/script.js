console.log("Hello World");
let elembody = document.body;
console.log(elembody);
elembody.style.backgroundColor = "oklch(0.8 0.05 0)";

let aCard = document.querySelector(".card"); // 클래스가 card인 요소 찾아 변수 지정
console.log(aCard);
aCard.addEventListener("click", function () {
  console.log("CLICK!");
  // aCard.style.backgroundColor = "#ff0000";
  aCard.classList.toggle("card--state-clicked");
  console.log(aCard.classList);
});

// document.querySelectorAll(".card");
