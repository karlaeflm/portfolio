(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
  
  
  
Fixed Footer
Sticky Element
Equal Height
Clearfix
Responsive Floats
Snackbar
Fullscreen Window
Scroll Drawing
Smooth Scroll
Gradient Bg Scroll
Sticky Header
Shrink Header on Scroll
Pricing Table
Parallax
Aspect Ratio
Responsive Iframes
Toggle Like/Dislike
Toggle Hide/Show
Toggle Dark Mode
Toggle Text
Toggle Class
Add Class
Remove Class
Active Class
Tree View
Remove Property
Offline Detection
Find Hidden Element
Redirect Webpage
Zoom Hover
Flip Box
Center Vertically
Center Button in DIV
Transition on Hover
Arrows
Shapes
Download Link
Full Height Element
Browser Window
Custom Scrollbar
Hide Scrollbar
Device Look
Contenteditable Border
Placeholder Color
Text Selection Color
Bullet Color
Vertical Line
Dividers
Animate Icons
Countdown Timer
Typewriter
Coming Soon Page
Chat Messages
Popup Chat Window
Split Screen
Testimonials
Section Counter
Quotes Slideshow
Closable List Items
Typical Device Breakpoints
Draggable HTML Element
JS Media Queries
Syntax Highlighter
JS Animations
Get Iframe Elements

Website
Make a Website
Make a Website (W3.CSS)
Make a Website (BS3)
Make a Website (BS4)
Center Website
Contact Section
About Page
Big Header
Example Website

Grid
2 Column Layout
3 Column Layout
4 Column Layout
Expanding Grid
List Grid View
Mixed Column Layout
Column Cards
Zig Zag Layout
Blog Layout

Google
Google Charts
Google Fonts

Converters
Convert Weight
Convert Temperature
Convert Length
Convert Speed




How TO - On Scroll Header
Learn how to create a fixed/sticky header on scroll with CSS and JavaScript.



How To Create a Fixed Header on Scroll
Step 1) Add HTML:
Example
<div class="header" id="myHeader">
  <h2>My Header</h2>
</div>
Step 2) Add CSS:
Example
/* Style the header */
.header {
  padding: 10px 16px;
  background: #555;
  color: #f1f1f1;
}

/* Page content */
.content {
  padding: 16px;
}

/* The sticky class is added to the header with JS when it reaches its scroll position */
.sticky {
  position: fixed;
  top: 0;
  width: 100%
}

/* Add some top padding to the page content to prevent sudden quick movement (as the header gets a new position at the top of the page (position:fixed and top:0) */
.sticky + .content {
  padding-top: 102px;
}

Step 3) Add JavaScript:
Example
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);
