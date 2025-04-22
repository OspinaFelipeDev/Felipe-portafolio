document.addEventListener("DOMContentLoaded", function () {
    // 📌 Menú desplegable
    
    const menuIcon = document.querySelector('.tablet');
    const navContainer = document.querySelector('.nav-container-desplegable');

    if (menuIcon && navContainer) {
        menuIcon.addEventListener('click', () => {
            navContainer.classList.toggle('active');
        });
    }

    // 📌 Formulario de contacto
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Evita que la página se recargue

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;

            let mailtoLink = `mailto:tuemail@example.com?subject=Contacto de ${name}&body=Nombre: ${name}%0D%0AEmail: ${email}%0D%0AMensaje: ${message}`;

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
                behavior: "smooth" // Desplazamiento suave
            });
        });
    }
});

const container = document.querySelector(".image-container");
const frontImage = document.querySelector(".front");

container.addEventListener("mousemove", (e) => {
  let percent = (e.offsetX / container.offsetWidth) * 100;
  frontImage.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
});





