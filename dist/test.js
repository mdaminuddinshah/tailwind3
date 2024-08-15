let lists = document.querySelector("#lists");
let items = document.querySelectorAll(".items");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

let tekan = 0;

next.addEventListener("click", () => {
    if(tekan < items.length - 1){  // Corrected from '4-1' to 'items.length - 1'
        tekan += 1;
    }
    let checkWide = items[tekan].offsetLeft; // Access the offsetLeft of the current item
    lists.style.left = -checkWide + 'px';  // Move the entire list container
});

prev.addEventListener("click", () => {
    if(tekan > 0){
        tekan -= 1;
    }
    let checkWide = items[tekan].offsetLeft; // Access the offsetLeft of the current item
    lists.style.left = -checkWide + 'px';  // Move the entire list container
});
