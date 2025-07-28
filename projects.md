---
layout: page
title: "Projects & Initiatives"
---

## Projects & Initiatives

### Blue Origin – Space Manufacturing & Supply Chain Optimization
<p>Supporting over <strong>12 successful suborbital flight missions</strong> and contributing to the introduction of <strong>40+ new astronauts</strong> to space. Driving supply chain excellence for crew capsule subsystems and critical mission components.</p>

<div class="gallery">
  <div class="gallery-item">
    <img src="{{ site.baseurl }}/8_NS22-Capsule-Descent-1.jpg" alt="NS22 Capsule Descent">
    <p>NS-22 Crew Capsule Recovery & Supply Chain Integration</p>
  </div>
  <div class="gallery-item">
    <img src="{{ site.baseurl }}/NS22_EarthView (1).jpg" alt="Earth View NS22">
    <p>NS-22 Earth View from Capsule Operations</p>
  </div>
  <div class="gallery-item">
    <img src="{{ site.baseurl }}/ns25-egress-ed-dwight_gallery.jpg" alt="Ed Dwight NS25 Egress">
    <p><strong>NS-25 Historic Flight:</strong> Supported supply chain and logistics for the mission carrying Ed Dwight, the first African American astronaut candidate, fulfilling a decades-long journey.</p>
  </div>
  <div class="gallery-item">
    <img src="{{ site.baseurl }}/ns26_capsule_touchdown_booster_background.jpg" alt="NS26 Capsule Touchdown">
    <p>NS-26 Capsule & Booster Recovery Operations</p>
  </div>
  <div class="gallery-item">
    <img src="{{ site.baseurl }}/ns-28-emily-calandrelli-(1).jpg" alt="Emily Calandrelli NS28">
    <p><strong>NS-28:</strong> Mission logistics support for Emily Calandrelli (“The Space Gal”) inspiring a new generation of engineers and explorers.</p>
  </div>
  <div class="gallery-item">
    <img src="{{ site.baseurl }}/ns-31-katy-perry.jpg" alt="NS31 Katy Perry Mission">
    <p><strong>NS-31:</strong> Supported supply chain readiness for the high-visibility mission carrying Katy Perry and advancing public engagement in commercial spaceflight.</p>
  </div>
  <div class="gallery-item">
    <img src="{{ site.baseurl }}/blue-origin-new-glenn-ng-1-liftoff-closeup-vertical.jpg" alt="New Glenn Rocket Launch">
    <p>New Glenn Launch Vehicle Supply Chain & Procurement</p>
  </div>
</div>

---

### Space United – Sports in Space
<p>Advisor for <a href="https://www.spaceunited.com" target="_blank"><strong>Space United</strong></a>, an initiative dedicated to taking sports beyond Earth, starting with the beautiful game of soccer.</p>

<div class="gallery-large">
  <div class="gallery-item">
    <a href="{{ site.baseurl }}/Space%20United%20team.png" target="_blank">
      <img src="{{ site.baseurl }}/Space%20United%20team.png" alt="Space United Team">
    </a>
    <p>Space United Team</p>
  </div>
  <div class="gallery-item">
    <a href="{{ site.baseurl }}/Space%20United%20with%20Atletico%20Nacional.png" target="_blank">
      <img src="{{ site.baseurl }}/Space%20United%20with%20Atletico%20Nacional.png" alt="Space United with Atletico Nacional">
    </a>
    <p>Outreach Collaboration with Atlético Nacional</p>
  </div>
</div>

---

### Anything Flows – Startup & Branding
<p>Founded and scaled <strong>Anything Flows</strong>, an industrial automation and valve solutions company, holding multiple trademarks including the creative <strong>Vincent Van Flow</strong> branding.</p>

<div class="gallery">
  <div class="gallery-item">
    <img src="{{ site.baseurl }}/Anything%20Flows.jpg" alt="Anything Flows Logo">
    <p>Anything Flows – Valve & Control Solutions Startup</p>
  </div>
  <div class="gallery-item">
    <img src="{{ site.baseurl }}/Anything%20Flows%20Valve%20Actuators.jpg" alt="Valve Actuators">
    <p>Industrial Valve Actuators – Process Automation</p>
  </div>
  <div class="gallery-item">
    <img src="{{ site.baseurl }}/Andres%20Tobacia%20with%20Ball%20Valves.jpg" alt="Andres delivering Natural Gas Pipeline Valves">
    <p>Andres Tobacia delivering Natural Gas Pipeline Valves – Engineering Solutions</p>
  </div>
  <div class="gallery-item">
    <img src="{{ site.baseurl }}/Vincent%20Van%20Flow.jpg" alt="Vincent Van Flow">
    <p>Vincent Van Flow – Trademarked Creative Branding</p>
  </div>
</div>

---

### STEM & AI Outreach
<p>Educational outreach and content inspiring future engineers and space enthusiasts.</p>

<div class="video-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/4tuNPfHYMjE" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

<p><strong>Over 17,000+ views on YouTube.</strong></p>

_Resume available upon request._

---

<style>
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
}
.gallery-item {
  flex: 1 1 45%;
  text-align: center;
}
.gallery-item img {
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0,255,255,0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}
.gallery-item img:hover {
  transform: scale(1.03);
  box-shadow: 0 0 20px rgba(255,0,255,0.6);
}
.gallery-large img {
  width: 85%;
  margin: auto;
  display: block;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0,255,255,0.3);
  margin-bottom: 20px;
  cursor: pointer;
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
document.querySelectorAll('.gallery img, .gallery-large img').forEach(img => {
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
