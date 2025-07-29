---
layout: page
title: "Contact"
---

## Contact Me 📬

For speaking engagements, recruitment opportunities, or to request my full resume, please use the form below or reach out via LinkedIn.

<div id="form-container">
  <form
    id="contact-form"
    action="https://formspree.io/f/xpwlrqpy"
    method="POST"
    class="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
  >
    <div>
      <label class="block text-sm font-semibold mb-1">Your Name:</label>
      <input type="text" name="name" required class="w-full p-2 rounded bg-gray-900 text-white border border-gray-600">
    </div>

    <div>
      <label class="block text-sm font-semibold mb-1">Your Email:</label>
      <input type="email" name="email" required class="w-full p-2 rounded bg-gray-900 text-white border border-gray-600">
    </div>

    <div>
      <label class="block text-sm font-semibold mb-1">Subject:</label>
      <select name="subject" class="w-full p-2 rounded bg-gray-900 text-white border border-gray-600">
        <option value="Recruiter">Recruiter</option>
        <option value="Speaking">Speaking Engagement</option>
        <option value="General">General Inquiry</option>
      </select>
    </div>

    <div>
      <label class="block text-sm font-semibold mb-1">Your Message:</label>
      <textarea name="message" required class="w-full p-2 rounded bg-gray-900 text-white border border-gray-600"></textarea>
    </div>

    <!-- reCAPTCHA -->
    <div class="g-recaptcha" data-sitekey="6LdILpErAAAAAC6binGsWsK2QVyP5rRbQxo-TiKn"></div>

    <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      Send Message
    </button>
  </form>
</div>

<div id="thank-you" class="hidden text-center bg-green-800 text-white p-4 rounded-lg mt-6 max-w-xl mx-auto">
  ✅ Thank you! Your message has been sent successfully.
</div>

---

### 📄 Download AI Resume Teasers
[AI Resume Teaser (English)](Andres_Tobacia_AI_Resume_EN.pdf){: .btn }  
[Resumen Ejecutivo IA (Español)](Andres_Tobacia_AI_Resume_ES.pdf){: .btn }

<p class="text-sm mt-2">Full resume available upon request.</p>

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
      alert('There was an error sending your message. Please try again.');
    }
  }).catch(error => {
    alert('There was an error sending your message. Please try again.');
  });
});
</script>

