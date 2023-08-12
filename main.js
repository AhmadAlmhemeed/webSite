  // loader timeout
  const loader = document.getElementById('loader-container');
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function(){
    loader.classList.add('close')},2000)
    yourFunctionToExecuteAfterDOMReady();
  });
  
  
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

