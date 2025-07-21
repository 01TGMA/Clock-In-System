


**🧪 How It Works**
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
LinkedIn: @

⭐ Show Support
If you found this project useful, give it a ⭐ on GitHub and share it with others!


#  Clock-In System

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Made with JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Firebase](https://img.shields.io/badge/Backend-Firebase-orange)](https://firebase.google.com/)
[![jsPDF](https://img.shields.io/badge/PDF-jsPDF-green)](https://github.com/parallax/jsPDF)

A **responsive**, Firebase-powered web dashboard for managing employee clock-ins. Features include detailed pop-ups, time logs, and PDF exports.

---

## 🚀 Features

- 🔍 **Grid view of employees**
- 📋 **Click any employee to view full details**
- 🧾 **Display time logs per employee**
- ❌ **Handles employees without time logs**
- 📥 **Download details as PDF using jsPDF**
- 🔗 **Connected to Firebase (Firestore or Realtime DB)**

---

## 🛠️ Built With

- **HTML5**  
- **CSS3**  
- **JavaScript (ES6+)**  
- **Firebase** – for data storage  
- **jsPDF** – for PDF generation  

---

## 📂 Project Structure

```plaintext
/Clock-In-System
│
├── index.html  
├── Admin_Login.html  
├── Admin_Dashboard.html  
├── Check_In_Out.html
├── Employee_Info.html       
├── style.css          
├── script.js          
├── firebase.js        
├── /icons
├── /Flow              
└── README.md
```

## Getting Started

1. **Clone the repo**:
   ```bash
   git clone https://github.com/your-username/employee-attendance-dashboard.git
   cd employee-attendance-dashboard

2. **Add Firebase Config**:

Create a firebase.js file and paste your Firebase credentials:
```
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

```

**3. Open index.html in a browser (double-click or use Live Server).**
