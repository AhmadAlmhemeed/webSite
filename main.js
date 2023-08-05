// const toggleButton = document.querySelector(".burger");
// const targetElement = document.getElementById('dropDownMenu');

//     toggleButton.addEventListener('click', ()=> {
//         targetElement.classList.toggle('open');
//     });
    const checkBox = document.getElementById('burger');
    const targetElement = document.getElementById('dropDownMenu');

    checkBox.addEventListener('change', function() {
        if (this.checked) {
            targetElement.classList.add('open');
        } else {
            targetElement.classList.remove('open');
        }
    });