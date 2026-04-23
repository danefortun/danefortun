
document.querySelectorAll('.fade-in').forEach((el) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  observer.observe(el);
});

document.querySelectorAll('[data-drag-scroll]').forEach((track) => {
  let isDown = false, startX = 0, scrollLeft = 0;
  track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.style.cursor = 'grabbing';
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });
  ['mouseleave', 'mouseup'].forEach((evt) => track.addEventListener(evt, () => {
    isDown = false;
    track.style.cursor = 'grab';
  }));
  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.25;
    track.scrollLeft = scrollLeft - walk;
  });
});
