const panels = document.querySelectorAll(".panel");

console.log(panels);

panels.forEach((panel) => {
  panel.addEventListener("click", (event) => {
    panels.forEach((p) => p.classList.remove("active"));
    event.target.closest(".panel").classList.add("active");
  });
});
