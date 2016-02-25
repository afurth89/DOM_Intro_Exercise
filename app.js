console.log("Javascript is alive!");



// When the page loads:

// Change the greeting from "Hello, There!" to "Hello, World!".
var greeting = document.querySelector('#greeting');

greeting.innerText = "Hello World!";

// Set the background color of each <li> to yellow.
var lists = document.getElementsByTagName('li');

for (var i = 0; i<lists.length; i++) {
  lists[i].style.backgroundColor = "yellow";
}
// Create an image tag, set its src attribute to 
// http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif, 
// and append the to the #greeting div.
var image = document.createElement('img');
image.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
greeting.appendChild(image);


// Afterwards:

// Add the class of selected to an <li> when it is clicked. 
// Remove it from any other lis as well.

// Change the image to be the most recently clicked food item.

// When the gray div is moused over, it's removed from the DOM.

// When the orange div is moused over, its width doubles. 
// When the mouse moves out of the div, it returns to its original size.

// When the reset button is clicked - remove the selected class 
// from each <li> and change the image to panic.jpeg.

// When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, 
// the page alerts the message "I HATE NUMBERZZZ!"

// BONUS: If someone types the Konami Code, the page alerts 
// "YOU ARE AN EVENT HANDLER GURUUUUUUUUU!"