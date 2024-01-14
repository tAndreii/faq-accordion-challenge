console.log('Script works fine!')


let question = document.querySelector('.question');

let expand = () => {
    let response = question.querySelector('.response')
    let img = question.querySelector('img')
    if (response.style.display === "none") {
        response.style.display = "flex"
        img.src = "./assets/images/icon-minus.svg"
    } else {
        response.style.display = "none"
        img.src = "./assets/images/icon-plus.svg"
    }
};