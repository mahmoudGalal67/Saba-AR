const OrangeBageLink = document.querySelector(".OrangeBageLink");
const BlueBageLink = document.querySelector(".BlueBageLink");

OrangeBageLink.addEventListener("click", () => {
  localStorage.setItem("color", "orange");
});

BlueBageLink.addEventListener("click", () => {
  localStorage.setItem("color", "blue");
});
