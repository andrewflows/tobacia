---
layout: page
title: "Speaking / Conferencias"
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

[📅 Book Me to Speak](https://calendly.com/your-link){: .btn }

---

## Conferencias y Medios 🎤

Disponibles para conferencias, paneles y charlas de liderazgo sobre:

- Manufactura impulsada por IA y automatización de cadenas de suministro 🤖  
- Operaciones de exploración espacial e innovación industrial 🚀  
- Fútbol en el espacio y deportes como herramienta de inspiración ⚽🌌  
- Energía renovable y transiciones sostenibles ⚡🌱  
- Tecnología open-source para impacto humanitario 🌍  
- Estrategias de fertilidad e iniciativas de población 👶🌎  
- El futuro de la humanidad con IA e innovación ética 🤖🌍  

[📅 Reservar Conferencia](https://calendly.com/your-link){: .btn }

---

<div class="gallery-large">
  <div class="gallery-item">
    <img src="{{ site.baseurl }}/Tobacia%20Brothers.jpg" alt="Tobacia Brothers">
    <p><strong>The Tobacia Brothers</strong> – Engineering Leadership Across Space Exploration & Renewable Energy</p>
  </div>
</div>

### 🎥 Featured STEM Outreach
<div class="video-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/4tuNPfHYMjE" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

<p><strong>Over 17,000+ views on YouTube / Más de 17,000 vistas en YouTube.</strong></p>

<style>
.gallery-large {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin: 30px 0;
}
.gallery-large img {
  width: 85%;
  max-width: 500px;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0,255,255,0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}
.gallery-large img:hover {
  transform: scale(1.03);
  box-shadow: 0 0 20px rgba(255,0,255,0.6);
}
.gallery-item {
  text-align: center;
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
document.querySelectorAll('.gallery-large img').forEach(img => {
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


