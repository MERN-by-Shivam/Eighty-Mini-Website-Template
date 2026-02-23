function showContent(id) {
  document.querySelectorAll("main > *").forEach((el) => (el.style.display = "none"));

  const target = document.getElementById(id);
  target.style.display = target.tagName === "SECTION" ? "flex" : "block";
}

document.addEventListener("DOMContentLoaded", () => {
  showContent("basicOne");
});
