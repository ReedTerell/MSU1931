document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.scrolling-gallery');
    const imgWidth = 300; // width of each image plus margin if any

    function recycleImages() {
        requestAnimationFrame(function checkImages() {
            const firstImage = gallery.firstChild;
            if (firstImage.getBoundingClientRect().right < 0) { // Check if the image is out of view
                gallery.appendChild(firstImage); // Move it to the end
            }
            requestAnimationFrame(checkImages);
        });
    }

    recycleImages(); // Start recycling images
});


    // Toggle mobile navigation visibility
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const nav = document.querySelector('#primary-navigation');

    navToggle.addEventListener('click', function() {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
        navToggle.setAttribute('aria-expanded', !expanded);
        nav.setAttribute('data-visible', !expanded);
    });

    // Setup for infinite scrolling gallery
    const gallery = document.querySelector('.scrolling-gallery');
    let images = gallery.querySelectorAll('img');

    // Function to clone and append images to ensure the gallery is "infinite"
    function cloneImages() {
        images.forEach(image => {
            const clone = image.cloneNode(true);
            gallery.appendChild(clone);
        });
        images = gallery.querySelectorAll('img'); // Update the images node list after cloning
    }

    // Initial cloning of images
    cloneImages();

    // Additional cloning on reaching the end of the scroll to ensure seamless infinite effect
    gallery.addEventListener('animationiteration', () => {
        cloneImages();
    });

