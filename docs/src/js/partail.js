async function loadPartials() {
  const includes = document.querySelectorAll('[data-include]');
  for (const el of includes) {
    const file = el.getAttribute('data-include');
    const res = await fetch(file);
    if (res.ok) {
      el.innerHTML = await res.text();
    } else {
      el.innerHTML = "<!-- Failed to load: " + file + " -->";
    }
  }
}
window.addEventListener("DOMContentLoaded", loadPartials);
