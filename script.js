let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
  let theme = document.getElementById("theme");

  if (theme.getAttribute("href") == "style.css") {
    theme.href = "dark-mode.css";
  } else {
    theme.href = "style.css"
  }
}