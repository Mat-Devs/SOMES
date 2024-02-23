var slider_img = document.querySelector('.slider-img');
var images = ['1.png', '2.png', '3.png', '4.png', '5.png'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "resources/"+images[i]);
	
}

var slider_img = document.querySelector('.slider-img');
var dots = document.querySelectorAll('.dot');
var images = ['1.png', '2.png', '3.png', '4.png', '5.png'];
var currentSlideIndex = 0;
var intervalId;

function startSlideshow() {
    intervalId = setInterval(next, 5000); // Change photo every 2 seconds (2000 milliseconds)
}

function stopSlideshow() {
    clearInterval(intervalId);
}

function showSlide(index) {
    slider_img.setAttribute('src', "resources/"+images[index]);
    updateDots(index);
}

function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
}

function prev() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = images.length - 1;
    }
    showSlide(currentSlideIndex);
}

function next() {
    currentSlideIndex++;
    if (currentSlideIndex >= images.length) {
        currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
}

// Initially show the first slide
showSlide(currentSlideIndex);

// Start slideshow automatically when the page loads
startSlideshow();

// Optionally, you can stop the slideshow when the user hovers over the image
slider_img.addEventListener('mouseover', stopSlideshow);

// And resume it when the user moves the mouse out of the image
slider_img.addEventListener('mouseout', startSlideshow);
