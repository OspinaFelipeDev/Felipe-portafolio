document.addEventListener("DOMContentLoaded", function () {
  // 📌 Menú desplegable

  const menuIcon = document.querySelector(".tablet");
  const navContainer = document.querySelector(".nav-container-desplegable");

  if (menuIcon && navContainer) {
    menuIcon.addEventListener("click", () => {
      navContainer.classList.toggle("active");
    });
  }

  // 📌 Formulario de contacto
  // 📌 Formulario de contacto
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita que la página se recargue

      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;

      let mailtoLink = `mailto:OspinaFelipeDev@gmail.com?subject=Contacto de ${name}&body=Nombre: ${name}%0D%0AEmail: ${email}%0D%0AMensaje: ${message}`;

      window.location.href = mailtoLink;
    });
  }

  // 📌 Scroll suave al inicio de la página
  const scrollButton = document.querySelector("a[href='#arriba']");
  if (scrollButton) {
    scrollButton.addEventListener("click", function (event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace

      window.scrollTo({
        top: 0,
        behavior: "smooth", // Desplazamiento suave
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".reveal-container");
  const frontImage = container.querySelector(".image-front");
  const backImage = container.querySelector(".image-back");

  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    const percent = ((e.clientX - rect.left) / rect.width) * 100;

    // La frontal se muestra de izquierda a derecha
    frontImage.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;

    // La de fondo se oculta de izquierda a derecha
    backImage.style.clipPath = `inset(0 ${percent}% 0 0)`;
  });

  container.addEventListener("mouseleave", () => {
    frontImage.style.clipPath = `inset(0 100% 0 0)`; // Oculta la frontal
    backImage.style.clipPath = `inset(0 0% 0 0)`; // Muestra toda la de fondo
  });
});





