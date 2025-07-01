
    const texts = ["Yash Jadhav","Web Developer", "Frontend Designer", "Tech Enthusiast"];
    let i = 0, j = 0;
    let currentText = "";
    let isDeleting = false;
    const typingEl = document.getElementById("typing");

    function type() {
      currentText = texts[i];
      typingEl.textContent = isDeleting
        ? currentText.substring(0, j--)
        : currentText.substring(0, j++);

      if (!isDeleting && j === currentText.length) {
        isDeleting = true;
        setTimeout(type, 3000);
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % texts.length;
      }
      setTimeout(type, 300);
    }
    type();

    window.addEventListener("scroll", () => {
      document.querySelectorAll("section").forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add("visible");
        }
      });
    });

    const toggleBtn = document.getElementById("toggle-theme");
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });

    const birthYear = 2005;
    const currentYear = new Date().getFullYear();
    document.getElementById("age").textContent = currentYear - birthYear;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
