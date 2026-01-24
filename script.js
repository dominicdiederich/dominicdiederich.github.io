document.addEventListener("DOMContentLoaded", () => {
    /* -------- Typing Effect -------- */
    const text = "Hi, my name is Dominic.";
    const typingSpeed = 80;
  
    let index = 0;
    const target = document.getElementById("typed-text");
  
    function typeText() {
      if (index < text.length) {
        target.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
      }
    }
  
    typeText();
  
    /* -------- Theme Toggle -------- */
    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;
  
    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      body.className = savedTheme;
      toggleBtn.textContent = savedTheme === "dark-mode" ? "☀️" : "🌙";
    }
  
    toggleBtn.addEventListener("click", () => {
      const isDark = body.classList.contains("dark-mode");
  
      body.classList.toggle("dark-mode", !isDark);
      body.classList.toggle("light-mode", isDark);
  
      toggleBtn.textContent = isDark ? "🌙" : "☀️";
      localStorage.setItem("theme", isDark ? "light-mode" : "dark-mode");
    });
  });
  