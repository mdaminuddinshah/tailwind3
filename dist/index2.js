let slider = document.querySelector("#slider");
let list = document.querySelectorAll(".list");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let para = document.querySelectorAll(".para");
let header = document.querySelector("#header");

let tekan = 0;
let paras = 0;

let initialOffset = -80;

next.addEventListener("click", () => {

    if( tekan < list.length - 1 ){
        tekan += 1;
    }

    if( paras < para.length - 1 ){
        paras += 1;
    }

    let checkwide = list[tekan].offsetLeft;
    slider.style.left = -checkwide + 'px';

    // 1280px + left-20 is -80px = 1200 
    let checkheader = para[paras].offsetLeft + initialOffset;
    header.style.left = -checkheader + 'px';
    
    console.log(checkheader)
    console.log(checkwide)
});


prev.addEventListener("click", () => {

    if( tekan > 0 ){
        tekan -= 1;
    }

    if( paras > 0 ){
        paras -= 1;
    }

    let checkwide = list[tekan].offsetLeft;
    slider.style.left = -checkwide + 'px';

    let checkheader = para[paras].offsetLeft + initialOffset;
    header.style.left = -checkheader + 'px';
});