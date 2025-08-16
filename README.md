# SkillSwap

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react) 
![Node.js](https://img.shields.io/badge/Node.js-20.2.0-green?logo=node.js) 
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15.5-blue?logo=postgresql) 
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.3-blue?logo=tailwind-css) 
![WebRTC](https://img.shields.io/badge/WebRTC-real-time-purple)

SkillSwap is a **skill-based platform** where users can offer, learn, and monetize multiple skills. Users can connect with mentors through **chat, video calls, and bookings**, while Admins manage skills, availability, and premium subscriptions.

---

## 📸 Screenshots

All images are displayed at equal width for consistency:

<img src="https://github.com/Yashbhu/skillswap/blob/e6a4883344309d10fb774e389f98f1be045b9446/Screenshot%20from%202025-08-17%2004-01-05.png?raw=true" alt="Landing Page" width="400"/>  
<img src="https://github.com/Yashbhu/skillswap/blob/e6a4883344309d10fb774e389f98f1be045b9446/Screenshot%20from%202025-08-17%2004-01-14.png?raw=true" alt="Dashboard / Session" width="400"/>  

---

## 📑 Table of Contents

1. [Features](#features)  
2. [User Roles](#user-roles)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
5. [Setup & Installation](#setup--installation)  
6. [Screenshots](#screenshots)  
7. [Future Enhancements](#future-enhancements)  
8. [License](#license)  

---

## ✅ Features

- **Role-Based Platform**: Admins can sell and manage skills; Users can browse, book, chat, and video call.  
- **Real-Time Communication**: Chat and video calls powered by WebRTC.  
- **Booking System**: Schedule sessions with mentors, with optional calendar sync.  
- **Authentication**: Secure login and signup.  
- **Pricing & Subscription Plans**: Access premium features with Starter, Pro, or Enterprise plans.  
- **Responsive Design**: Built with React + TailwindCSS for modern UI.  
- **Caching & Performance**: Redis caching for faster responses.  

---

## 👥 User Roles

### Admin
- Sell multiple skills and manage availability.  
- Offer mentorship via booking and real-time calls.  
- Access analytics and manage users.  

### User
- Browse available skills and mentors.  
- Book sessions with Admins or other users.  
- Chat or video call mentors in real-time.  

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, TailwindCSS |
| Backend | Node.js, Express |
| Database | PostgreSQL with Prisma ORM |
| Caching | Redis |
| Real-Time | WebRTC for chat & video |
| Deployment | Vite / Node.js server |

---

## ⚡ Getting Started

### Prerequisites
- Node.js >= 20  
- PostgreSQL >= 15  
- Redis for caching  

### Clone the Repository
```bash
git clone https://github.com/Yashbhu/skillswap.git
cd skillswap
