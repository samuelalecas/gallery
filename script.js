let carousel;
let currentPosition;
let currentIndex = 0;
let arrayOfImages = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];

let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

// Carga de carousel de imágenes
function createCarousel(array) {
    let screen = document.querySelector(".screen");
    carousel = document.createElement("div");
    carousel.className = "carousel";

    for (let index in array) {
        let image = document.createElement("img");
        image.src = "./img/" + array[index];
        image.setAttribute("id", index);

        // Definir estilos de imagenes 
        if (index == 0) {
            image.classList.add("visible");
        } else {
            image.classList.add("hidden");
        }
        carousel.append(image);
    }

    // Estilo del carousel
    let carouselStyle = `
        display: flex;
        position: absolute;
        height: 50vh;
        left: 0;
        -webkit-transition: left 0.7s cubic-bezier(.42,0,.35,1);
    `
    carousel.style.cssText = carouselStyle;

    screen.append(carousel);
}

// Centra la imagen segun la imagen actual
function calculateCurrentPosition() {
    let firstImage = document.getElementById(currentIndex);
    currentPosition = (firstImage.offsetWidth / 2) * -1
    return currentPosition;
}

// Actualiza el estilo del carousel para desplazarse
function startCarouselPosition() {
    currentPosition = calculateCurrentPosition();
    carousel.style.left = currentPosition + 'px';
}

// Actualiza el estilo del carousel para desplazarse
function updateCarouselPosition(displacement) {
    currentPosition += displacement;
    carousel.style.left = `${currentPosition}px`;
}


// GESTIÓN DE BOTONES
// Posición inicial de botones
prevBtn.disabled = true;

// Pulsación de botón
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

// Comprobar si el botón está deshabilitado
function isDisabled(button) {
    if (button.disabled) {
        button.disabled = false;
    }
}

const DIRECTIONS = {
    LEFT: 1,
    RIGHT: -1,
}

// Desplaza el carrusel
function moveCarousel(direction) {
    let currentImage = document.getElementById(currentIndex + direction);
    let followingImage = document.getElementById(currentIndex);
    let displacement = (currentImage.clientWidth / 2) + (followingImage.clientWidth / 2);
    currentImage.classList.replace("visible", "hidden");
    followingImage.classList.replace("hidden", "visible");
    updateCarouselPosition(displacement * direction);
}

// -------------------------------------------

// STARTING POINT

createCarousel(arrayOfImages);

setTimeout(() => {
    startCarouselPosition()
}, 10);

