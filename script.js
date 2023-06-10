function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


const observer = new IntersectionObserver((enteries) => {
  enteries.forEach((entery) => {
      console.log(entery)
      if (entery.isIntersecting) {
          entery.target.classList.add('show');
      } else {
          entery.target.classList.remove('show');
      }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));





