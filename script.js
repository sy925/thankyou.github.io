document.addEventListener('DOMContentLoaded', () => {
    const sparklesContainer = document.querySelector('.sparkles');

    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.setProperty('--x', Math.random());
        sparkle.style.setProperty('--y', Math.random());
        sparklesContainer.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }

    setInterval(() => {
        for (let i = 0; i < 20; i++) {
            createSparkle(Math.random(), Math.random());
        }
    }, 500);
});
