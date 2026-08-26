---
layout: home
title: "Home"
---

<div class="flex flex-col items-center justify-center text-center space-y-6 mt-8 px-4">
  <div class="home-headshot">
    <img src="/Andres%20Tobacia%20Professional%20Headshot.jpg" alt="Andrés Tobacia" class="w-40 sm:w-56 md:w-64 rounded-full shadow-lg cursor-pointer mx-auto">
  </div>

  <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 max-w-2xl">Supply chain for things that leave the ground.</h1>
  <p class="text-base sm:text-lg text-gray-300 max-w-2xl px-2">
    Seventeen years moving parts through manufacturing, logistics, and automation, most recently for crewed spaceflight programs at Blue Origin.
  </p>

  <!-- Language Switch -->
  <div class="mt-2">
    <a href="/inicio" class="text-blue-400 hover:text-blue-500 underline">🌐 View this page in Spanish</a>
  </div>

  <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mt-4 w-full max-w-2xl px-2">
    <a href="/Andres_Tobacia_AI_Resume_EN.pdf" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center">Resume</a>
    <a href="/projects.html" class="border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-bold py-2 px-4 rounded text-center">See the work</a>
    <a href="/contact.html" class="border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-bold py-2 px-4 rounded text-center">Get in touch</a>
    <a href="/appstore.html" class="border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-bold py-2 px-4 rounded text-center">App Store</a>
  </div>
</div>

<script>
document.querySelectorAll('.home-headshot img').forEach(img => {
  img.addEventListener('click', function() {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0,0,0,0.9)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 9999;

    const fullImg = document.createElement('img');
    fullImg.src = this.src;
    fullImg.style.maxWidth = '90%';
    fullImg.style.maxHeight = '90%';
    fullImg.style.borderRadius = '8px';
    fullImg.style.boxShadow = '0 0 25px rgba(0,255,255,0.8)';

    overlay.appendChild(fullImg);
    overlay.addEventListener('click', () => document.body.removeChild(overlay));
    document.body.appendChild(overlay);
  });
});
</script>


