let slider = document.querySelector("#slider");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let lists = document.querySelectorAll(".lists");

let tekan = 0;

next.addEventListener("click", () => {
    if( tekan < lists.length - 1){
        tekan += 1
    };

    let checkwide1 = lists[tekan].offsetLeft;
    slider.style.left = -checkwide1 + 'px';
    console.log(checkwide1);
})

prev.addEventListener("click", () => {
    if( tekan > 0){
        tekan -= 1
    };

    let checkwide2 = lists[tekan].offsetLeft;
    slider.style.left = -checkwide2 + 'px';
    console.log(checkwide2);
})