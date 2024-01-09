let myImages = [
    "images/3485097_big_c99aba85.jpg",
    "images/inside car.jpg",
    "images/3485097_big_b02c7b6d.jpg",
    "images/start button.jpg",
    "images/radio.jpg",
    "images/interior.jpg",
    "images/subaru legacy.jpg"
];

let currentImage = 0;

document.getElementById('next').onclick = nextPhoto;

function nextPhoto() {
    currentImage++;
    if (currentImage > myImages.length - 1) {
        currentImage = 0;
    }
    document.getElementById('myimage').src = myImages[currentImage];
}

document.getElementById('previous').onclick = previousPhoto;

function previousPhoto() {
    currentImage--;
    if (currentImage < 0) {
        currentImage = myImages.length - 1;
    }
    document.getElementById('myimage').src = myImages[currentImage];
}
