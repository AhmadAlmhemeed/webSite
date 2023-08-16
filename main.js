  // loader timeout
  const loader = document.getElementById('loader-container');
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function(){
    loader.classList.add('close')},2000)
    yourFunctionToExecuteAfterDOMReady();
  });

  //  nav item click event
document.addEventListener("DOMContentLoaded", function() {
  const navItems = document.querySelectorAll(".navLinks li");
  navItems.forEach(function(item) {
    item.addEventListener("click", function() {
      navItems.forEach(function(navItem) {
        navItem.classList.remove("active");
      });

      item.classList.add("active");
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const navItems = document.querySelectorAll(".navLinks li");
  const sections = document.querySelectorAll("section");

  // تحديث الحالة النشطة بناءً على موضع التمرير
  function updateActiveNav() {
    sections.forEach(function(section, index) {
      const sectionTop = section.offsetTop ;
      const sectionBottom = sectionTop + section.offsetHeight ;

      if (window.scrollY >= sectionTop -150 && window.scrollY < sectionBottom) {
        navItems.forEach(function(navItem) {
          navItem.classList.remove("active");
        });
        navItems[index].classList.add("active");
      }
    });
  }

  // مستمع الأحداث للتمرير
  window.addEventListener("scroll", updateActiveNav);

  // مستمع الأحداث للنقر على عناصر القائمة
  navItems.forEach(function(item, index) {
    item.addEventListener("click", function(event) {
      event.preventDefault();

      // انتقل إلى القسم المناسب عن طريق الانتقال إلى الجزء العلوي من القسم
      const sectionTop = sections[index].offsetTop;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth"
      });
    });
  });

  // تحديث الحالة النشطة عند تحميل الصفحة
  updateActiveNav();
});
// dark mode switch
const mode_switch = document.querySelector('.theme-switch input');
const mode_switch1 = document.querySelector('#theme-switch');
mode_switch.addEventListener('click',()=>{
  document.body.classList.toggle('white-mode');
})
mode_switch1.addEventListener('click',()=>{
  document.body.classList.toggle('white-mode');
})



   // drop down menu script
    const checkBox = document.getElementById('burger');
    const targetElement = document.getElementById('dropDownMenu');

    checkBox.addEventListener('change', function() {
        if (this.checked) {
            targetElement.classList.add('open');
        } else {
            targetElement.classList.remove('open');
        }
    });
// skills section icons animation 
const icons = document.querySelectorAll('.skills-icons .icon');

icons.forEach(icon => {
  moveIcon(icon);
});

function moveIcon(icon) {
  let posX = Math.random() * (window.innerWidth - 50);
  let posY = Math.random() * (window.innerHeight - 50);
  let speedX = (Math.random() - 0.5) * 2;
  let speedY = (Math.random() - 0.5) * 2;

  setInterval(() => {
    posX += speedX;
    posY += speedY;

    if (posX <= 0 || posX >= window.innerWidth - 50) {
      speedX *= -1;
    }
    if (posY <= 0 || posY >= window.innerHeight - 50) {
      speedY *= -1;
    }

    posX = Math.min(Math.max(posX, 0), window.innerWidth - 50);
    posY = Math.min(Math.max(posY, 0), window.innerHeight - 50);

    icon.style.left = posX + 'px';
    icon.style.top = posY + 'px';
  }, 8);
}
// contact icons
const menu=document.querySelector(".contact-menu");
const toggle=document.querySelector(".contact-toggle");
toggle.addEventListener("click",()=>{
menu.classList.toggle("active");
})
