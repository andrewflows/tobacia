---
layout: page
title: "Speaking"
---

## Speaking & Media 🎤

Available for conferences, panels, and leadership talks on:

- AI-powered manufacturing and supply chain automation 🤖  
- Space exploration operations and industrial innovation 🚀  
- Soccer in space and sports as a tool for inspiration ⚽🌌  
- Renewable energy and sustainable transitions ⚡🌱  
- Open-source tech for humanitarian impact 🌍  
- Fertility strategies & population initiatives 👶🌎  
- The future of humanity with AI and ethical innovation 🤖🌍  

<div class="flex justify-center mt-4">
  <a href="https://calendly.com/yotangoflow" target="_blank" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
    📅 Book Me to Speak
  </a>
</div>

---

### Tobacia Brothers – Engineering Leadership

<div class="flex justify-center mt-4">
  <img src="/Tobacia%20Brothers.jpg" alt="Tobacia Brothers" class="w-72 sm:w-96 rounded-lg shadow-lg cursor-pointer">
</div>

<p class="text-center text-gray-200 mt-2">Engineering leadership across space exploration, renewable energy, and industrial systems.</p>

---

### 🎥 Featured STEM Outreach

<div class="video-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/4tuNPfHYMjE" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

<p class="text-center text-gray-200 mt-2"><strong>Over 17,000+ views on YouTube.</strong></p>

---

<style>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  margin: 20px 0;
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0,255,255,0.3);
}
</style>

<script>
document.querySelectorAll('img').forEach(img => {
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

