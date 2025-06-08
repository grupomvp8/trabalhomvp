document.addEventListener("DOMContentLoaded", () => {
  const subscribeButton = document.querySelector(".subscribe-button");
  const ctaButton = document.querySelector(".cta-button");

  if (subscribeButton) {
    subscribeButton.addEventListener("click", () => {
      window.location.href = "assine.html";
    });
  }

  if (ctaButton) {
    ctaButton.addEventListener("click", () => {
      window.location.href = "./teste-gratuito/teste.html";
    });
  }
});
