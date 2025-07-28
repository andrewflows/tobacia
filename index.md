---
layout: home
title: "Home"
---

<div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap;justify-content:center; margin-bottom:30px;">
  <div class="home-headshot">
    <img src="{{ site.baseurl }}/Andres%20Tobacia%20Professional%20Headshot.jpg" alt="Andrés Tobacia" style="max-width:220px;border-radius:50%;box-shadow:0 0 18px rgba(0,255,255,0.4);cursor:pointer;">
  </div>
  <div>
    # Andrés Tobacia  
    **Industrial Engineering & Supply Chain Executive | AI-Powered Manufacturing & Space Exploration**
  </div>
</div>

[Contact Me](contact.html){: .btn }  
[LinkedIn](https://www.linkedin.com/in/jatobacia/){: .btn }  

[📄 AI Resume Teaser (English)](assets/resume/Andres_Tobacia_AI_Resume_EN.pdf){: .btn }  
[📄 Resumen Ejecutivo IA (Español)](assets/resume/Andres_Tobacia_AI_Resume_Es.pdf){: .btn }

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

