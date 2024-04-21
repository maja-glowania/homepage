{
  const welcome = () => {
    console.log("Cześć świecie!");
  };

  const hidePhoto = () => {
    const photoElement = document.querySelector(".js-sectionPhoto");
    const buttonTextElement = document.querySelector(".js-buttonText");

    photoElement.classList.toggle("noSection__photo");
    buttonTextElement.classList.toggle("pokaż");

    buttonTextElement.innerText = photoElement.classList.contains(
      "js-noSectionPhoto"
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
