const mainImage = document.getElementById("mainImage");
const colorButtons = document.querySelectorAll(".color-dot");

colorButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // quitar selección previa
        colorButtons.forEach((b) => b.classList.remove("btn-selected"));
        btn.classList.add("btn-selected");

        const color = btn.dataset.color;

        const imagePath = `img/novaergo/NovaErgo_01_${color}_bg_eliminado.png`;

        mainImage.src = imagePath;
    });
});