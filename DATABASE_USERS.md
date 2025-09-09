# SIH MCB Testing System - Database Users

## 📊 Database: `sih_mcb_testing`
## 👥 Collection: `users`

### 🔐 Available User Accounts

| Username | Password | Role | Email | Description |
|----------|----------|------|-------|-------------|
| `admin` | `admin123` | admin | admin@sih-mcb.com | Full system administrator access |
| `engineer` | `engineer123` | engineer | engineer@sih-mcb.com | Engineering and test configuration access |
| `operator` | `operator123` | operator | operator@sih-mcb.com | Equipment operation and test execution |
| `viewer` | `viewer123` | viewer | viewer@sih-mcb.com | Read-only access to test results and reports |

### 🚀 Quick Login Test

You can test these credentials using the frontend at: http://localhost:3000

Or via API:
```bash
# Test admin login
curl -X POST "http://localhost:8000/api/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "admin123"}'
```

### 🛠️ Database Management Scripts

#### Create/Add Users
```bash
cd backend
python create_first_user.py
```

#### List All Users
```bash
cd backend  
python create_first_user.py --list
```

#### Check Database Status
```bash
cd backend
python check_database.py
```

### 📋 User Roles & Permissions

#### Admin (`admin`)
- Full system access
- User management
- System configuration
- Test execution and monitoring
- Report generation

#### Engineer (`engineer`)
- Test configuration and setup
- Equipment calibration
- Test execution
- Technical reports
- System diagnostics

#### Operator (`operator`)
- Test execution
- Equipment operation
- Basic monitoring
- Operational reports

#### Viewer (`viewer`)
- Read-only access
- View test results
- View reports
- View system status

### 🔄 Production Setup

For production deployment:

1. **Change all default passwords**
2. **Use environment variables for sensitive data**
3. **Enable proper authentication and authorization**
4. **Set up proper database backup and recovery**
5. **Configure proper logging and monitoring**

### 🔐 Security Notes

- All passwords are hashed using bcrypt
- JWT tokens are used for session management
- Default passwords should be changed in production
- Consider implementing password complexity requirements
- Enable audit logging for user activities
