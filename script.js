document.addEventListener('DOMContentLoaded', () => {
    const rocket = document.getElementById('rocket');
    rocket.classList.add('rocket-float');
});

window.addEventListener('scroll', () => {
    const value = window.scrollY;
    const stars = document.getElementById('stars');
    const planets = document.getElementById('planets');
    const clouds = document.getElementById('clouds');
    const mountains = document.getElementById('mountains');
    const rocket = document.getElementById('rocket');
    const text = document.getElementById('text');

    // Parallax effects
    stars.style.transform = `translateY(${value * 0.25}px)`;
    planets.style.transform = `translateX(${value * -0.25}px)`;
    clouds.style.transform = `translateY(${value * 0.5}px)`;

    // Mountain zoom effect
    const scale = 1 + (value * 0.0005);
    mountains.style.transform = `translateY(${value * 0.15}px) scale(${scale})`;

    // Rocket animation
    if (value > 0) {
        rocket.classList.remove('rocket-float');
        rocket.classList.add('rocket-fly');
        rocket.style.transform = `translate(-50%, ${-value * 0.8}px)`;
    } else {
        rocket.classList.remove('rocket-fly');
        rocket.classList.add('rocket-float');
        rocket.style.transform = 'translate(-50%, 0)';
    }

    // Text fade and move
    text.style.transform = `translateY(${value * 1.5}px)`;
    text.style.opacity = 1 - value * 0.003;
});