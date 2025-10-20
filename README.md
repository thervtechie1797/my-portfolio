Portfolio Website – Rohit Verma

A modern and responsive React + Tailwind CSS portfolio website showcasing projects, skills, and a contact form that sends messages directly via EmailJS. Designed for developers and professionals to present their work in a clean, interactive, and visually appealing way.

🌟 Features
1. Home

Hero section with gradient background and subtle animations

Introduction with name, profession, and call-to-action button linking to Projects

2. About

Personal summary with clean typography

Subtle animated background for visual appeal

Responsive layout with highlight on key skills

3. Projects

Dynamic project listing using a reusable ProjectCard component

Thumbnail images, tech stack badges, and short descriptions

See More modal for full project details

Responsive grid layout (1–3 columns depending on screen size)

4. Contact

Fully functional contact form with:

Name, Email, Message fields

Message character limit (300 chars)

Email messages sent directly using EmailJS

Real-time success/failure alerts

Additional contact info: Email, GitHub, LinkedIn

Glassmorphic card style with backdrop blur

5. Reusable Components

ProjectCard.jsx — reusable card with image, tech stack, and modal

Container.jsx — layout wrapper for consistent spacing

6. Styling & Animations

Built with Tailwind CSS

Gradient backgrounds, hover animations, responsive design

Modal popup for project details with smooth transitions

🛠️ Tech Stack

Frontend: React (Vite)

Styling: Tailwind CSS

Email Integration: EmailJS

Animations: CSS transitions and Tailwind utilities

Icons & Badges: Tailwind styled badges for tech stack

⚡ Getting Started
1. Clone the Repository
git clone https://github.com/thervtechie1797/portfolio.git
cd portfolio

2. Install Dependencies
npm install

3. Set Up Environment Variables

Create a .env file in the root and add:

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key


Replace the values with your EmailJS credentials.

4. Run the Development Server
npm run dev


Open http://localhost:5173/ in your browser.

📧 EmailJS Integration

Service ID: Identifies your email service

Template ID: Identifies the email template for sending messages

Public Key: Authenticates your EmailJS account

Form variable names must match your template:

name → {{name}}

email → {{email}}

message → {{message}}

🖼️ Adding New Projects

Open Projects.jsx.

Add a new object in the projects array:

{
  id: 5,
  title: "New Project",
  description: "Short description here",
  link: "https://project-link.com",
  image: "/images/project.png",
  tech: ["React", "Tailwind"],
  details: "Detailed description of the project"
}


Video Link: https://lnkd.in/eCMHc8uy


The new project will automatically appear in the grid with the modal.

📱 Responsive Design

Mobile: single-column layout

Tablet: two-column layout

Desktop: three-column layout

💡 Future Enhancements

Add Framer Motion animations for smoother modal transitions

Integrate a blog or CMS for dynamic content

Add filtering options for projects by technology

👨‍💻 Author

Rohit Verma

GitHub: thervtechie1797

LinkedIn: rohitv1797

📄 License

MIT License © 2025 Rohit Verma
