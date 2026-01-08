// Main JavaScript for Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initAudioPlayer();
    initMayaChat();
    loadPortfolioContent();
    initScrollAnimations();
    initTestimonialSlider();
    initContactForm();
});

// Navigation
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link
        let current = '';
        const sections = document.querySelectorAll('.section, .hero');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        });
    });

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Audio Player
function initAudioPlayer() {
    const audioToggle = document.getElementById('audioToggle');
    const backgroundMusic = document.getElementById('backgroundMusic');
    let isPlaying = false;

    audioToggle.addEventListener('click', function() {
        if (isPlaying) {
            backgroundMusic.pause();
            audioToggle.classList.remove('playing');
            audioToggle.innerHTML = '<i class="fas fa-music"></i>';
        } else {
            backgroundMusic.play().catch(err => {
                // Silently handle autoplay restrictions - user can manually enable
                audioToggle.innerHTML = '<i class="fas fa-music"></i>';
            });
            audioToggle.classList.add('playing');
            audioToggle.innerHTML = '<i class="fas fa-pause"></i>';
        }
        isPlaying = !isPlaying;
    });

    // Handle audio events
    backgroundMusic.addEventListener('play', function() {
        isPlaying = true;
        audioToggle.classList.add('playing');
    });

    backgroundMusic.addEventListener('pause', function() {
        isPlaying = false;
        audioToggle.classList.remove('playing');
    });
}

// MAYA AI Chat
function initMayaChat() {
    const mayaTrigger = document.getElementById('mayaTrigger');
    const mayaChat = document.getElementById('mayaChat');
    const mayaClose = document.getElementById('mayaClose');
    const mayaInputField = document.getElementById('mayaInputField');
    const mayaSend = document.getElementById('mayaSend');
    const mayaMessages = document.getElementById('mayaMessages');
    const suggestionBtns = document.querySelectorAll('.suggestion-btn');

    // Toggle chat
    mayaTrigger.addEventListener('click', function() {
        mayaChat.classList.toggle('active');
    });

    mayaClose.addEventListener('click', function() {
        mayaChat.classList.remove('active');
    });

    // Send message
    function sendMessage() {
        const message = mayaInputField.value.trim();
        if (message) {
            // Add user message
            addMessage('user', message);
            mayaInputField.value = '';

            // Get AI response
            setTimeout(() => {
                const response = maya.generateResponse(message);
                addMessage('bot', response);
            }, 500);
        }
    }

    mayaSend.addEventListener('click', sendMessage);

    mayaInputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Suggestion buttons
    suggestionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            mayaInputField.value = question;
            sendMessage();
        });
    });

    // Add message to chat
    function addMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `maya-message maya-${sender}`;
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = sender === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
        
        const content = document.createElement('div');
        content.className = 'message-content';
        
        const p = document.createElement('p');
        p.textContent = text;
        content.appendChild(p);
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);
        
        mayaMessages.appendChild(messageDiv);
        mayaMessages.scrollTop = mayaMessages.scrollHeight;

        // Store in MAYA history
        maya.addToHistory(sender, text);
    }
}

// Load Portfolio Content
function loadPortfolioContent() {
    loadProjects();
    loadSkills();
    loadAchievements();
    loadTestimonials();
}

function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    portfolioData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        
        projectCard.innerHTML = `
            <div class="project-icon">
                <i class="${project.icon}"></i>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" class="project-link" target="_blank">
                    <i class="fab fa-github"></i> GitHub
                </a>
                ${project.demo !== '#' ? `<a href="${project.demo}" class="project-link" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Demo
                </a>` : ''}
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

function loadSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    
    portfolioData.skills.forEach(category => {
        const skillCategory = document.createElement('div');
        skillCategory.className = 'skill-category fade-in';
        
        const skillsHTML = category.skills.map(skill => `
            <div class="skill-item">
                <div class="skill-name">
                    <span>${skill.name}</span>
                    <span>${skill.level}%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-progress" style="width: 0%;" data-width="${skill.level}%"></div>
                </div>
            </div>
        `).join('');
        
        skillCategory.innerHTML = `
            <h3>${category.category}</h3>
            ${skillsHTML}
        `;
        
        skillsGrid.appendChild(skillCategory);
    });

    // Animate skill bars when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    setTimeout(() => {
                        bar.style.width = bar.getAttribute('data-width');
                    }, 200);
                });
                observer.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.skill-category').forEach(category => {
        observer.observe(category);
    });
}

function loadAchievements() {
    const achievementsTimeline = document.getElementById('achievementsTimeline');
    
    portfolioData.achievements.forEach((achievement, index) => {
        const achievementItem = document.createElement('div');
        achievementItem.className = 'achievement-item fade-in';
        
        achievementItem.innerHTML = `
            <div class="achievement-content">
                <div class="achievement-date">${achievement.date}</div>
                <h3>${achievement.title}</h3>
                <p>${achievement.description}</p>
            </div>
            <div class="achievement-icon">
                <i class="${achievement.icon}"></i>
            </div>
        `;
        
        achievementsTimeline.appendChild(achievementItem);
    });
}

function loadTestimonials() {
    const testimonialsSlider = document.getElementById('testimonialsSlider');
    
    portfolioData.testimonials.forEach((testimonial, index) => {
        const testimonialItem = document.createElement('div');
        testimonialItem.className = `testimonial-item ${index === 0 ? 'active' : ''}`;
        
        testimonialItem.innerHTML = `
            <div class="testimonial-text">
                <i class="fas fa-quote-left" style="margin-right: 10px; color: var(--accent-color);"></i>
                ${testimonial.text}
                <i class="fas fa-quote-right" style="margin-left: 10px; color: var(--accent-color);"></i>
            </div>
            <div class="testimonial-author">
                <div class="author-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.position}</p>
                </div>
            </div>
        `;
        
        testimonialsSlider.appendChild(testimonialItem);
    });

    // Add navigation dots
    const navDiv = document.createElement('div');
    navDiv.className = 'testimonial-nav';
    
    portfolioData.testimonials.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = `testimonial-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('data-index', index);
        navDiv.appendChild(dot);
    });
    
    testimonialsSlider.appendChild(navDiv);
}

// Testimonial Slider
function initTestimonialSlider() {
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds

    function showSlide(index) {
        const items = document.querySelectorAll('.testimonial-item');
        const dots = document.querySelectorAll('.testimonial-dot');
        
        items.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        if (items[index]) {
            items[index].classList.add('active');
            dots[index].classList.add('active');
        }
    }

    function nextSlide() {
        const items = document.querySelectorAll('.testimonial-item');
        currentSlide = (currentSlide + 1) % items.length;
        showSlide(currentSlide);
    }

    // Auto-advance slides
    setInterval(nextSlide, slideInterval);

    // Dot navigation
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('testimonial-dot')) {
            currentSlide = parseInt(e.target.getAttribute('data-index'));
            showSlide(currentSlide);
        }
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        alert('Thank you for your message! Utsav will get back to you soon.');
        contactForm.reset();
        
        // In a real application, you would send this to a backend API
        // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
    });
}

// Utility function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
