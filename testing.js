document.addEventListener('DOMContentLoaded', function() {
    // Function to handle the button click
    function navigateToGPSFMS() {
        window.location.href = 'https://www.gpsfms.com';
    }

    // Find the button element
    var button = document.querySelector('.geo-custom-button');

    // Check if the button exists and enable it
    if (button) {
        button.removeAttribute('disabled');
        button.setAttribute('aria-disabled', 'false');
        button.addEventListener('click', navigateToGPSFMS);
    }
});
