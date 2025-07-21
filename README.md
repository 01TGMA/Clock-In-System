# Clock-In-Sytem

# 🧑‍💼 Employee Attendance Dashboard

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Made with JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Firebase](https://img.shields.io/badge/Backend-Firebase-orange)](https://firebase.google.com/)
[![jsPDF](https://img.shields.io/badge/PDF-jsPDF-green)](https://github.com/parallax/jsPDF)

A responsive web-based dashboard for tracking employee attendance. Employees are displayed in a grid, and full details can be viewed in a pop-up. You can also download individual employee data as a PDF file.

---

## 🚀 Features

- 🔍 Grid view of employees
- 📋 Click any employee to view full details
- 🧾 Display time logs per employee
- ❌ Handles employees without time logs
- 📥 Download details as PDF using jsPDF
- 🔗 Connected to Firebase (Firestore or Realtime DB)

---

## 🛠️ Built With

- **HTML5**  
- **CSS3**  
- **JavaScript (ES6+)**  
- **Firebase** – for data storage  
- **jsPDF** – for PDF generation  

---

## 📂 Project Structure

/employee-attendance-dashboard
│
├── index.html # UI layout
├── style.css # Custom styling
├── script.js # Core logic & event listeners
├── firebase.js # Firebase config
├── /libs
│ └── jspdf.min.js # PDF library
├── /assets # (Optional) logos or icons
└── README.md

---

## 📦 Getting Started

1. **Clone the repo**:
   ```bash
   git clone https://github.com/your-username/employee-attendance-dashboard.git
   cd employee-attendance-dashboard

2. **Add Firebase Config**:

Create a firebase.js file and paste your Firebase credentials:

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); // Or use realtime DB


3. Open index.html in a browser (double-click or use Live Server).

🧪 How It Works
Every .empDiv holds a specific employee.

Clicking it triggers a modal (#fullEmployeedisplay) with full employee data.

The modal has a Download PDF button that calls jsPDF to generate and download details.

PDF includes name, ID, position, and timestamps (if any).

🖼️ Screenshots
(You can insert screenshots below — recommended size: 600px wide)

📃 License
Licensed under the MIT License.

👤 Author
Your Name
GitHub: @yourusername
Twitter: @yourhandle

⭐ Show Support
If you found this project useful, give it a ⭐ on GitHub and share it with others!