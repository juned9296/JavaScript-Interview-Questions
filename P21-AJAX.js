/*
Q. What is AJAX ?

Ans- AJAX stand for Asynchronus JavaScript and XML. it is Technique used
     in JavaScript to send and recive data from a server without refreshing 
     the entire web page. It allow You to For a dynamic updates and a smoother
     user exprince an website. */

    //  Fetch API is the example of AJAX

    fetch('/get_weather', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(weatherData => {
      // Update the weather information on the page with the new data.
    })
    .catch(error => {
      // Handle errors during the AJAX request.
    });
    
     
     