document.addEventListener("DOMContentLoaded", function () {
  const title = document.getElementById("typewriter-title");
  if (title) {
    const text = "Welcome :)";
    const typingSpeed = 260;
    const deletingSpeed = 110;
    const waitAfterTyping = 1800;
    const waitAfterDeleting = 500;

    let i = 0;
    let isDeleting = false;

    function typeLoop() {
      if (!isDeleting) {
        title.textContent = text.substring(0, i + 1);
        i++;

        if (i === text.length) {
          isDeleting = true;
          setTimeout(typeLoop, waitAfterTyping);
        } else {
          setTimeout(typeLoop, typingSpeed);
        }
      } else {
        title.textContent = text.substring(0, i - 1);
        i--;

        if (i === 0) {
          isDeleting = false;
          setTimeout(typeLoop, waitAfterDeleting);
        } else {
          setTimeout(typeLoop, deletingSpeed);
        }
      }
    }

    title.textContent = "";
    typeLoop();
  }

  const cat = document.getElementById("cat-widget");
  if (cat) {
    cat.addEventListener("click", function () {
      cat.classList.remove("active");
      void cat.offsetWidth;
      cat.classList.add("active");

      setTimeout(() => {
        cat.classList.remove("active");
      }, 900);
    });
  }
});