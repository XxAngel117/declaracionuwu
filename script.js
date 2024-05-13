const yesbt = document.querySelector('#yes_b');

yesbt.addEventListener('click', function () {

    alert('Lo sabia , tocará compartir mi pantano , tocará compartir mi colección de raio mcqueen 😎, ver maratones de pelis de spiderman 🕸 y tocará ir a ver las luchas 😍')


})

const nobt = document.querySelector('#no_b');

nobt.addEventListener('mouseover', function (){

    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    nobt.style.setProperty('top', randomY+'%'); 
    nobt.style.setProperty('left', randomX+'%');
    nobt.style.setProperty('transform', `translate(-${randomX}%,-${randomY}%)`);
})