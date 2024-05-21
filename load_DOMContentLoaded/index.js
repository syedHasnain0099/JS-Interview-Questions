// In web development, the 'load' event and the 'DOMContentLoaded' event on the 'documnet' object are both used to detedct
// when parts of the page have finishedloading, but they have different timings and purposes. Here's a breakdown of the difference between the two:

// DOMContentLoaded Event

// When it Fires: The "DOMContentLoaded" event fires when the initial HTML documnet has been completely loaded and parsed, without waiting for stylesheets,
// images and subframes to finish loading.

// Usage: It is used to excecute Javascript code as soon as the DOM is ready, which means you can start manipulating the DOM and setting up event listeners without
// waiting for entire page(including images and external resource) to load.

// Example:
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
});

// Load Event
// when it fires: The 'load' event fires when the entire page has finished loading, including all dependent resouces such as stylesheets, images, and subframes.
// Usage: It is used to execute JavaScript code after the whole page including call resources, is fully loaded. This can be useful for tasks that depend on the complete page layout, such as
// executing scripts that require the dimensions of images or other elemets that depend in external resources.

window.addEventListener("load", function () {
  console.log("Entire page fully loaded");
});

// Key Differences
// Timing:

// DOMContentLoaded: Fires after the HTML is loaded and parsed, before waiting for stylesheets, images, and subframes to load.
// load: Fires after the entire page and all resources are fully loaded.
// Usage Scenarios:

// DOMContentLoaded: Suitable for early DOM manipulation and setting up event listeners.
// load: Suitable for tasks that need to ensure all resources are loaded, such as measuring the size of images or performing animations that depend on the complete page content.

// Visual Representation of Events
// To better illustrate the difference, consider the following sequence of events when a web page loads:

// The browser starts loading the HTML document.
// The browser parses the HTML and constructs the DOM tree.
// The DOMContentLoaded event is fired once the DOM is fully constructed.
// The browser continues to load external resources like stylesheets, images, and subframes.
// The load event is fired once all external resources are completely loaded.
