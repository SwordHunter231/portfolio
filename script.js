  // Floating cursor effect
  document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.createElement('div');
    cursor.className = 'fixed w-8 h-8 rounded-full bg-neon pointer-events-none z-50 mix-blend-difference';
    cursor.style.transform = 'translate(-50%, -50%)';
    cursor.style.opacity = '0.7';
    cursor.style.filter = 'blur(1px)';
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .hover-3d');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.opacity = '0.9';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.opacity = '0.7';
        });
    });
    
    
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.md\\:hidden');
    mobileMenuButton.addEventListener('click', () => {
        const menu = document.querySelector('.md\\:flex');
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
        menu.classList.toggle('flex-col');
        menu.classList.toggle('absolute');
        menu.classList.toggle('top-16');
        menu.classList.toggle('right-0');
        menu.classList.toggle('bg-black');
        menu.classList.toggle('w-full');
        menu.classList.toggle('p-4');
        menu.classList.toggle('space-y-4');
        menu.classList.toggle('space-x-0');
    });
});


function openVideoLightbox(videoSrc) {
  const lightbox = document.getElementById("video-lightbox");
  const video = document.getElementById("lightbox-video");
  const source = video.querySelector("source");

  source.src = videoSrc;
  video.load();
  lightbox.classList.remove("hidden");
}

function closeVideoLightbox() {
  const lightbox = document.getElementById("video-lightbox");
  const video = document.getElementById("lightbox-video");

  video.pause();
  lightbox.classList.add("hidden");
}
