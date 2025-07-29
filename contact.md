---
layout: page
title: "Contact"
---

## Contact Me 📬 / Contáctame 📬

For speaking engagements, recruitment opportunities, or to request my full resume, please use the form below or reach out via LinkedIn.  
Para conferencias, oportunidades de reclutamiento o para solicitar mi hoja de vida, por favor usa el formulario abajo o contáctame en LinkedIn.

<div id="form-container">
  <form
    id="contact-form"
    action="https://formspree.io/f/xpwlrqpy"
    method="POST"
    class="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
  >
    <div>
      <label class="block text-sm font-semibold mb-1">Your Name / Tu Nombre:</label>
      <input type="text" name="name" required class="w-full p-2 rounded bg-gray-900 text-white border border-gray-600">
    </div>

    <div>
      <label class="block text-sm font-semibold mb-1">Your Email / Tu Correo:</label>
      <input type="email" name="email" required class="w-full p-2 rounded bg-gray-900 text-white border border-gray-600">
    </div>

    <div>
      <label class="block text-sm font-semibold mb-1">Subject / Asunto:</label>
      <select name="subject" class="w-full p-2 rounded bg-gray-900 text-white border border-gray-600">
        <option value="Recruiter">Recruiter / Reclutador</option>
        <option value="Speaking">Speaking Engagement / Conferencia</option>
        <option value="General">General Inquiry / Consulta General</option>
      </select>
    </div>

    <div>
      <label class="block text-sm font-semibold mb-1">Your Message / Tu Mensaje:</label>
      <textarea name="message" required class="w-full p-2 rounded bg-gray-900 text-white border border-gray-600"></textarea>
    </div>

    <!-- reCAPTCHA -->
    <div class="g-recaptcha" data-sitekey="6LdILpErAAAAAC6binGsWsK2QVyP5rRbQxo-TiKn"></div>

    <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      Send Message / Enviar Mensaje
    </button>
  </form>
</div>

<div id="thank-you" class="hidden text-center bg-green-800 text-white p-4 rounded-lg mt-6 max-w-xl mx-auto">
  ✅ Thank you! Your message has been sent successfully.  
  ✅ ¡Gracias! Tu mensaje ha sido enviado con éxito.
</div>

---

### 📄 Download AI Resume Teasers / Descarga Resúmenes IA

<p class="mb-2">Available in English and Spanish for recruiters and event organizers.  
Disponibles en Inglés y Español para reclutadores y organizadores de eventos.</p>

<div class="flex flex-col sm:flex-row gap-3 justify-center mt-2">
  <a href="{{ site.baseurl }}/Andres_Tobacia_AI_Resume_EN.pdf" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center">AI Resume Teaser (English)</a>
  <a href="{{ site.baseurl }}/Andres_Tobacia_AI_Resume_ES.pdf" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center">Resumen Ejecutivo IA (Español)</a>
</div>

<p class="text-sm mt-2 text-center">Full resume available upon request. / Hoja de vida completa disponible a solicitud.</p>

<!-- Include reCAPTCHA script -->
<script src="https://www.google.com/recaptcha/api.js" async defer></script>

<!-- Confirmation Message Script -->
<script>
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = this;
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      document.getElementById('form-container').classList.add('hidden');
      document.getElementById('thank-you').classList.remove('hidden');
    } else {
      alert('There was an error sending your message. Please try again. / Hubo un error al enviar tu mensaje. Inténtalo de nuevo.');
    }
  }).catch(error => {
    alert('There was an error sending your message. Please try again. / Hubo un error al enviar tu mensaje. Inténtalo de nuevo.');
  });
});
</script>


