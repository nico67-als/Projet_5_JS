const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let index = 0 // On affiche la première slide en premier
const image = document.querySelector(".banner-img");
const text = document.querySelector("#banner p");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelectorAll (".dot");

arrowRight.addEventListener("click", function() {	
	dots[index].classList.remove("dot_selected");
	index = index + 1;
	if (index > 3) {
		index = 0;
	}	
	image.src = slides[index].image;
	text.innerHTML = slides[index].tagLine;		
	dots[index].classList.add("dot_selected");
})

arrowLeft.addEventListener("click", function() {
	dots[index].classList.remove("dot_selected");
	index = index - 1;
	if (index < 0) {
		index = 3;
	}
	image.src = slides[index].image;
	text.innerHTML = slides[index].tagLine;
	dots[index].classList.add("dot_selected");
})




