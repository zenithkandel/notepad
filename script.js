/**/
function loadParticles(parent) {
    const particles = parent.getElementsByClassName('particle');
    console.log(particles);
    Array.from(particles).forEach(particle => {
        particle.style.fontSize = Math.random() * 32 +20 + 'px';
        particle.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    });
}

let particles_container = document.querySelector('.particles');
loadParticles(particles_container);