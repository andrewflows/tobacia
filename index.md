---
layout: home
title: "Home"
---

<div class="flex flex-col items-center justify-center text-center space-y-6 mt-8">
  <div class="home-headshot">
    <img src="{{ site.baseurl }}/Andres%20Tobacia%20Professional%20Headshot.jpg" alt="Andrés Tobacia" class="max-w-xs rounded-full shadow-lg cursor-pointer">
  </div>
  <h1 class="text-3xl font-bold text-blue-300">Andrés Tobacia</h1>
  <h2 class="text-lg font-medium text-gray-200 typewriter">
    Industrial Engineering & Supply Chain Executive | AI-Powered Manufacturing & Space Exploration
  </h2>

  <div class="flex flex-wrap justify-center gap-4 mt-4">
    [Contact Me]({{ site.baseurl }}/contact.html){: .btn }
    [LinkedIn](https://www.linkedin.com/in/jatobacia/){: .btn }
    [📄 AI Resume Teaser (English)]({{ site.baseurl }}/Andres_Tobacia_AI_Resume_EN.pdf){: .btn }
    [📄 Resumen Ejecutivo IA (Español)]({{ site.baseurl }}/Andres_Tobacia_AI_Resume_ES.pdf){: .btn }
    [📅 Book Me to Speak](https://calendly.com/yotangoflow){: .btn }
  </div>
</div>

<!-- Blog Banner -->
<div class="bg-gray-800 text-center p-4 mt-8 rounded-lg shadow-lg max-w-2xl mx-auto">
  <p class="text-blue-300 font-semibold">
    🧠 New Blog on Substack – Check out AI, Space, and Supply Chain insights!
  </p>
  <a href="{{ site.baseurl }}/blog.html" class="inline-block mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
    Visit Blog / Ir al Blog
  </a>
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
      setTimeout(type, 50); // typing speed
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

