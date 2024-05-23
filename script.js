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
      let features = document.getElementById("features");
      let gallery = document.getElementById("gallery")
      let card = document.getElementsByClassName("gallery-card");
      let portfolio = document.getElementById("portfolio")
    
      if (isChecked === true) {
        home.classList.add("light-mode");
        home.classList.remove("dark-mode");
        header.classList.add("light-mode");
        header.classList.remove("dark-mode");
        for (let i = 0; i < links.length; i++) {
          links[i].classList.add("light-mode");
          links[i].classList.remove("dark-mode");
        }
        for (let i = 0; i < start.length; i++) {
          start[i].classList.add("light-mode");
          start[i].classList.remove("dark-mode");
        }

        for (let i = 0; i < start.length; i++) {
          card[i].classList.add("light-mode");
          card[i].classList.remove("dark-mode");
        }
        features.classList.add("light-mode");
        features.classList.remove("dark-mode");
        gallery.classList.add("light-mode");
        gallery.classList.remove("dark-mode");
        portfolio.classList.add("light-mode");
        portfolio.classList.remove("dark-mode");
      } else {
        home.classList.remove("light-mode");
        home.classList.add("dark-mode");
        header.classList.remove("light-mode");
        header.classList.add("dark-mode");
    
        for (let i = 0; i < links.length; i++) {
          links[i].classList.remove("light-mode");
          links[i].classList.add("dark-mode");
        }
    
        for (let i = 0; i < start.length; i++) {
          start[i].classList.remove("light-mode");
          start[i].classList.add("dark-mode");
        }
        for (let i = 0; i < start.length; i++) {
          card[i].classList.remove("light-mode");
          card[i].classList.add("dark-mode");
        }
        features.classList.remove("light-mode");
        features.classList.add("dark-mode");
        gallery.classList.remove("light-mode");
        gallery.classList.add("dark-mode");
        portfolio.classList.remove("light-mode");
        portfolio.classList.add("dark-mode");
      }
    }
    
    document.getElementById("Mode").addEventListener("change", toggleMode);
});


