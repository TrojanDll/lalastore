(function () {
  const catalogBtn = document.querySelector(".header__element-catalog");
  const catalogBtnMobile = document.querySelector("#catalog-btn-mobile");
  const catalog = document.querySelector(".catalog-menu");
  const catalogItems = document.querySelectorAll(
    ".catalog-menu__chapter__element"
  );
  const catalogTabs = document.querySelectorAll(
    ".catalog-menu__chapter__title"
  );
  const body = document.querySelector("body");
  const catalogCloseBtn = document.querySelector(
    ".catalog-menu__mobile-header__close-btn"
  );
  const catalogSearchBtn = document.querySelector(
    ".catalog-menu__mobile-header__search-btn"
  );
  const sidebarSearch = document.querySelector(".header__sidebar-search");

  catalogBtn.addEventListener("click", (e) => {
    if (catalog.style.display == "block") {
      catalog.style.display = "none";
    } else {
      catalog.style.display = "block";
    }

    catalogBtn.classList.toggle("header__element-catalog_active");
  });

  function toggleCatalogOnBtn(e) {
    catalog.style.display = "none";
    catalogBtn.classList.toggle("header__element-catalog_active");
  }

  catalogItems.forEach((catalogItem) => {
    catalogItem.addEventListener("click", toggleCatalogOnBtn);
  });

  // catalog tabs

  function toggleCatalogBtnMobile() {
    if (catalog.style.top == "0px") {
      catalog.style.top = "100%";
    } else {
      catalog.style.top = "0px";
    }

    body.classList.toggle("overflow-hidden");
  }

  if (window.innerWidth <= 768) {
    catalogBtnMobile.addEventListener("click", toggleCatalogBtnMobile);

    catalogTabs.forEach(function (catalogTab) {
      catalogTab.addEventListener("click", function () {
        catalogTab.nextElementSibling.classList.toggle(
          "catalog-menu__chapter__elements_visible"
        );
        catalogTab.classList.toggle("catalog-menu__chapter__title_active");
        this.querySelector(
          ".catalog-menu__chapter__title__icon"
        ).classList.toggle("catalog-menu__chapter__title__icon_active");
      });
    });

    catalogCloseBtn.addEventListener("click", (e) => {
      toggleCatalogBtnMobile();
      sidebarSearch.classList.remove("header__sidebar_opened");
      sidebarSearch.classList.remove("header__sidebar_pt20");
    });

    catalogSearchBtn.addEventListener("click", (e) => {
      sidebarSearch.classList.toggle("header__sidebar_opened");
      sidebarSearch.classList.toggle("header__sidebar_pt20");
    });
  }
})();
