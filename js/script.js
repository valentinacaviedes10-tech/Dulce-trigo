document.addEventListener("DOMContentLoaded", () => {


    /* =========================
       MENÚ RESPONSIVE
    ========================= */

    const toggle =
        document.querySelector(".menu-toggle");

    const nav =
        document.querySelector(".nav");


    if (toggle && nav) {

        toggle.addEventListener("click", () => {

            nav.classList.toggle("open");

        });

    }



    /* =========================
       FILTRO DEL PORTAFOLIO
    ========================= */

    const filters =
        document.querySelectorAll(".filter");

    const items =
        document.querySelectorAll(".portfolio-item");


    if (filters.length) {

        filters.forEach(button => {

            button.addEventListener("click", () => {


                filters.forEach(btn => {

                    btn.classList.remove("active");

                });


                button.classList.add("active");


                const category =
                    button.dataset.filter;


                items.forEach(item => {

                    if (
                        category === "all" ||
                        item.dataset.category === category
                    ) {

                        item.classList.remove("hidden");

                    } else {

                        item.classList.add("hidden");

                    }

                });

            });

        });

    }



    /* =========================
       VALIDACIÓN DEL FORMULARIO
    ========================= */

    const form =
        document.getElementById("contactForm");

    const message =
        document.getElementById("formMessage");


    if (form && message) {


        form.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const name =
                    document
                        .getElementById("nombre")
                        .value
                        .trim();


                const email =
                    document
                        .getElementById("email")
                        .value
                        .trim();


                const text =
                    document
                        .getElementById("mensaje")
                        .value
                        .trim();



                /* CAMPOS VACÍOS */

                if (!name || !email || !text) {

                    message.textContent =
                        "Por favor, completa todos los campos.";

                    message.className =
                        "form-message error";

                    return;

                }



                /* VALIDACIÓN DEL CORREO */

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (!emailPattern.test(email)) {

                    message.textContent =
                        "Ingresa un correo electrónico válido.";

                    message.className =
                        "form-message error";

                    return;

                }



                /* MENSAJE CORRECTO */

                message.textContent =
                    `¡Gracias, ${name}! Tu mensaje fue validado correctamente.`;

                message.className =
                    "form-message success";


                form.reset();

            }

        );

    }

});