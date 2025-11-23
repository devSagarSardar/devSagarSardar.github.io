document.addEventListener('DOMContentLoaded', () => {
    // Add a subtle parallax effect to the background blobs
    const blobs = document.querySelectorAll('.absolute.rounded-full');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 20;
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;

            blob.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });

    console.log('Portfolio initialized. 🚀');
});
