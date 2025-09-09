# SIH MCB Testing System - Start Guide

## Quick Start (Development)

### 1. Start Backend Server
```bash
cd backend
# Activate virtual environment (Windows)
sih\Scripts\activate

# Start FastAPI server
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

### 2. Start Frontend Server
```bash
cd frontend
# Install dependencies (if not done)
npm install

# Start development server
npm run dev
```

### 3. Access Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs

### 4. Test Login
**Demo Credentials:**
- Username: `admin`
- Password: `admin`

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login with username/password
- `POST /api/auth/logout` - Logout (invalidate session)
- `GET /api/auth/me` - Get current user info
- `POST /api/auth/register` - Register new user

### Example Login Request
```bash
curl -X POST "http://localhost:8000/api/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "admin"}'
```

### Example Response
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "user": {
    "id": "admin",
    "username": "admin",
    "email": "admin@mcb-testing.com",
    "role": "admin"
  }
}
```

## Frontend Features Implemented

✅ **Login/Logout System**
- Form validation and error handling
- JWT token management
- Secure authentication flow
- Route protection for authenticated pages

✅ **User Interface**
- Modern React components with Tailwind CSS
- Responsive design with sidebar navigation
- User profile dropdown with logout option
- Loading states and error messages

✅ **Navigation Protection**
- ProtectedRoute component for secure pages
- Automatic redirect to login for unauthenticated users
- Proper session management

## Backend Features Implemented

✅ **Authentication System**
- JWT token generation and validation
- Password hashing with bcrypt
- MongoDB user storage
- Demo admin account (admin/admin)

✅ **API Security**
- CORS configuration for frontend integration
- Bearer token authentication
- Proper error handling and status codes

✅ **Database Integration**
- MongoDB connection with motor (async)
- User CRUD operations
- Environment variable configuration

## Next Steps

1. **Enhanced Security**
   - Token refresh mechanism
   - Password reset functionality
   - Rate limiting for login attempts

2. **User Management**
   - Admin user management interface
   - Role-based access control
   - User profile editing

3. **MCB Testing Features**
   - Test execution interface
   - Real-time monitoring dashboard
   - Test result analytics
