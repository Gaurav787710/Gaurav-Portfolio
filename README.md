# Goverdhan Khichar - Portfolio Website

This is my personal portfolio website, designed and developed by me to showcase my work, technical skills, and freelancing profile.

It includes real project presentations and Upwork-ready sample case studies so clients can quickly understand my development quality, UI approach, and delivery style.

## Live Links

- Portfolio: https://my-portfolio-2ca06.web.app
- Upwork Profile: https://www.upwork.com/freelancers/~010321d61133038471

## Project Purpose

- Showcase my portfolio in a modern, interactive single-page experience.
- Present client-facing case studies with clear tech stack and role details.
- Share selected sample work for Upwork discussions and project pitching.
- Provide a direct contact flow for incoming project inquiries.

## Key Sections

- Home: Intro, role summary, and primary call-to-actions.
- Projects: Featured work cards with detailed modal case studies.
- Skills: Categorized technology stack across frontend, backend, cloud, and mobile.
- About: Professional summary, experience indicators, and profile context.
- Contact: Lead form, email, social links, and Upwork profile access.

## How The Website Works

This project is built as a single-page React application.

1. App shell renders layered sections in order: Home -> Projects -> Skills -> About -> Contact.
2. Navbar uses scroll-spy logic to highlight the active section while scrolling.
3. Project cards open animated detail modals with case study content and screenshots.
4. Mobile and desktop navigation are handled with responsive UI states.
5. Contact form validates inputs, prevents bot submissions, and sends inquiry data through API-based submission.

## Contact Form Flow

The contact form is production-ready and supports multiple delivery paths:

1. If VITE_WEB3FORMS_ACCESS_KEY is set, data is submitted to Web3Forms.
2. If key is missing, form submits through FormSubmit AJAX using VITE_CONTACT_FALLBACK_EMAIL.
3. If network-level submission fails, it opens the user's email app as a final fallback.

Important: FormSubmit requires one-time activation for the target inbox. On the first submit, open the activation email and click Activate Form.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Motion (animations)
- Lucide Icons
- Firebase Hosting (deployment)

## Run Locally

Prerequisites: Node.js 18+

1. Install dependencies:
   npm install
2. Create local environment file from sample:
   copy .env.example .env.local
3. Update values in .env.local:
   - VITE_CONTACT_FALLBACK_EMAIL=your_email@example.com
   - VITE_WEB3FORMS_ACCESS_KEY=your_access_key (optional but recommended)
4. Start local server:
   npm run dev

## Build and Deploy

1. Create production build:
   npm run build
2. Deploy to Firebase Hosting:
   firebase deploy --only hosting

## Repository Safety

- Sensitive local env file .env.local is not committed.
- .env.example contains placeholder values only.
- Build output and local caches are excluded through .gitignore.

## Professional Note

This codebase represents my own implementation work.

Where concept references are shown in project case studies, those are used for presentation and ideation only. Final UI development, component architecture, and production code are manually engineered by me.
