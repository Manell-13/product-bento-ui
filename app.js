// ==============================
// 1. Referencias al DOM
// ==============================

// Imagen principal del producto
const mainImage = document.getElementById("mainImage");

// Botones de selección de color
const colorButtons = document.querySelectorAll(".color-dot");

// Botones para cambiar el ángulo de la imagen
const nextImg = document.getElementById("nextImg");
const prevImg = document.getElementById("prevImg");


// ==============================
// 2. Configuración
// ==============================

// Número máximo de ángulos disponibles por producto
const MAX_ANGLE = 3;


// ==============================
// 3. Estado actual
// ==============================

// Color actualmente seleccionado
let currentColor = "black";

// Ángulo actual de la imagen
let currentAngle = 1;


// ==============================
// 4. Eventos
// ==============================

// Cambio de color del producto
colorButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Quitar selección visual del resto de colores
        colorButtons.forEach((b) => b.classList.remove("btn-selected"));

        // Marcar como activo el color seleccionado
        btn.classList.add("btn-selected");

        // Actualizar el color según el data-color del botón
        currentColor = btn.dataset.color;

        // Al cambiar de color, volvemos al primer ángulo
        currentAngle = 1;

        // Actualizar imagen principal
        updateImage();
    });
});

// Navegación entre ángulos
nextImg.addEventListener("click", goNext);
prevImg.addEventListener("click", goPrev);


// ==============================
// 5. Actualización de la UI
// ==============================

// Actualiza la imagen principal según el color y ángulo actuales
function updateImage() {
    mainImage.src = `img/novaergo/NovaErgo_${currentAngle}_${currentColor}_nbg.png`;
}

// Ir al siguiente ángulo (cíclico)
function goNext() {
    currentAngle = currentAngle >= MAX_ANGLE ? 1 : currentAngle + 1;
    updateImage();
}

// Ir al ángulo anterior (cíclico)
function goPrev() {
    currentAngle = currentAngle <= 1 ? MAX_ANGLE : currentAngle - 1;
    updateImage();
}