(function () {
  const toggle = document.querySelector(".nav-toggle");
  const sidebar = document.querySelector(".header__sidebar-menu");
  const body = document.querySelector("body");
  const searchBtn = document.querySelector(".header-mobile__search-btn");
  const sidebarSearch = document.querySelector(".header__sidebar-search");

  toggle.addEventListener("click", function (e) {
    if (
      (sidebar.classList.contains("header__sidebar_opened") &&
        !sidebarSearch.classList.contains("header__sidebar_opened")) ||
      (!sidebar.classList.contains("header__sidebar_opened") &&
        !sidebarSearch.classList.contains("header__sidebar_opened"))
    ) {
      sidebar.classList.toggle("header__sidebar_opened");
      body.classList.toggle("overflow-hidden");
      this.classList.toggle("opened");
    }

    if (
      !sidebar.classList.contains("header__sidebar_opened") &&
      sidebarSearch.classList.contains("header__sidebar_opened")
    ) {
      toggle.classList.toggle("opened");
      sidebarSearch.classList.toggle("header__sidebar_opened");
      body.classList.toggle("overflow-hidden");
    }
  });

  searchBtn.addEventListener("click", function (e) {
    if (
      (!sidebar.classList.contains("header__sidebar_opened") &&
        !sidebarSearch.classList.contains("header__sidebar_opened")) ||
      (!sidebar.classList.contains("header__sidebar_opened") &&
        sidebarSearch.classList.contains("header__sidebar_opened"))
    ) {
      toggle.classList.toggle("opened");
      sidebarSearch.classList.toggle("header__sidebar_opened");
      body.classList.toggle("overflow-hidden");
    }
  });
})();
