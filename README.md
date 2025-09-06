# 🔌 SIH MCB Testing System

<div align="center">

![MCB Testing System](https://img.shields.io/badge/SIH%202025-MCB%20Testing-blue?style=for-the-badge&logo=github)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**Automated High-Current Short-Circuit Test System for MCB**  
*Compliant with IEC 60898-1:2015 Standards*

[🚀 Live Demo](#) | [📖 Documentation](#documentation) | [🐛 Report Bug](#) | [💡 Request Feature](#)

</div>

---

## 📋 Table of Contents

- [🎯 About The Project](#-about-the-project)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🏗️ Architecture](#️-architecture)
- [🚀 Getting Started](#-getting-started)
- [📱 Usage](#-usage)
- [🔧 API Documentation](#-api-documentation)
- [🧪 Testing](#-testing)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
- [👥 Team](#-team)

---

## 🎯 About The Project

The **SIH MCB Testing System** is an advanced automated testing platform designed for **Miniature Circuit Breakers (MCB)** that ensures compliance with **IEC 60898-1:2015** international standards. This system provides comprehensive testing capabilities for high-current short-circuit scenarios, enabling manufacturers to validate MCB performance with precision and reliability.

### 🎯 **Problem Statement**
Traditional MCB testing processes are manual, time-consuming, and prone to human error. Our solution automates the entire testing workflow, from test execution to compliance reporting, ensuring consistent and accurate results.

### 💡 **Solution**
A full-stack web application with real-time monitoring, AI-powered analytics, and automated compliance reporting that streamlines the MCB testing process.

---

## ✨ Features

### 🔬 **Core Testing Features**
- ⚡ **High-Current Short-Circuit Testing** - Automated test execution up to 10kA
- 📊 **Real-time Monitoring** - Live data visualization and system metrics
- 🤖 **AI-Powered Analytics** - Intelligent pattern recognition and predictive analysis
- 📋 **Compliance Reporting** - Automated IEC 60898-1:2015 compliance reports
- 🔄 **Batch Testing** - Multiple MCB testing capabilities
- 📈 **Historical Data Analysis** - Trend analysis and performance tracking

### 💻 **Platform Features**
- 🔐 **Secure Authentication** - JWT-based user authentication
- 👥 **Multi-user Support** - Role-based access control
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🌙 **Dark/Light Mode** - User preference themes
- 📊 **Interactive Dashboard** - Real-time system status and metrics
- 🚨 **Alert System** - Real-time notifications and warnings

### 🔧 **Technical Features**
- ⚡ **High Performance** - Async operations and optimized queries
- 🔄 **Real-time Updates** - WebSocket connections for live data
- 📡 **REST API** - Comprehensive API for third-party integrations
- 📚 **Auto Documentation** - Swagger/OpenAPI documentation
- 🔒 **Security** - CORS protection and data encryption
- 📦 **Containerized** - Docker support for easy deployment

---

## 🛠️ Tech Stack

<div align="center">

### **Frontend**
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### **Backend**
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Uvicorn](https://img.shields.io/badge/Uvicorn-FF6B6B?style=for-the-badge&logo=uvicorn&logoColor=white)
![Pydantic](https://img.shields.io/badge/Pydantic-E92063?style=for-the-badge&logo=pydantic&logoColor=white)

### **Database**
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB%20Atlas-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

### **Authentication & Security**
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![bcrypt](https://img.shields.io/badge/bcrypt-338F3D?style=for-the-badge&logo=bcrypt&logoColor=white)

### **Development Tools**
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![VSCode](https://img.shields.io/badge/VS%20Code-0078d4?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

</div>

---

## 🏗️ Architecture

```mermaid
graph TB
    subgraph "Frontend Layer"
        A[React App] --> B[TypeScript Components]
        B --> C[Tailwind Styling]
        C --> D[Vite Build Tool]
    end
    
    subgraph "API Layer"
        E[FastAPI Server] --> F[JWT Authentication]
        F --> G[Pydantic Models]
        G --> H[Async Endpoints]
    end
    
    subgraph "Database Layer"
        I[MongoDB Atlas] --> J[Motor Driver]
        J --> K[User Collections]
        K --> L[Test Data Collections]
    end
    
    A --> E
    E --> I
    
    subgraph "External Systems"
        M[MCB Hardware] --> N[Testing Equipment]
        N --> O[Data Acquisition]
    end
    
    E --> O
```

---

## 🚀 Getting Started

### 📋 Prerequisites

Ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **Python** (v3.9.0 or higher) - [Download](https://python.org/)
- **Git** - [Download](https://git-scm.com/)
- **MongoDB Atlas Account** - [Sign Up](https://mongodb.com/cloud/atlas)

### 📥 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShivanshGhelani/sih-mcb-autotest.git
   cd sih-mcb-autotest
   ```

2. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   ```

3. **Setup Backend**
   ```bash
   cd ../backend
   python -m venv sih
   
   # Windows
   .\sih\Scripts\Activate.ps1
   
   # Linux/Mac
   source sih/bin/activate
   
   pip install -r requirements.txt
   ```

4. **Environment Configuration**
   ```bash
   # Copy environment template
   cp .env.example .env
   
   # Update with your MongoDB URI and secret keys
   ```

### 🔧 Configuration

Create `.env` file in the backend directory:

```env
# Database Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/sih_mcb_testing?retryWrites=true&w=majority

# Security Configuration
SECRET_KEY=your-super-secret-key-here-make-it-very-long-and-secure
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# Application Configuration
DEBUG=True
ENVIRONMENT=development
```

### 🚦 Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   uvicorn main:app --host 0.0.0.0 --port 8000 --reload
   ```

2. **Start the Frontend Server**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Access the Application**
   - **Frontend**: http://localhost:3000
   - **Backend API**: http://localhost:8000
   - **API Documentation**: http://localhost:8000/docs

---

## 📱 Usage

### 🔐 **Authentication**
- **Default Credentials**: `admin` / `admin`
- **Registration**: Create new user accounts
- **JWT Tokens**: Secure session management

### 📊 **Dashboard**
- **System Overview**: Real-time testing statistics
- **Active Sessions**: Monitor ongoing tests
- **Compliance Rate**: Track testing success rates
- **System Uptime**: Server performance metrics

### 🔬 **MCB Testing**
- **Standard Tests**: IEC 60898-1:2015 compliance tests
- **Custom Tests**: Configure custom testing parameters
- **Batch Testing**: Test multiple MCBs simultaneously
- **Live Diagnostics**: Real-time test monitoring

### 📈 **Analytics**
- **AI Analytics**: Machine learning insights
- **Performance Trends**: Historical data analysis
- **Predictive Analysis**: Failure prediction algorithms
- **Export Reports**: PDF and Excel report generation

---

## 🔧 API Documentation

### **Base URL**: `http://localhost:8000/api`

#### 🔐 Authentication Endpoints
```http
POST /auth/login          # User login
POST /auth/logout         # User logout  
POST /auth/register       # User registration
GET  /auth/me             # Current user info
```

#### 📊 Dashboard Endpoints
```http
GET /dashboard/stats      # System statistics
GET /dashboard/tests      # Recent tests
GET /dashboard/alerts     # System alerts
```

#### 🔬 Testing Endpoints
```http
POST /tests/start         # Start new test
GET  /tests/{id}          # Get test details
PUT  /tests/{id}/stop     # Stop running test
GET  /tests/history       # Test history
```

### 📚 **Interactive Documentation**
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

---

## 🧪 Testing

### **Frontend Testing**
```bash
cd frontend
npm run test          # Run unit tests
npm run test:coverage # Generate coverage report
npm run e2e           # End-to-end tests
```

### **Backend Testing**
```bash
cd backend
pytest                # Run all tests
pytest --cov         # Coverage report
pytest -v             # Verbose output
```

---

## 📊 Project Statistics

<div align="center">

![GitHub repo size](https://img.shields.io/github/repo-size/ShivanshGhelani/sih-mcb-autotest?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/ShivanshGhelani/sih-mcb-autotest?style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/ShivanshGhelani/sih-mcb-autotest?style=for-the-badge)

</div>

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### **How to Contribute**
1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. 💡 Make your changes
4. ✅ Run tests (`npm test` and `pytest`)
5. 📝 Commit changes (`git commit -m 'Add AmazingFeature'`)
6. 📤 Push to branch (`git push origin feature/AmazingFeature`)
7. 🔄 Open a Pull Request

### **Development Guidelines**
- 📝 Follow code style guidelines
- ✅ Write tests for new features
- 📚 Update documentation
- 🔍 Ensure all tests pass
- 📋 Follow commit message conventions

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 SIH MCB Testing Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 👥 Team

<div align="center">

### **SIH 2025 Team - MCB Testing Innovation**

| Role | Name | GitHub | LinkedIn |
|------|------|--------|----------|
| 🚀 **Project Lead** | Shivansh Ghelani | [@ShivanshGhelani](https://github.com/ShivanshGhelani) | [LinkedIn](https://linkedin.com/in/shivansh-ghelani) |
| 💻 **Full Stack Developer** | Team Member 2 | [@member2](https://github.com/member2) | [LinkedIn](#) |
| 🔬 **Hardware Engineer** | Team Member 3 | [@member3](https://github.com/member3) | [LinkedIn](#) |
| 🧠 **AI/ML Engineer** | Team Member 4 | [@member4](https://github.com/member4) | [LinkedIn](#) |
| 🎨 **UI/UX Designer** | Team Member 5 | [@member5](https://github.com/member5) | [LinkedIn](#) |
| 📊 **Data Scientist** | Team Member 6 | [@member6](https://github.com/member6) | [LinkedIn](#) |

</div>

---

## 📞 Contact & Support

<div align="center">

### **Get in Touch**

[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:team@mcb-testing.com)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ShivanshGhelani/sih-mcb-autotest)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/company/mcb-testing)

**Project Link**: [https://github.com/ShivanshGhelani/sih-mcb-autotest](https://github.com/ShivanshGhelani/sih-mcb-autotest)

</div>

---

## 🙏 Acknowledgments

- 🏆 **Smart India Hackathon 2025** for the opportunity
- 📚 **IEC 60898-1:2015** for standard compliance guidelines  
- 🛠️ **Open Source Community** for amazing tools and libraries
- 🎓 **Educational Institutions** for support and guidance
- ⚡ **Industry Partners** for MCB testing insights

---

<div align="center">

### ⭐ **Star this repository if you found it helpful!**

![Made with ❤️ by SIH Team](https://img.shields.io/badge/Made%20with%20❤️%20by-SIH%20Team-red?style=for-the-badge)

</div>
