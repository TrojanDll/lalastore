(function () {
  const catalogBtn = document.querySelector(".header__element-catalog");
  const catalog = document.querySelector(".catalog-menu");
  const catalogItems = document.querySelectorAll(
    ".catalog-menu__chapter__element"
  );

  catalogBtn.addEventListener("click", (e) => {
    if (catalog.style.display == "block") {
      catalog.style.display = "none";
    } else {
      catalog.style.display = "block";
    }

    catalogBtn.classList.toggle("header__element-catalog_active");
  });

  catalogItems.forEach((catalogItem) => {
    catalogItem.addEventListener("click", (e) => {
      catalog.style.display = "none";
      catalogBtn.classList.toggle("header__element-catalog_active");
    });
  });
})();
