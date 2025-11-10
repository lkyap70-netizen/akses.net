// Fungsi untuk menangani form kontak (contoh sederhana, kirim ke console)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulasi pengiriman (ganti dengan API email seperti EmailJS jika perlu)
    console.log('Pesan dari:', name, email, message);
    alert('Terima kasih! Pesan Anda telah dikirim.');
    
    // Reset form
    this.reset();
});

// Smooth scroll untuk navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});