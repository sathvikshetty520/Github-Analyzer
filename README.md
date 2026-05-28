GitHub Profile Analyzer:

A smart full-stack web application that analyzes GitHub profiles and generates actionable insights on developer activity, coding patterns, and repository performance.

Live Demo:

 https://sathvikshetty520.github.io/Github-Analyzer/

Overview:

GitHub Profile Analyzer is a full-stack analytics tool that evaluates any public GitHub profile and transforms raw repository data into meaningful insights.

It helps understand a developer’s:

Coding consistency
Project activity
Language preferences
Contribution behavior
Overall GitHub presence

The system combines GitHub REST API data with custom backend logic to generate structured developer insights and feedback.

Features:

Profile Analytics
Analyze any public GitHub profile
Total repositories, stars, and forks
Followers and following insights
Repository-level breakdown

Developer Insights
Most used programming language
Language distribution statistics
Commit activity analysis
Repository activity scoring

Smart Evaluation
Inactive repository detection
Developer strength indicators
Automated improvement suggestions
Feedback generation system

Dashboard View
Clean profile overview UI
Structured statistics display
Organized insights section


Tech Stack:

Frontend
React.js
Axios
JavaScript (ES6+)
Backend
Node.js
Express.js
APIs
GitHub REST API


Project Architecture:

Github-Analyzer/
│
├── client/                 # React Frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/                 # Node.js Backend
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── index.js
│   └── .env


Installation & Setup:

1. Clone Repository
git clone https://github.com/your-username/Github-Analyzer.git
cd Github-Analyzer
2. Setup Backend
cd server
npm install

Create .env file:

GITHUB_TOKEN=your_github_personal_access_token

Run backend:

node index.js

Backend runs on:

http://localhost:5000
3. Setup Frontend
cd ../client
npm install
npm start

Frontend runs on:

http://localhost:3000


Usage:

Open the web app
Paste a GitHub profile URL
Click Analyze
View insights and developer analytics dashboard
Example Input:
https://github.com/torvalds

Key Analysis Metrics
Public repository count
Total stars & forks
Language usage breakdown
Repository activity level
Inactive repositories detection
Commit activity insights

Developer feedback generation
Planned Enhancements
Weekly activity graphs
AI-based developer scoring
README quality analysis
Recruiter readiness score
Dark mode UI
Export report as PDF
GitHub OAuth login
Interactive charts dashboard
GitHub API

This project uses the official GitHub REST API:
https://docs.github.com/en/rest

Key Highlights:
Full-stack MERN-style architecture (React + Node)
Real-time GitHub data processing
Modular backend design (routes/services/utils)
Clean separation of frontend and backend
Production deployment (GitHub Pages + Render)


Author:

Sathvik Shetty
Full-Stack Developer