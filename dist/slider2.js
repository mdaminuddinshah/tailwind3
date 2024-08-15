let lists = document.querySelector("#lists");
let items = document.querySelectorAll(".items");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

let tekan = 0;

next.addEventListener("click", () => {
    if(tekan < items.length -1){
        tekan += 1
    };
    let checkWide = items[tekan].offsetLeft;
    lists.style.left = -checkWide + 'px';
})

prev.addEventListener("click", () => {
    if(tekan > 0){
        tekan -= 1
    };
    let checkWide = items[tekan].offsetLeft;
    lists.style.left = -checkWide + 'px';
})


