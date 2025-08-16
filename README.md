SkillSwap

SkillSwap is a skill-based platform where users can offer, learn, and monetize multiple skills. Users can connect with mentors through chat, video calls, and bookings, while Admins manage skills, availability, and premium subscriptions.

Table of Contents

Features

User Roles

Tech Stack

Getting Started

Setup & Installation

Screenshots

Future Enhancements

License

Features

Role-Based Platform: Admins can sell and manage skills; Users can browse, book, chat, and video call.

Real-Time Communication: Chat and video calls powered by WebRTC.

Booking System: Schedule sessions with mentors, with optional calendar sync.

Authentication: Secure login and signup.

Pricing & Subscription Plans: Access premium features with Starter, Pro, or Enterprise plans.

Responsive Design: Built with React + TailwindCSS for modern UI.

Caching & Performance: Redis caching for faster responses.

User Roles
Admin

Sell multiple skills and manage availability.

Offer mentorship via booking and real-time calls.

Access analytics and manage users.

User

Browse available skills and mentors.

Book sessions with Admins or other users.

Chat or video call mentors in real-time.

Tech Stack
Layer	Technology
Frontend	React, TailwindCSS
Backend	Node.js, Express
Database	PostgreSQL with Prisma ORM
Caching	Redis
Real-Time	WebRTC for chat & video
Deployment	Vite / Node.js server
Getting Started
Prerequisites

Node.js >= 20

PostgreSQL >= 15

Redis for caching

Clone the Repository
git clone <your-repo-url>
cd skillswap

Install Dependencies
npm install

Environment Variables

Create a .env file and set:

DATABASE_URL=postgresql://username:password@localhost:5432/skillswap
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_secret_key

Run the App
npm run dev

Screenshots

Home / Landing Page


Role Selection / Onboarding


Pricing & Subscription


Booking / Chat


Add your own screenshots to the screenshots/ folder.

Future Enhancements

Calendar sync with Google/Outlook for seamless scheduling.

Advanced analytics dashboard for Admins.

Mobile-first optimizations and PWA support.

AI recommendations for matching users with mentors.

License

This project is licensed under the MIT License © 2025 SkillSwap.