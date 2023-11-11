(function () {
  const catalogItems = document.querySelectorAll(".catalog__item");
  const catalogItemMenus = document.querySelectorAll(".catalog__item__menu");
  const catalogItem3Menu = document.querySelector(".catalog__item3__menu");
  const catalogItemSubMenus = document.querySelectorAll(
    ".catalog__item__menu__sub-menu"
  );

  if (window.innerWidth <= 992) {
    catalogItem3Menu.classList.add("catalog__item__menu_left-side");
    catalogItemSubMenus[1].classList.add(
      "catalog__item__menu__sub-menu_left-side"
    );
    catalogItemSubMenus[4].classList.add(
      "catalog__item__menu__sub-menu_left-side"
    );
    catalogItemSubMenus[3].classList.remove(
      "catalog__item__menu__sub-menu_left-side"
    );
  }

  function showMenus(catalogItemMenu) {
    const isShown = catalogItemMenu.style.display == "block";

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
      if (e.target.classList.contains("catalog__item__label")) {
        const catalogItemMenu = catalogItem.querySelector(
          ".catalog__item__menu"
        );

        showMenus(catalogItemMenu);
      }
    });
  });
})();
