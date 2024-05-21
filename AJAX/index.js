// asynchronus javascript and xml request
// is a technique used to create dynamic in interactive web applications
// it allows web pages to be updated asynchronously by exchanging small amounts of data with the server behind the scenes

// Key Concepts : Asynchronous, JavaScript, XML

function loadData() {
  // creates new XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Configure it
  xhr.open("GET", "data.json", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      console.log(data);
    }
  };
  // Send the request
  xhr.send();
}
// Advantages: Better User Experience, Reduce Server Load, Improved Performance
// Disadvantages: Browser Compatibility, Security Concerns, SEO Limitations
