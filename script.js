const button = document.getElementById("menu-btn");
const links = document.getElementById("nav-links");
if (button && links) {
  button.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Close navigation" : "Toggle navigation");
  });
  links.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    links.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
  }));
}
document.getElementById("year").textContent = new Date().getFullYear();