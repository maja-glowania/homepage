{
  const welcome = () => {
    console.log("Cześć świecie!");
  };

  const hidePhoto = () => {
    const photoElement = document.querySelector(".js-sectionPhoto");
    const buttonTextElement = document.querySelector(".js-buttonText");

    photoElement.classList.toggle("section__photo--hidden");
    buttonTextElement.classList.toggle("pokaż");

    buttonTextElement.innerText = photoElement.classList.contains(
      "section__photo--hidden"
    )
      ? "pokaż"
      : "ukryj";
  };

  const init = () => {
    const buttonElement = document.querySelector(".js-sectionButton");
    buttonElement.addEventListener("click", hidePhoto);

    welcome();
  };

  init();
}
