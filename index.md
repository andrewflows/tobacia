---
layout: home
title: "Home"
---

<div class="flex flex-col items-center justify-center text-center space-y-6 mt-8 px-4">
  <div class="home-headshot">
    <img src="/Andres%20Tobacia%20Professional%20Headshot.jpg" alt="Andrés Tobacia" class="w-40 sm:w-56 md:w-64 rounded-full shadow-lg cursor-pointer mx-auto">
  </div>

  <h1 class="text-2xl sm:text-3xl font-bold text-blue-300">Andrés Tobacia</h1>
  <h2 class="text-base sm:text-lg md:text-xl font-medium text-gray-200 typewriter px-2">
    Industrial Engineering & Supply Chain Executive | AI-Powered Manufacturing & Space Exploration
  </h2>

  <!-- Language Switch -->
  <div class="mt-2">
    <a href="/inicio" class="text-blue-400 hover:text-blue-500 underline">🌐 View this page in Spanish</a>
  </div>

  <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mt-4 w-full max-w-2xl px-2">
    <a href="/ai-portfolio.html" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center">AI Portfolio</a>
    <a href="https://www.linkedin.com/in/jatobacia/" target="_blank" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center">LinkedIn</a>
    <a href="/Andres_Tobacia_AI_Resume_EN.pdf" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center">Resume</a>
    <a href="/contact.html" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center">Contact</a>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.typewriter');
  const text = el.textContent;
  el.textContent = '';
  let i = 0;
  const type = () => {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  };
  type();
});

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

<style>
.typewriter {
  border-right: 2px solid #38bdf8;
  white-space: nowrap;
  overflow: hidden;
}
</style>


