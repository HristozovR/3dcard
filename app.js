const img = document.querySelector('.img');
const card = document.querySelector('.card');


card.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 35;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 35;
    img.style.transform = `rotateY(${xAxis}deg) rotate(${yAxis}deg)`;
});

card.addEventListener('mouseenter', (e) => {
    img.style.transition = 'none';
});

card.addEventListener('mouseleave', (e) => {
    img.style.transition = 'all 0.5s ease';
    img.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

// const whiteButton = document.querySelector('.white');
// whiteButton.addEventListener('click', () => {
//     img.src = 'white.png';
// })

const buttons = document.querySelectorAll('div.colors button');
// console.log(buttons);
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let classCheck = document.querySelector(".active");
        if(classCheck !==null){
         classCheck.className = '';
        }
        let checkButton = button.innerHTML.toLowerCase();
        switch (checkButton) {
            case 'black':
                img.src = 'black.png';
                button.classList.add('active');
                button.classList.add('black');
                break;
            case 'white':
                img.src = 'white.png';
                button.classList.add('active');
                button.classList.add('white');
                break;
            case 'red':
                img.src = 'red.png';
                button.classList.add('active');
                button.classList.add('red');
                break;
            case 'blue':
                img.src = 'blue.png';
                button.classList.add('active');
                button.classList.add('blue');
                break;
            default:
                break;
        }
    })
})