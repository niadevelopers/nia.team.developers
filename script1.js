 
 const menuToggle = document.querySelector('.menu-toggle');
 const menu = document.querySelector('.menu');
 const themeToggle = document.querySelector('.theme-toggle');
 const body = document.body;
 const menuItems = document.querySelectorAll('.menu li');


 function showMenu() {
     menuItems.forEach((item, index) => {
         gsap.to(item, {
             opacity: 1,
             y: 0,
             stagger: 0.1,
             duration: 0.5,
             ease: "power3.out",
             delay: index * 0.1 
         });
         item.classList.add('showItem'); 
     });
 }

 function hideMenu() {
     gsap.to(menuItems, {
         opacity: 0,
         y: -20,
         duration: 0.3,
         ease: "power3.in",
         onComplete: function() {
             menu.classList.remove('show');
             menuToggle.classList.remove('open');
         }
     });
 }

 menuToggle.addEventListener('click', () => {
     if (menu.classList.contains('show')) {
         hideMenu();
     } else {
         menu.classList.add('show');
         menuToggle.classList.add('open');
         showMenu();
     }
 });

 themeToggle.addEventListener('click', () => {
     body.classList.toggle('dark-mode');
 });
