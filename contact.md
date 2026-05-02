---
layout: page
title: "Contact"
---

## Contact Me 📬

For recruitment opportunities or inquiries, please use the form below or reach out via <a href="https://www.linkedin.com/in/jatobacia/" target="_blank" class="text-blue-400 hover:underline">LinkedIn</a>.

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

    <div class="g-recaptcha" data-sitekey="6LfIw7ArAAAAADropvC062ZsO33pndf3M3latKrC"></div>

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

<p class="mb-2">Available for recruiters and event organizers.</p>

<div class="flex flex-col sm:flex-row gap-3 justify-center mt-2">
  <a href="/Andres_Tobacia_AI_Resume_EN.pdf" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center">AI Resume Teaser</a>
</div>

<p class="text-sm mt-2 text-center"><a href="https://www.linkedin.com/in/jatobacia/" target="_blank" class="text-blue-400 hover:underline">Connect on LinkedIn</a></p>

---

### 🌐 Connect With Me

<div class="flex flex-wrap justify-center gap-3 mt-4">
  <a href="https://www.linkedin.com/in/jatobacia/" target="_blank" rel="noopener" style="background-color: #0A66C2;" class="hover:opacity-90 text-white font-semibold py-2 px-4 rounded text-sm">LinkedIn</a>
  <a href="https://x.com/andrestobacia" target="_blank" rel="noopener" style="background-color: #000000;" class="hover:opacity-90 text-white font-semibold py-2 px-4 rounded text-sm border border-gray-700">X (Twitter)</a>
  <a href="https://www.instagram.com/andrestobacia" target="_blank" rel="noopener" style="background-image: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);" class="hover:opacity-90 text-white font-semibold py-2 px-4 rounded text-sm">Instagram</a>
  <a href="https://www.facebook.com/andrestobacia" target="_blank" rel="noopener" style="background-color: #1877F2;" class="hover:opacity-90 text-white font-semibold py-2 px-4 rounded text-sm">Facebook</a>
  <a href="https://www.threads.net/@andrestobacia" target="_blank" rel="noopener" style="background-color: #101010;" class="hover:opacity-90 text-white font-semibold py-2 px-4 rounded text-sm border border-gray-600">Threads</a>
  <a href="https://www.youtube.com/@andrestobacia" target="_blank" rel="noopener" style="background-color: #FF0000;" class="hover:opacity-90 text-white font-semibold py-2 px-4 rounded text-sm">YouTube</a>
  <a href="https://njump.me/npub1z4t9eperpgjagpplh0rqd6dhsa7nx95j6qp6p9ekprpqaycsaalqpu8r5w" target="_blank" rel="noopener" style="background-color: #7B2CBF;" class="hover:opacity-90 text-white font-semibold py-2 px-4 rounded text-sm">Nostr</a>
</div>

<p class="text-xs text-center text-gray-400 mt-3">Handle: <code class="text-blue-300">andrestobacia</code> on most platforms · Nostr npub: <span class="font-mono break-all text-gray-500">npub1z4t9eperpgjagpplh0rqd6dhsa7nx95j6qp6p9ekprpqaycsaalqpu8r5w</span></p>

<script src="https://www.google.com/recaptcha/api.js" async defer></script>

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


