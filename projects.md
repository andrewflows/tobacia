---
layout: page
title: "Projects & Initiatives"
---

## Projects & Initiatives

### Blue Origin – Space Manufacturing & Supply Chain Optimization
Supporting over **12 successful suborbital missions**, **1 orbital mission**, and multiple payload missions. Contributed to the introduction of **40+ new astronauts** to space while driving supply chain excellence for critical mission components.

<div class="gallery">
  <div class="gallery-item">
    <img src="{{ site.baseurl }}/AI_Supply_Chain_Infographic.png" alt="AI Supply Chain Infographic">
    <p>AI-Powered Supply Chain Optimizing Space Manufacturing</p>
  </div>
  <div class="gallery-item">
    <img src="{{ site.baseurl }}/8_NS22-Capsule-Descent-1.jpg" alt="NS22 Capsule Descent">
    <p>NS-22 Crew Capsule Recovery & Supply Chain Integration</p>
  </div>
  <div class="gallery-item">
    <img src="{{ site.baseurl }}/NS22_EarthView (1).jpg" alt="Earth View NS22">
    <p>NS-22 Earth View from Capsule Operations</p>
  </div>
  <!-- Remaining Blue Origin gallery items... -->
</div>

---

### Space United – Sports in Space
Advisor for <a href="https://www.spaceunited.com" target="_blank"><strong>Space United</strong></a>, an initiative dedicated to taking sports beyond Earth, starting with the beautiful game of soccer.

<div class="gallery">
  <div class="gallery-item">
    <img src="{{ site.baseurl }}/Space%20United%20team.png" alt="Space United Team">
    <p>Space United Team</p>
  </div>
  <div class="gallery-item">
    <img src="{{ site.baseurl }}/Space%20United%20with%20Atletico%20Nacional.png" alt="Space United with Atletico Nacional">
    <p>Outreach Collaboration with Atlético Nacional</p>
  </div>
</div>

<!-- Anything Flows, STEM Outreach, and Humanitarian sections unchanged -->

<style>
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
  justify-content: center;
}
.gallery-item {
  flex: 1 1 300px;
  max-width: 400px;
  text-align: center;
  margin: 0 auto;
}
.gallery-item img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0,255,255,0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}
.gallery-item img:hover {
  transform: scale(1.03);
  box-shadow: 0 0 20px rgba(255,0,255,0.6);
}
.gallery-item p {
  margin-top: 8px;
  font-size: 0.95rem;
  color: #e5e5e5;
  line-height: 1.3;
}
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
document.querySelectorAll('.gallery img').forEach(img => {
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
