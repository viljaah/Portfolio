
//https://medium.com/@amr.abdelkarem/a-guide-to-accessible-smooth-scroll-with-javascript-3f3e058b3f97 + powerpoints from Front-end course

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

