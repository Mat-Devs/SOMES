document.addEventListener("DOMContentLoaded", function() {
    var images = ["resources/1.jpg","resources/2.jpeg", "resources/3.jpeg", "resources/4.jpeg", "resources/5.png"]; // Add your image URLs here
    var currentIndex = 0;
  
    function changeBackground() {
      document.body.style.backgroundImage = "url('" + images[currentIndex] + "')";
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    // Change background image every 3 seconds
    setInterval(changeBackground, 3000);
  });
  