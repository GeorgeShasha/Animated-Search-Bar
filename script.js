const searchBarContainerElement = document.querySelector(
  ".search-bar-container"
);
const magIconElement = document.querySelector(".mag-icon");

magIconElement.addEventListener("click", () => {
  searchBarContainerElement.classList.toggle("active");
});
