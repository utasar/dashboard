// Portfolio Data for MAYA AI Assistant
const portfolioData = {
    personal: {
        name: "Utsav Acharya",
        title: "Full Stack Developer",
        tagline: "Technology First Scholar | Innovator",
        email: "utsav.acharya@example.com",
        phone: "+977 98XXXXXXXX",
        location: "Kathmandu, Nepal",
        bio: "I'm a passionate full-stack developer and Technology First Scholar with a strong foundation in creating innovative solutions that make a difference. My journey in technology has been driven by a desire to solve real-world problems through elegant code and intuitive design.",
        github: "https://github.com/utasar",
        linkedin: "https://linkedin.com/in/utsav-acharya",
        twitter: "https://twitter.com/utsav_acharya"
    },
    
    projects: [
        {
            id: 1,
            title: "Hospital Management System",
            description: "A comprehensive healthcare management solution that streamlines patient records, appointments, billing, and staff management. Built with modern web technologies to improve hospital efficiency.",
            icon: "fas fa-hospital",
            tags: ["React", "Node.js", "MongoDB", "Express", "REST API"],
            github: "https://github.com/utasar/hospital-management",
            demo: "#",
            highlights: [
                "Patient registration and record management",
                "Appointment scheduling system",
                "Billing and payment integration",
                "Role-based access control",
                "Real-time notifications"
            ]
        },
        {
            id: 2,
            title: "Notes App",
            description: "A sleek and intuitive note-taking application with markdown support, tag organization, and cloud synchronization. Perfect for students and professionals.",
            icon: "fas fa-sticky-note",
            tags: ["Vue.js", "Firebase", "Markdown", "PWA"],
            github: "https://github.com/utasar/notes-app",
            demo: "#",
            highlights: [
                "Rich markdown editor",
                "Cloud synchronization",
                "Tag-based organization",
                "Offline support (PWA)",
                "Dark mode support"
            ]
        },
        {
            id: 3,
            title: "E-Commerce Platform",
            description: "A full-featured online shopping platform with product catalog, shopping cart, payment integration, and order tracking.",
            icon: "fas fa-shopping-cart",
            tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
            github: "https://github.com/utasar/ecommerce",
            demo: "#",
            highlights: [
                "Product catalog with search and filters",
                "Secure payment processing",
                "Order management system",
                "Admin dashboard",
                "Email notifications"
            ]
        },
        {
            id: 4,
            title: "AI Task Manager",
            description: "An intelligent task management system that uses AI to prioritize tasks, suggest schedules, and boost productivity.",
            icon: "fas fa-tasks",
            tags: ["Python", "TensorFlow", "Flask", "React"],
            github: "https://github.com/utasar/ai-task-manager",
            demo: "#",
            highlights: [
                "AI-powered task prioritization",
                "Smart scheduling suggestions",
                "Productivity analytics",
                "Collaboration features",
                "Integration with calendar apps"
            ]
        }
    ],
    
    skills: [
        {
            category: "Frontend Development",
            skills: [
                { name: "React.js", level: 90 },
                { name: "Vue.js", level: 85 },
                { name: "Next.js", level: 80 },
                { name: "HTML/CSS", level: 95 },
                { name: "JavaScript/TypeScript", level: 90 },
                { name: "Tailwind CSS", level: 85 }
            ]
        },
        {
            category: "Backend Development",
            skills: [
                { name: "Node.js", level: 88 },
                { name: "Express.js", level: 85 },
                { name: "Python/Flask", level: 80 },
                { name: "RESTful APIs", level: 90 },
                { name: "GraphQL", level: 75 }
            ]
        },
        {
            category: "Database & Cloud",
            skills: [
                { name: "MongoDB", level: 85 },
                { name: "PostgreSQL", level: 80 },
                { name: "Firebase", level: 82 },
                { name: "AWS", level: 70 },
                { name: "Docker", level: 75 }
            ]
        },
        {
            category: "Tools & Others",
            skills: [
                { name: "Git/GitHub", level: 90 },
                { name: "VS Code", level: 95 },
                { name: "Figma", level: 75 },
                { name: "CI/CD", level: 70 },
                { name: "Agile/Scrum", level: 80 }
            ]
        }
    ],
    
    achievements: [
        {
            id: 1,
            date: "2024",
            title: "Technology First Scholar",
            description: "Awarded prestigious Technology First Scholarship for outstanding academic performance and innovative project contributions.",
            icon: "fas fa-trophy"
        },
        {
            id: 2,
            date: "2023",
            title: "Best Capstone Project",
            description: "Recognized for developing the most innovative capstone project - Hospital Management System.",
            icon: "fas fa-award"
        },
        {
            id: 3,
            date: "2023",
            title: "Hackathon Winner",
            description: "First place at National Tech Hackathon for creating an AI-powered solution for healthcare accessibility.",
            icon: "fas fa-medal"
        },
        {
            id: 4,
            date: "2022",
            title: "Open Source Contributor",
            description: "Active contributor to various open-source projects with over 500+ contributions.",
            icon: "fas fa-code-branch"
        },
        {
            id: 5,
            date: "2022",
            title: "Dean's List",
            description: "Achieved Dean's List honors for maintaining excellent academic performance.",
            icon: "fas fa-star"
        }
    ],
    
    testimonials: [
        {
            id: 1,
            name: "Dr. Rajesh Sharma",
            position: "Professor, Computer Science",
            image: "assets/images/testimonial1.jpg",
            text: "Utsav is an exceptional student with a rare combination of technical skills and creative problem-solving abilities. His Hospital Management System project demonstrated his ability to build complex, real-world solutions."
        },
        {
            id: 2,
            name: "Priya Thapa",
            position: "Tech Lead, InnovateNP",
            image: "assets/images/testimonial2.jpg",
            text: "Working with Utsav has been a pleasure. He's not just a talented developer but also a great team player who consistently delivers high-quality work on time."
        },
        {
            id: 3,
            name: "Arpan Bhandari",
            position: "Full Stack Developer",
            image: "assets/images/testimonial3.jpg",
            text: "Utsav's dedication to learning and growth is inspiring. His portfolio showcases his versatility and mastery of modern web technologies. A rising star in Nepal's tech community."
        }
    ],
    
    // AI Knowledge Base for MAYA
    knowledgeBase: {
        greeting: [
            "Hello! I'm MAYA, Utsav's AI assistant.",
            "Hi there! How can I help you learn about Utsav?",
            "Welcome! I'm here to answer your questions about Utsav Acharya."
        ],
        
        about: [
            "Utsav Acharya is a passionate full-stack developer and Technology First Scholar from Kathmandu, Nepal. He specializes in building innovative web applications that solve real-world problems.",
            "He's known for his Hospital Management System and Notes App projects, which demonstrate his ability to create comprehensive, user-friendly solutions.",
            "With expertise in both frontend and backend technologies, Utsav brings a holistic approach to software development."
        ],
        
        projects: [
            "Utsav has developed several impressive projects including a Hospital Management System, Notes App, E-Commerce Platform, and an AI Task Manager.",
            "His Hospital Management System is a comprehensive healthcare solution that streamlines patient records, appointments, and billing. It's built with React, Node.js, and MongoDB.",
            "The Notes App is a sleek application with markdown support and cloud synchronization, built using Vue.js and Firebase.",
            "He's also created an E-Commerce Platform with Next.js and an AI Task Manager using Python and TensorFlow."
        ],
        
        skills: [
            "Utsav is proficient in modern web technologies including React, Vue.js, Next.js, Node.js, and Python.",
            "His frontend skills include React.js (90%), Vue.js (85%), and Next.js (80%), along with strong HTML/CSS and JavaScript/TypeScript expertise.",
            "On the backend, he works with Node.js, Express.js, Python/Flask, and has experience building RESTful APIs and GraphQL endpoints.",
            "He's also skilled in database technologies like MongoDB and PostgreSQL, and cloud platforms like Firebase and AWS."
        ],
        
        achievements: [
            "Utsav is a Technology First Scholar, awarded for outstanding academic performance and innovative contributions.",
            "He won Best Capstone Project for his Hospital Management System and first place at the National Tech Hackathon.",
            "He's an active open-source contributor with over 500+ contributions and has been on the Dean's List for academic excellence.",
            "His achievements span both academic excellence and practical project development."
        ],
        
        education: [
            "Utsav is a Technology First Scholar, which recognizes exceptional students in technology fields.",
            "He has demonstrated consistent academic excellence, earning Dean's List honors.",
            "His education combines theoretical knowledge with practical application through projects like the Hospital Management System."
        ],
        
        contact: [
            "You can reach Utsav via email at utsav.acharya@example.com",
            "He's active on GitHub at github.com/utasar and LinkedIn.",
            "He's based in Kathmandu, Nepal and is open to collaboration and opportunities."
        ],
        
        technology: [
            "Utsav works with the MERN stack (MongoDB, Express, React, Node.js) extensively.",
            "He also has experience with Vue.js, Next.js, Python, Flask, and TensorFlow for AI projects.",
            "His tech stack includes modern tools like Tailwind CSS, Firebase, PostgreSQL, and Docker."
        ]
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
