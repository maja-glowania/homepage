console.log("Cześć świecie!");

let buttonElement = document.querySelector(".js-section__button");
let photoElement = document.querySelector(".js-section__photo");
let buttonTextElement = document.querySelector(".js-buttonText");

buttonElement.addEventListener("click", () => {
  photoElement.classList.toggle("js-noSection__photo");
  buttonTextElement.classList.toggle("pokaż");

  buttonTextElement.innerText = photoElement.classList.contains(
    "js-noSection__photo"
  )
    ? "pokaż"
    : "ukryj";
});
