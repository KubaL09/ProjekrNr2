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

  hamburger.removeEventListener("click", toggleNavLinks);


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

    function toggleMode() {
      let isChecked = document.getElementById("Mode").checked;
      let home = document.getElementById("home");
      let header = document.querySelector("header");
      let start = document.getElementsByClassName("startButton");
      let links = document.getElementsByClassName("a-link");
      let section = document.getElementsByClassName("section");

    
      if (isChecked === true) {
        home.classList.add("light-mode");
        home.classList.remove("dark-mode");
        header.classList.add("light-mode");
        header.classList.remove("dark-mode");
        links.classList.add("light-mode");
        links.classList.remove("dark-mode");
        start.classList.add("light-mode");
        start.classList.remove("dark-mode");
        section.classList.add("light-mode");
        section.classList.remove("dark-mode");
      } else {
        home.classList.remove("light-mode");
        home.classList.add("dark-mode");
        header.classList.remove("light-mode");
        header.classList.add("dark-mode");
        links.classList.remove("light-mode");
        links.classList.add("dark-mode");
        start.classList.remove("light-mode");
        start.classList.add("dark-mode");
        section.classList.remove("light-mode");
        section.classList.add("dark-mode");
      }
    }
    
    document.getElementById("Mode").addEventListener("change", toggleMode);
});


