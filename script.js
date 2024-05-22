document.addEventListener("DOMContentLoaded", () => {
  const homeContentText = document.querySelector(".homeContent h1");
  homeContentText.classList.add("animate");

  const nav = document.querySelector("header");
  window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
          nav.classList.add("scrolled");
      } else {
          nav.classList.remove("scrolled");
      }
  });

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".links");

  // Remove any existing click event listeners to avoid duplicates
  hamburger.removeEventListener("click", toggleNavLinks);

  // Define the function separately to easily remove it if needed
  function toggleNavLinks() {
      navLinks.classList.toggle("active");
      console.log(navLinks.classList);
  }

  hamburger.addEventListener("click", toggleNavLinks);

  document.addEventListener('scroll', function() {
      const scrollPosition = window.pageYOffset;
      const images = document.querySelectorAll('.images');

      images.forEach((image, index) => {
          const speed = (index + 1) * 0.1;
          const offset = scrollPosition * speed;
          image.style.transform = `translateY(${offset}px)`;
      });
  });
    
    const portfolioItems = document.querySelectorAll('.portfolio-items .images1');

    function checkVisibility() {
      const triggerBottom = window.innerHeight / 5 * 4;
  
      portfolioItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
  
        if (itemTop < triggerBottom) {
          setTimeout(() => {
            item.classList.add('visible');
          }, index * 400);
        }
      });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 

    // const colorToggleButton = document.getElementById('colorToggleButton');

    // colorToggleButton.addEventListener('click', () => {
    //     document.body.classList.toggle('light-mode');
    //     document.querySelector('header').classList.toggle('light-mode');
    //     document.querySelectorAll('.links a').forEach(link => link.classList.toggle('light-mode'));
    //     document.querySelectorAll('.startButton, .colorToggleButton').forEach(button => button.classList.toggle('light-mode'));
    //     document.querySelector('footer').classList.toggle('light-mode');
    // });
});


