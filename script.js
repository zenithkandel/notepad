const particles_container = document.querySelector('.particles');
// initialize particle position before animating
loadParticles(particles_container);

// animate the particles position every 10 seconds
function loadParticles(parent) {
    const containerWidth = parent.offsetWidth;
    const containerHeight = parent.offsetHeight;
    const particles = parent.getElementsByClassName('particle');
    console.log(particles);
    Array.from(particles).forEach(particle => {
        particle.style.fontSize = Math.random() * 32 + 20 + 'px';
        // particle.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        newX = Math.random() * containerWidth;
        newY = Math.random() * containerHeight;
        particle.style.transform = `translate(${newX}px, ${newY}px)`;
    });
}

setInterval(() => {
    loadParticles(particles_container);
}, 10000);