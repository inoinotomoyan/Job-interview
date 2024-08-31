let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentIndex);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function currentSlide(index) {
  showSlide(index);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentIndex);
});

document.addEventListener("DOMContentLoaded", () => {
  const moreButton = document.getElementById("more-button");
  const purposearea = document.getElementById("purposearea");

  moreButton.addEventListener("click", () => {
    purposearea.classList.toggle("expanded");
    moreButton.classList.toggle("expanded");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const moreButton = document.getElementById("more-button");
  const hiddenContent = document.getElementById("hidden-content");

  moreButton.addEventListener("click", () => {
    hiddenContent.classList.toggle("expanded_1");
    moreButton.classList.toggle("expanded_1");
    moreButton.textContent = hiddenContent.classList.contains("expanded_1")
      ? "閉じる"
      : "もっと見る";
  });
});
