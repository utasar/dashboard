// MAYA - AI Assistant for Portfolio
class MayaAI {
    constructor(data) {
        this.data = data;
        this.conversationHistory = [];
    }

    // Analyze user input and generate appropriate response
    generateResponse(userInput) {
        const input = userInput.toLowerCase().trim();
        
        // Check for greetings
        if (this.isGreeting(input)) {
            return this.getRandomResponse(this.data.knowledgeBase.greeting);
        }
        
        // Check for questions about projects
        if (this.isAboutProjects(input)) {
            return this.getProjectsResponse(input);
        }
        
        // Check for questions about skills
        if (this.isAboutSkills(input)) {
            return this.getSkillsResponse(input);
        }
        
        // Check for questions about achievements
        if (this.isAboutAchievements(input)) {
            return this.getAchievementsResponse(input);
        }
        
        // Check for questions about education
        if (this.isAboutEducation(input)) {
            return this.getRandomResponse(this.data.knowledgeBase.education);
        }
        
        // Check for questions about contact
        if (this.isAboutContact(input)) {
            return this.getContactResponse();
        }
        
        // Check for general about questions
        if (this.isAboutGeneral(input)) {
            return this.getRandomResponse(this.data.knowledgeBase.about);
        }
        
        // Check for specific project queries
        const specificProject = this.getSpecificProject(input);
        if (specificProject) {
            return this.getSpecificProjectResponse(specificProject);
        }
        
        // Default response
        return this.getDefaultResponse(input);
    }

    isGreeting(input) {
        const greetings = ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'];
        return greetings.some(greeting => input.includes(greeting));
    }

    isAboutProjects(input) {
        const keywords = ['project', 'work', 'built', 'created', 'developed', 'portfolio', 'hospital', 'notes', 'app'];
        return keywords.some(keyword => input.includes(keyword));
    }

    isAboutSkills(input) {
        const keywords = ['skill', 'technology', 'tech', 'stack', 'programming', 'language', 'framework', 'tool', 'expertise', 'proficient', 'know'];
        return keywords.some(keyword => input.includes(keyword));
    }

    isAboutAchievements(input) {
        const keywords = ['achievement', 'award', 'recognition', 'accomplish', 'honor', 'prize', 'hackathon', 'scholarship', 'scholar'];
        return keywords.some(keyword => input.includes(keyword));
    }

    isAboutEducation(input) {
        const keywords = ['education', 'study', 'degree', 'university', 'college', 'academic', 'student', 'scholar'];
        return keywords.some(keyword => input.includes(keyword));
    }

    isAboutContact(input) {
        const keywords = ['contact', 'reach', 'email', 'phone', 'call', 'message', 'connect', 'hire', 'location', 'where'];
        return keywords.some(keyword => input.includes(keyword));
    }

    isAboutGeneral(input) {
        const keywords = ['who', 'about', 'tell me', 'introduce', 'background'];
        return keywords.some(keyword => input.includes(keyword));
    }

    getSpecificProject(input) {
        const projects = this.data.projects;
        for (let project of projects) {
            if (input.includes(project.title.toLowerCase()) || 
                project.tags.some(tag => input.includes(tag.toLowerCase()))) {
                return project;
            }
        }
        return null;
    }

    getProjectsResponse(input) {
        const responses = this.data.knowledgeBase.projects;
        
        // Check for specific project mentions
        if (input.includes('hospital')) {
            const hospital = this.data.projects.find(p => p.title.includes('Hospital'));
            return `${responses[1]} The system includes features like patient registration, appointment scheduling, billing integration, role-based access control, and real-time notifications. It's built with React, Node.js, MongoDB, and Express.`;
        }
        
        if (input.includes('notes')) {
            const notes = this.data.projects.find(p => p.title.includes('Notes'));
            return `${responses[2]} Key features include a rich markdown editor, cloud synchronization, tag-based organization, offline support as a PWA, and dark mode support.`;
        }
        
        // Return general project response
        return this.getRandomResponse(responses);
    }

    getSkillsResponse(input) {
        const responses = this.data.knowledgeBase.skills;
        
        // Check for specific technology mentions
        if (input.includes('frontend') || input.includes('front-end') || input.includes('react') || input.includes('vue')) {
            return responses[1];
        }
        
        if (input.includes('backend') || input.includes('back-end') || input.includes('node') || input.includes('python')) {
            return responses[2];
        }
        
        if (input.includes('database') || input.includes('cloud') || input.includes('mongodb') || input.includes('aws')) {
            return responses[3];
        }
        
        // Return general skills response
        return this.getRandomResponse(responses);
    }

    getAchievementsResponse(input) {
        const responses = this.data.knowledgeBase.achievements;
        
        if (input.includes('scholar') || input.includes('scholarship')) {
            return responses[0];
        }
        
        if (input.includes('hackathon') || input.includes('capstone')) {
            return responses[1];
        }
        
        if (input.includes('open source') || input.includes('dean')) {
            return responses[2];
        }
        
        return this.getRandomResponse(responses);
    }

    getContactResponse() {
        return `You can reach Utsav via email at ${this.data.personal.email}. He's also active on GitHub (${this.data.personal.github}) and LinkedIn. He's based in ${this.data.personal.location} and is always open to collaboration and new opportunities!`;
    }

    getSpecificProjectResponse(project) {
        let response = `${project.title}: ${project.description}\n\n`;
        response += `Technologies used: ${project.tags.join(', ')}\n\n`;
        response += `Key highlights:\n`;
        project.highlights.forEach((highlight, index) => {
            response += `${index + 1}. ${highlight}\n`;
        });
        return response;
    }

    getDefaultResponse(input) {
        const suggestions = [
            "I can tell you about Utsav's projects, skills, achievements, and background. What would you like to know?",
            "I'm here to help! You can ask me about his Hospital Management System, Notes App, technical skills, or academic achievements.",
            "Would you like to know more about Utsav's projects, skills, achievements, or how to contact him?",
            "I can provide information about Utsav's work, technical expertise, and accomplishments. What interests you?"
        ];
        
        return this.getRandomResponse(suggestions);
    }

    getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // Add message to conversation history
    addToHistory(sender, message) {
        this.conversationHistory.push({
            sender: sender,
            message: message,
            timestamp: new Date()
        });
    }

    // Get conversation history
    getHistory() {
        return this.conversationHistory;
    }

    // Clear conversation history
    clearHistory() {
        this.conversationHistory = [];
    }
}

// Initialize MAYA
let maya;
if (typeof portfolioData !== 'undefined') {
    maya = new MayaAI(portfolioData);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MayaAI;
}
