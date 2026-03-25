document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email.');
                return;
            }
            
            alert('Thank you for your message! We\'ll get back to you soon.');
            contactForm.reset();
        });
    }

    const exchangeForm = document.getElementById('exchangeForm');
    if (exchangeForm) {
        exchangeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const yourSkill = document.getElementById('yourSkill').value.trim();
            const wantSkill = document.getElementById('wantSkill').value.trim();
            const level = document.getElementById('level').value;
            
            if (!yourSkill || !wantSkill) {
                alert('Please enter both skills.');
                return;
            }
            
            const resultsDiv = document.getElementById('exchangeResults');
            resultsDiv.innerHTML = `
                <div class="row mt-4">
                    <div class="col-md-6 mb-3">
                        <div class="glass-card p-4 result-card">
                            <h5>Match Found!</h5>
                            <p><strong>You offer:</strong> ${yourSkill}</p>
                            <p><strong>You want:</strong> ${wantSkill} (${level})</p>
                            <button class="btn btn-neon">Connect Now</button>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <div class="glass-card p-4 result-card">
                            <h5>Potential Partner</h5>
                            <p>Alex • Level: Intermediate</p>
                            <p>Offers: ${wantSkill} • Wants: Advanced ${yourSkill}</p>
                            <img src="images/user1.jpg" alt="Alex" class="user-card img-fluid rounded-circle mb-2">
                            <button class="btn btn-neon">Send Message</button>
                        </div>
                    </div>
                </div>
            `;
            resultsDiv.scrollIntoView({ behavior: 'smooth' });
        });
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    const cards = document.querySelectorAll('.glass-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('animate__animated', 'animate__fadeInUp');
    });

    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        new bootstrap.Carousel(carousel, {
            interval: 4000,
            wrap: true
        });
    });
});

