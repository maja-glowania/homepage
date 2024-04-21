{
  const welcome = () => {
    console.log("Cześć świecie!");
  };

  const hidePhoto = () => {
    const photoElement = document.querySelector(".js-section__photo");
    const buttonTextElement = document.querySelector(".js-buttonText");

    photoElement.classList.toggle("js-noSection__photo");
    buttonTextElement.classList.toggle("pokaż");

    buttonTextElement.innerText = photoElement.classList.contains(
      "js-noSection__photo"
    )
      ? "pokaż"
      : "ukryj";
  };

  const init = () => {
    const buttonElement = document.querySelector(".js-section__button");
    buttonElement.addEventListener("click", hidePhoto);

    welcome();
  };

  init();
}
