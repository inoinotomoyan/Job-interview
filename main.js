document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');
  const offset = 50; // Adjust this value to match your fixed header height

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: "smooth",
        });
      }
    });
  });
});

function buttonClick() {
  location.href = "https://hamatakeblog.hatenablog.com";
}
let button_2 = document.getElementById("profilebtn");
button_2.onclick = buttonClick;
