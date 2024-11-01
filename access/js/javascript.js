
function mudaTmanho() {
    const itens = document.getElementById("itens");
    if (window.innerWidth > 768) {
        itens.style.display = "block";
    } else {
        itens.style.display = "none";
    }
}

function clickMenu() {
    console.log("Menu clicado");
    const itens = document.getElementById("itens");
    itens.classList.toggle("show");
}
