# SIH MCB Testing System - Backend

Python FastAPI backend for the Automated High-Current Short-Circuit Test System for MCB (Miniature Circuit Breakers).

## Features

- **FastAPI Framework**: Modern, fast web framework for building APIs
- **JWT Authentication**: Secure token-based authentication
- **MongoDB Integration**: Database operations using Motor (async MongoDB driver)
- **Pydantic Models**: Data validation and serialization
- **CORS Support**: Cross-origin resource sharing for frontend integration
- **Auto-documentation**: Swagger UI available at `/docs`

## Setup Instructions

### 1. Prerequisites
- Python 3.9+ installed
- MongoDB Atlas account or local MongoDB instance

### 2. Virtual Environment Setup
```powershell
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv sih

# Activate virtual environment (Windows)
.\sih\Scripts\Activate.ps1

# Or on Linux/Mac
source sih/bin/activate
```

### 3. Install Dependencies
```powershell
pip install -r requirements.txt
```

### 4. Environment Configuration
Create or update `.env` file:
```env
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/sih_mcb_testing?retryWrites=true&w=majority
SECRET_KEY=your-super-secret-key-here-make-it-very-long-and-secure
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

### 5. Run the Server
```powershell
# Using uvicorn directly
uvicorn main:app --host 0.0.0.0 --port 8000 --reload

# Or using the full Python path from virtual environment
S:\Projects\SIH\backend\sih\Scripts\python.exe -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/register` - User registration
- `GET /api/auth/me` - Get current user info

### Dashboard
- `GET /api/dashboard/stats` - Get MCB testing statistics

### General
- `GET /` - Root endpoint
- `GET /api/health` - Health check
- `GET /docs` - Swagger documentation
- `GET /redoc` - ReDoc documentation

## Default Login Credentials

For development and testing:
- **Username**: admin
- **Password**: admin

## Project Structure

```
backend/
├── app/
│   ├── config/
│   │   ├── __init__.py
│   │   └── database.py          # MongoDB connection
│   ├── models/
│   │   ├── __init__.py
│   │   └── user.py              # User data models
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── auth.py              # Authentication endpoints
│   │   └── dashboard.py         # Dashboard endpoints
│   ├── utils/
│   │   ├── __init__.py
│   │   └── auth.py              # Authentication utilities
│   └── __init__.py
├── sih/                         # Virtual environment
├── .env                         # Environment variables
├── main.py                      # FastAPI application entry point
├── requirements.txt             # Python dependencies
├── start.bat                    # Windows batch startup script
├── start.ps1                    # PowerShell startup script
└── start.sh                     # Linux/Mac shell startup script
```

## Development

### Adding New Endpoints
1. Create route files in `app/routes/`
2. Define Pydantic models in `app/models/`
3. Add database operations in appropriate modules
4. Include routers in `main.py`

### Database Operations
The application uses Motor for async MongoDB operations. Database connection is managed in `app/config/database.py`.

### Authentication
JWT-based authentication is implemented with:
- Password hashing using bcrypt
- Token generation and validation
- Protected routes using FastAPI dependencies

## Production Deployment

For production deployment:
1. Update environment variables with secure values
2. Use a production WSGI server like Gunicorn
3. Set up reverse proxy with Nginx
4. Enable HTTPS/SSL
5. Configure proper logging and monitoring

## API Documentation

Visit `http://localhost:8000/docs` for interactive Swagger documentation or `http://localhost:8000/redoc` for ReDoc documentation.
