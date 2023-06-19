let arrayOfImages = ["img1.jpg", "img2.jpg", "img3.jpg"]
let currentIndex = 0;

let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");


// Carga de carrousel de imágenes
function loadCarousel(array){
    let screen = document.querySelector(".screen");
    let carousel = document.createElement("div");
    carousel.classList.add("carousel");
    
    for(let index in array){
        console.log(index);
        let image = document.createElement("img");
        image.src = "img/" + array[index];
        image.classList.add("image")
        carousel.append(image);
    }
    screen.append(carousel);
}

loadCarousel(arrayOfImages);

// // Inserción de imagen inicial
// let screen = document.querySelector(".screen");
// let image = document.createElement("img");
// image.src = "img/" + arrayOfImages[currentIndex];
// image.classList.add("image")
// screen.appendChild(image);

// // Posición inicial de botones
// prevBtn.disabled = true;

// // FUNCIÓN: Pulsación de botón
// prevBtn.addEventListener("click", () => {
//     if (currentIndex === 1) {
//         currentIndex--;
//         updateScreen(currentIndex);
//         prevBtn.disabled = true;
//         return;
//     };
//     currentIndex--;
//     updateScreen(currentIndex);

//     isDisabled(nextBtn);
// })

// nextBtn.addEventListener("click", () => {
//     if (currentIndex === arrayOfImages.length - 2) {
//         currentIndex++;
//         updateScreen(currentIndex);
//         nextBtn.disabled = true;
//         return;
//     };
//     currentIndex++;
//     updateScreen(currentIndex);

//     isDisabled(prevBtn);
// })


// // FUNCIÓN: Actualizar pantalla
// function updateScreen(position) {
//     image.src = "img/" + arrayOfImages[position];
// }

// // FUNCIÓN: Comprobar si el botón está deshabilitado
// function isDisabled(button){
//     if (button.disabled) {
//         button.disabled = false;
//     }
// }

// // Hacer zoom
// image.addEventListener("click",()=>{
//     const zoom = document.createElement("div");
//     zoom.classList.add("zoom");
// })