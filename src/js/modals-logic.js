(function () {
  const layout = document.querySelector(".layout");
  const questionModal = document.querySelector(".question-modal");
  const modals = document.querySelectorAll(".modal");
  const writeUsBtn = document.querySelector(".address__map__info__button");

  writeUsBtn.addEventListener("click", (e) => {
    layout.style.display = "flex";
    questionModal.style.display = "block";
  });

  layout.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("close-btn") ||
      e.target.classList.contains("layout")
    ) {
      layout.style.display = "none";
    }
  });
})();
