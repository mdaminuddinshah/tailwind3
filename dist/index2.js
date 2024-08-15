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

// carousel

let imgs = document.querySelectorAll(".imgs");
let prev2 = document.querySelector("#prev2");
let next2 = document.querySelector("#next2");
let carousel = document.querySelector("#carousel");
let page = document.querySelectorAll(".page");
let context = document.querySelectorAll(".context");
let saiz = document.querySelectorAll(".saiz");

let gambar = 3;
let beza_gambar = 460;

next2.addEventListener("click", () => {
    
    if(gambar >= 0){
        context[gambar].classList.add("hidden");
        context[gambar].classList.remove("flex");
        page[gambar].classList.add("blur-sm");
        page[gambar].classList.add("justify-center");
        saiz[gambar].classList.remove("w-40", "h-40");
        saiz[gambar].classList.add("w-32", "h-32");
    }
    
    if(gambar < imgs.length -1){
        gambar +=1;
    };

    if(gambar){
        context[gambar].classList.remove("hidden");
        context[gambar].classList.add("flex");
        page[gambar].classList.remove("blur-sm");
        page[gambar].classList.remove("justify-center");
        saiz[gambar].classList.remove("w-32", "h-32");
        saiz[gambar].classList.add("w-40", "h-40");
    }

    let checkWide2 = imgs[gambar].offsetLeft;
    console.log(checkWide2);
    
    carousel.style.left = (-checkWide2 + beza_gambar) + "px";
    console.log(carousel.style.left = (-checkWide2 + beza_gambar) + "px");
    


});

prev2.addEventListener("click", () => {

    if(gambar){
        context[gambar].classList.add("hidden");
        context[gambar].classList.remove("flex");
        page[gambar].classList.add("blur-sm");
        page[gambar].classList.add("justify-center");
        saiz[gambar].classList.remove("w-40", "h-40");
        saiz[gambar].classList.add("w-32", "h-32");
        console.log(gambar);
    }

    if(gambar > 0){
        gambar -=1;
    };

    context[gambar].classList.remove("hidden");
    context[gambar].classList.add("flex");
    page[gambar].classList.remove("blur-sm");
    console.log(gambar);
    page[gambar].classList.remove("justify-center");
    saiz[gambar].classList.remove("w-32", "h-32");
    saiz[gambar].classList.add("w-40", "h-40");

    let checkWide3 = imgs[gambar].offsetLeft;
    console.log(checkWide3);
    carousel.style.left = (-checkWide3 + beza_gambar) + "px";
    console.log(carousel.style.left = (-checkWide3 + beza_gambar) + "px");
    
});

