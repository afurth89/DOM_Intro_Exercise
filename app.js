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
var imageGreeting = document.createElement('img');
imageGreeting.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
greeting.appendChild(imageGreeting);


// Afterwards:

// Add the class of selected to an <li> when it is clicked. 
// Remove it from any other lis as well.
var essentialsDiv = document.getElementById('essentials');

var images = document.getElementsByTagName('img');  // to change food item image below

// Create event listener for the 'essentials' div element 
// that contains all the <li> tags
essentialsDiv.addEventListener('click', function(e) { // when click occurs
  for (i=0; i<lists.length; i++) {                    // loop thru all <li>
    lists[i].classList.remove('selected');            // remove 'selected' class
  }
  if (e.target.tagName === "LI") {                    // if event targets an <li>
    event.target.classList.add('selected');           // add 'selected' to targeted tag
// Change the image to be the most recently clicked food item.
    var newImg = event.target.innerHTML;              // target the inner HTML, which is part of file path
    essentialsDiv.nextElementSibling.firstElementChild.src = "./images/"+newImg+".jpeg"; //access .src of img, and replaces with path of clicked img   
  }
});

// When the gray div is moused over, it's removed from the DOM.
var ghosting = document.getElementById('ghosting');

ghosting.addEventListener('mouseover', function() {
  this.remove(ghosting);
});

// When the orange div is moused over, its width doubles. 
var orange = document.getElementById('resize');

orange.addEventListener('mouseenter', function() {
  this.style.width = "400px";
});
// When the mouse moves out of the div, it returns to its original size.
orange.addEventListener('mouseleave', function() {
  this.style.width = "200px";
});

// When the reset button is clicked - remove the selected class 
// from each <li> and change the image to panic.jpeg.
var reset = document.getElementById('reset');

reset.addEventListener('click', function() {
  for (i=0; i<lists.length; i++) {                   
    lists[i].classList.remove('selected');           
  }
  essentialsDiv.nextElementSibling.firstElementChild.src = "./images/panic.jpeg";
});

// When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, 
// the page alerts the message "I HATE NUMBERZZZ!"
window.addEventListener('keypress', function(e) {
  // copied from http://stackoverflow.com/questions/13196945/keycode-values-for-numeric-keypad
  if (e.keyCode >= 48 && e.keyCode <= 57) {
      alert("I HATE NUMBERZZZ!");
  }
});

// BONUS: If someone types the Konami Code, the page alerts 
// "YOU ARE AN EVENT HANDLER GURUUUUUUUUU!"

// Found this from: http://mattkirman.com/how-to-recreate-the-konami-code-in-javascript/

// check to make sure that the browser can handle window.addEventListener
if (window.addEventListener) {
    // create the keys and konami variables
    var keys = [],
        konami = "38,38,40,40,37,39,37,39,66,65";
    
    // bind the keydown event to the Konami function
    window.addEventListener("keydown", function(e){
        // push the keycode to the 'keys' array
        keys.push(e.keyCode);
        
        // and check to see if the user has entered the Konami code
        if (keys.toString().indexOf(konami) >= 0) {
            // do something such as:
            // alert('Konami');
            alert("YOU ARE AN EVENT HANDLER GURUUUUUUUUU!");
            // and finally clean up the keys array
            keys = [];
        };
    }, true);
};