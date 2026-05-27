GitHub Profile Analyzer:

A smart web application that analyzes GitHub profiles and provides insights about coding habits, repository activity, developer strengths, and improvement suggestions.


Features:

Analyze any public GitHub profile
Total repositories, stars, and forks
Most used programming language
Language usage statistics
Repository activity analysis
Inactive repository detection
Commit activity analysis
Developer feedback and suggestions
Profile overview dashboard
Frontend + Backend architecture


Tech Stack:

Frontend
React.js
Axios
Backend
Node.js
Express.js
APIs
GitHub REST API


Project Structure:

Github-Analyzer/
│
├── server/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── index.js
│   └── .env
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json


Installation:

1. Clone Repository
git clone <your-repository-url>
2. Install Backend Dependencies
cd server
npm install
3. Create .env

Inside server/.env

GITHUB_TOKEN=your_github_personal_access_token
4. Install Frontend Dependencies
cd ../client
npm install
Running the Project
Start Backend
cd server
node index.js

Backend runs on:

http://localhost:5000
Start Frontend
cd client
npm start

Frontend runs on:

http://localhost:3000


Usage:

Open the frontend in browser
Paste a GitHub profile URL
Click Analyze
View profile insights and statistics

Example:

https://github.com/torvalds


Current Analysis Features:

Public repositories
Total stars
Total forks
Most used language
Language distribution
Inactive repositories
Commit activity
Developer feedback generation


Planned Features:

Weekly activity graphs
Commit consistency score
README quality analysis
Framework detection from package.json
Open-source recommendations
AI-generated career suggestions
Portfolio improvement suggestions
Recruiter readiness score
Charts and visual analytics


GitHub API:

This project uses:
GitHub REST API
Official documentation:

GitHub REST API Documentation

Screenshots

Add screenshots of:

Homepage
Analysis dashboard
Charts
Feedback section
Future Improvements
Tailwind CSS UI redesign
Authentication with GitHub OAuth
Dark mode
Profile comparison
Export analysis as PDF
AI-powered insights


Author:

Built by Sathvik.