const panels = document.querySelectorAll(".panel");

function deactivateAllPanels() {
  panels.forEach((panel) => panel.classList.remove("active"));
}

panels.forEach((panel) => {
  panel.addEventListener("click", (event) => {
    const currentPanel = event.target.closest(".panel");
    const currentActive = currentPanel.classList.contains("active");
    deactivateAllPanels();
    if (!currentActive) {
      currentPanel.classList.add("active");
    }
  });
});
