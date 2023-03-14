const modal = document.querySelector(".modal-container");
const button = document.querySelector(".main-button");
const mainButton = document.querySelector(".main-button")

button.addEventListener("click", () => {
  modal.style.transform = "none";
  modal.style.opacity = "1";
});

modal.addEventListener("click", (event) => {
  if (event.target.closest(".btn_yes")) {
    document.body.style.backgroundImage = "url(./xD.gif)";
    modal.style.transform = "translateY(-100vh)";
    modal.style.opacity = "0";
    mainButton.style.display = "none"
  } else if (event.target.closest(".btn_no")) {
    modal.style.transform = "translateY(-100vh)";
    modal.style.opacity = "0";
  }
});
