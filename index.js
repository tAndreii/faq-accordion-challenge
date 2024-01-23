console.log('Script works fine!');

const questions = document.querySelectorAll('details');

questions.forEach(question => {
    
    const toggler = question.querySelector('summary');
    const icon = toggler.querySelector('.plus-minus-icon')

    toggler.addEventListener('click', () => {
        if (toggler.parentElement.hasAttribute("open")) {
            icon.src = "./assets/images/icon-plus.svg"
        } else {
            icon.src = "./assets/images/icon-minus.svg"
        }
    });
});