const initialSection = document.querySelector(".initial-section");
const submitBtn = document.querySelector(".submit-btn");
const digits = document.querySelectorAll(".digit");
const thankYou = document.querySelector(".thank-you");
let theNumber = document.querySelector(".the-number");

thankYou.style.display = "none";
//
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  initialSection.style.display = "none";
  thankYou.style.display = "flex";
});

digits.forEach((item) => {
  item.addEventListener("click", () => {
    theNumber.innerHTML = item.innerHTML;
  });
});
