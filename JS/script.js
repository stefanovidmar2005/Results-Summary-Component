const allH4 = document.querySelectorAll(".h4-color");
const rows = document.querySelectorAll(".row");
allH4.forEach((h4) => {
  h4.style.color = h4.dataset.color;
});
