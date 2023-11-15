(function () {
  const rangeInput = document.querySelectorAll(
      ".catalog-filter__category__range .range-input input"
    ),
    priceInput = document.querySelectorAll(
      ".catalog-filter__category__range .price-input input"
    ),
    range = document.querySelector(
      ".catalog-filter__category__range .slider .progress"
    );
  let priceGap = 50;

  function priceInputChange(input) {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (input.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  }

  priceInput.forEach((input) => {
    priceInputChange(input);

    input.addEventListener("input", (e) => {
      priceInputChange(input);
    });
  });

  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    });
  });

  const catalogTitles = document.querySelectorAll(
    ".catalog-filter__category__title"
  );
  const catalogResetBtn = document.querySelector(".catalog-filter__reset-btn");
  const catalogInputs = document.querySelectorAll(".catalog-filter input");
  const catalogInputMin = document.querySelector(
    ".catalog-filter__category__range .input-min"
  );
  const catalogInputMax = document.querySelector(
    ".catalog-filter__category__range .input-max"
  );

  catalogTitles.forEach(function (catalogTitle) {
    catalogTitle.addEventListener("click", function (e) {
      catalogTitle.nextElementSibling.classList.toggle(
        "catalog-filter__category__category-wrapper_closed"
      );
    });
  });

  catalogResetBtn.addEventListener("click", function (e) {
    catalogInputs.forEach((catalogInput) => {
      catalogInput.checked = false;
    });

    catalogInputMax.value = 1600;
    catalogInputMin.value = 349;

    priceInput.forEach((input) => {
      priceInputChange(input);
    });
  });
})();
