document.addEventListener('DOMContentLoaded', function() {
    const textureElement = document.querySelector('.texture-element');
    
    setInterval(() => {
        textureElement.style.transform = `scale(${1 + Math.random() * 0.1})`;
    }, 2000);
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        textureElement.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    });
});