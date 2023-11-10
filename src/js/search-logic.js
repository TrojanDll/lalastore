(function () {
  const searchInput = document.querySelector(".header__search__area__input");
  const search = document.querySelector(".header__search");
  const searchArea = document.querySelector(".header__search__area");
  const searchAreaResults = document.querySelector(
    ".header__search__area__results"
  );

  searchInput.addEventListener("focus", (e) => {
    search.classList.add("header__search_focused");
    searchArea.classList.add("header__search__area_focused");
    searchAreaResults.style.display = "block";
  });

  searchInput.addEventListener("blur", (e) => {
    search.classList.remove("header__search_focused");
    searchArea.classList.remove("header__search__area_focused");
    searchAreaResults.style.display = "none";
  });
})();
