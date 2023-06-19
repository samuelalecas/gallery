let arrayOfImages = ["img1.jpg", "img2.jpg", "img3.jpg"]
let currentIndex = 0;

let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

let carousel;


// FUNCIÓN: Carga de carrousel de imágenes
function loadCarousel(array) {
    let screen = document.querySelector(".screen");
    carousel = document.createElement("div");
    carousel.classList.add("carousel");

    for (let index in array) {
        console.log(index);
        let image = document.createElement("img");
        image.src = "img/" + array[index];
        image.classList.add("image")
        carousel.append(image);
    }
    screen.append(carousel);
}

// GESTIÓN DE BOTONES

// Posición inicial de botones
prevBtn.disabled = true;

// FUNCIÓN: Pulsación de botón
prevBtn.addEventListener("click", () => {
    if (currentIndex === 1) {
        prevBtn.disabled = true;
    } else {
        isDisabled(nextBtn);
    };
    currentIndex--;
    moveCarousel(DIRECTIONS.LEFT);
})

nextBtn.addEventListener("click", () => {
    if (currentIndex === arrayOfImages.length - 2) {
        nextBtn.disabled = true;
    } else {
        isDisabled(prevBtn);
    };
    currentIndex++;
    moveCarousel(DIRECTIONS.RIGHT);
})

// FUNCIÓN: Comprobar si el botón está deshabilitado
function isDisabled(button) {
    if (button.disabled) {
        button.disabled = false;
    }
}

const DIRECTIONS = {
    LEFT: Symbol(),
    RIGHT: Symbol(),
}

// FUNCIÓN: Desplaza el carrusel
function moveCarousel(direction) {
    let valueToMove;

    if (direction === DIRECTIONS.LEFT) {
        valueToMove = 150;
    }

    if (direction === DIRECTIONS.RIGHT) {
        valueToMove = -150;
    }

    let carouselLeftPos = carousel.offsetLeft;
    carousel.style.left = (carouselLeftPos + valueToMove) + 'px';
}

// AL COMENZAR
loadCarousel(arrayOfImages);