let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomBtn = document.getElementById("random")


//sets the color for each <input type="color"> & RandomBtn background
function setGradient() {
	let xyGradient = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

	body.style.background = xyGradient;
	randomBtn.style.background = xyGradient;

	css.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value});`;
}

// calls setGradient function on page load
window.onload = setGradient();

// function for random values

function getRandomGradient() {
	let randomColor1 = '#'+(Math.random()*(1<<24)|0).toString(16).toUpperCase();
	let randomColor2 = '#'+(Math.random()*(1<<24)|0).toString(16).toUpperCase();

	color1.value = randomColor1;
	color2.value = randomColor2;

	setGradient();
	css.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value});`;
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", getRandomGradient);
