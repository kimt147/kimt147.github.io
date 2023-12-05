document.addEventListener("DOMContentLoaded", function () {
    // Simulate loading time
    let progress = 1;
    const interval = setInterval(function () {
      // Increment the progress
      progress++;
      // Update the width of the loading bar
      document.querySelector('.loading-bar').style.width = `${progress}%`;
  
      // Check if loading is complete
      if (progress === 100) {
        clearInterval(interval); // Stop the interval
        // Redirect to your homepage
        window.location.href = "https://kimt147.github.io/";
      }
    }, 30); // Adjust the interval duration as needed
  });
  