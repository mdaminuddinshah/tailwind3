const imgs = document.getElementById("imgs"); // The container that holds all the images/items
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const items = imgs.querySelectorAll('.item'); // Select all items with the class 'item'

let tekan = 0;

next.addEventListener('click', () => {
    if (tekan < items.length - 1) { // Prevent going out of bounds
        tekan += 1;
        reload();
    }
});

prev.addEventListener('click', () => {
    if (tekan > 0) { // Prevent going out of bounds
        tekan -= 1;
        reload();
    }
});

function reload(){
    let checkLeftWidth = items[tekan].offsetLeft; // Get the left offset of the current item
    imgs.style.left = -checkLeftWidth + 'px'; // Move the container to bring the item into view
    console.log(checkLeftWidth);
}
