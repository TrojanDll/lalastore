(function () {
  const toggle = document.querySelector(".nav-toggle");
  const sidebar = document.querySelector(".header__sidebar");

  toggle.addEventListener("click", function (e) {
    this.classList.toggle("opened");
    sidebar.classList.toggle("header__sidebar_opened");
  });
})();
