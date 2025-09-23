const particles_container = document.querySelector('.particles');

function loadParticles(parent) {
    const containerWidth = parent.offsetWidth;
    const containerHeight = parent.offsetHeight;
    const particles = parent.getElementsByClassName('particle');
    console.log(particles);
    Array.from(particles).forEach(particle => {
        particle.style.fontSize = Math.random() * 50 + 40 + 'px';
        particle.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        newX = Math.random() * containerWidth;
        newY = Math.random() * containerHeight;
        particle.style.transform = `translate(${newX}px, ${newY}px)`;
    });
}
loadParticles(particles_container);