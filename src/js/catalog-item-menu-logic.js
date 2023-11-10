(function () {
  const catalogItems = document.querySelectorAll(".catalog__item");
  const catalogItemMenus = document.querySelectorAll(".catalog__item__menu");

  function showMenus(catalogItemMenu) {
    const isShown = catalogItemMenu.style.display == "block";
    console.log(isShown);

    catalogItemMenus.forEach((item) => {
      if (!item.classList.contains("catalog__item__menu__sub-menu")) {
        item.style.display = "none";
      }
    });

    if (!isShown) {
      catalogItemMenu.style.display = "block";
    }
  }

  catalogItems.forEach((catalogItem) => {
    catalogItem.addEventListener("click", (e) => {
      console.log(e.target);
      if (e.target.classList.contains("catalog__item__label")) {
        const catalogItemMenu = catalogItem.querySelector(
          ".catalog__item__menu"
        );

        showMenus(catalogItemMenu);
      }
    });
  });
})();
