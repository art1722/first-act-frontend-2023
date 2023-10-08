let isDark = false;

function toggleTheme() {
  if (isDark) {
    document.documentElement.style.backgroundColor = "#fff";
    document.documentElement.style.color = "#000";
    isDark = false;
  } else {
    document.documentElement.style.backgroundColor = "#000";
    document.documentElement.style.color = "#fff";
    isDark = true;
  }
}

document.querySelector("#darkmode").addEventListener("click", toggleTheme);
