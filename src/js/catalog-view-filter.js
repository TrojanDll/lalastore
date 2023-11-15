(function () {
  const catalogViewImages = document.querySelectorAll(
    ".catalog-view-filter__view__img"
  );

  catalogViewImages.forEach(function (catalogViewImage) {
    catalogViewImage.addEventListener("click", function (e) {
      catalogViewImages.forEach(function (catalogViewImage) {
        catalogViewImage.classList.remove(
          "catalog-view-filter__view__img_active"
        );
      });

      this.classList.add("catalog-view-filter__view__img_active");
    });
  });
})();
