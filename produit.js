const allHoverImages = document.querySelectorAll(".hover-container div img");
const imgContainer = document.querySelector(".img-container");
// console.log(imgContainer);
const container = document.querySelector(".produit-div");
container.style.display="none"
const autrePartie = document.querySelector(".dehors");
autrePartie.addEventListener("click", () => {
  autrePartie.style.display = "none";
  container.style.display = "grid";
});

window.addEventListener("DOMContentLoaded", () => {
  allHoverImages[0].parentElement.classList.add("active");
});
allHoverImages.forEach((imags) => {
  imags.addEventListener("click", () => {
    imgContainer.querySelector("img").src = imags.src;
    supressionActiveImg();
    imags.parentElement.classList.add("active");
    document.querySelector(".product-div-left").style.backgroundColor = "#ef2";
  });
});

function supressionActiveImg() {
  allHoverImages.forEach((img) => {
    img.parentElement.classList.remove("active");
  });
}
