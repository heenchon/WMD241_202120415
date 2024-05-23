let elemBody = document.body;
elemBody.style.backgroundColor = "oklch(0.8 0.5 260)";
let cards = document.querySelectorAll(".card");
console.log(cards);
// cards.forEach((eachCard) => {
//   eachCard.addEventListener("click", function () {});
// });
for (let i = 0; i < cards.length; i++) {
  let eachCard = cards[i];
  eachCard.addEventListener("click", function () {
    eachCard.classList.toggle("card--state-clicked");
  });
}
