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

