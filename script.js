/**/
function loadParticles(parent) {
    const particles = parent.getElementsByClassName('particle');
    console.log(particles);
    Array.from(particles).forEach(particle => {
        particle.style.fontSize = Math.random() * 32 +20 + 'px';
    });
}

let particles_container = document.querySelector('.particles');
loadParticles(particles_container);