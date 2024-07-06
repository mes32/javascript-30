const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", (event) => {
    panels.forEach((p) => p.classList.remove("active"));
    event.target.classList.add("active");
  });
});
