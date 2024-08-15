const tutup = document.getElementById("tutup");
const menu = document.getElementById("menu");
const list = document.getElementById("list");

menu.addEventListener("click", () => {
    list.classList.toggle("flex");
    list.classList.toggle("hidden");


})

tutup.addEventListener("click", () => {
    list.classList.toggle("flex");
    list.classList.toggle("hidden");
})