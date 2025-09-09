#!/usr/bin/env python3
"""
SIH MCB Testing System - Complete Setup Verification
This script verifies the entire authentication system setup
"""

import asyncio
import requests
import json
from datetime import datetime

# Backend URL
BACKEND_URL = "http://localhost:8000"

# Test users
TEST_USERS = [
    {"username": "admin", "password": "admin123", "role": "admin"},
    {"username": "engineer", "password": "engineer123", "role": "engineer"},
    {"username": "operator", "password": "operator123", "role": "operator"},
    {"username": "viewer", "password": "viewer123", "role": "viewer"}
]

def print_header(title):
    """Print a formatted header"""
    print(f"\n{'='*60}")
    print(f"🚀 {title}")
    print(f"{'='*60}")

def print_section(title):
    """Print a formatted section"""
    print(f"\n🔍 {title}")
    print(f"{'-'*40}")

def test_health():
    """Test if the backend is running"""
    try:
        response = requests.get(f"{BACKEND_URL}/api/health", timeout=5)
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Backend Health: {data.get('status', 'Unknown')} - {data.get('message', '')}")
            return True
        else:
            print(f"❌ Backend Health Check Failed: {response.status_code}")
            return False
    except requests.exceptions.ConnectionError:
        print("❌ Cannot connect to backend. Make sure it's running on port 8000")
        return False
    except Exception as e:
        print(f"❌ Health check error: {e}")
        return False

def test_user_login(username, password, role):
    """Test login for a specific user"""
    try:
        credentials = {"username": username, "password": password}
        response = requests.post(
            f"{BACKEND_URL}/api/auth/login",
            json=credentials,
            headers={"Content-Type": "application/json"},
            timeout=5
        )
        
        if response.status_code == 200:
            data = response.json()
            if data.get('success'):
                print(f"✅ {username} ({role}): Login successful")
                
                # Test protected endpoint
                token = data.get('token')
                if token:
                    me_response = requests.get(
                        f"{BACKEND_URL}/api/auth/me",
                        headers={"Authorization": f"Bearer {token}"},
                        timeout=5
                    )
                    if me_response.status_code == 200:
                        print(f"✅ {username}: Protected endpoint accessible")
                        
                        # Test logout
                        logout_response = requests.post(
                            f"{BACKEND_URL}/api/auth/logout",
                            headers={"Authorization": f"Bearer {token}"},
                            timeout=5
                        )
                        if logout_response.status_code == 200:
                            print(f"✅ {username}: Logout successful")
                        else:
                            print(f"⚠️  {username}: Logout failed")
                    else:
                        print(f"❌ {username}: Protected endpoint failed")
                return True
            else:
                print(f"❌ {username}: Login failed - {data.get('message', 'Unknown error')}")
                return False
        else:
            print(f"❌ {username}: Login request failed - {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ {username}: Login test error - {e}")
        return False

def show_system_status():
    """Show complete system status"""
    print_header("SIH MCB Testing System - Complete Verification")
    
    print(f"🕒 Verification Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"🌐 Backend URL: {BACKEND_URL}")
    print(f"🖥️  Frontend URL: http://localhost:3000")
    
    # Test backend health
    print_section("Backend Health Check")
    backend_healthy = test_health()
    
    if not backend_healthy:
        print("\n❌ Backend is not running. Please start it with:")
        print("cd backend && uvicorn main:app --port 8000 --reload")
        return
    
    # Test all users
    print_section("User Authentication Tests")
    successful_logins = 0
    
    for user in TEST_USERS:
        if test_user_login(user["username"], user["password"], user["role"]):
            successful_logins += 1
    
    # Summary
    print_section("Test Summary")
    print(f"✅ Backend Health: {'OK' if backend_healthy else 'FAILED'}")
    print(f"✅ User Logins: {successful_logins}/{len(TEST_USERS)} successful")
    
    if successful_logins == len(TEST_USERS):
        print(f"\n🎉 All systems operational!")
        print(f"🚀 Ready for development and testing")
    else:
        print(f"\n⚠️  Some tests failed. Check the logs above.")
    
    # Show available endpoints
    print_section("Available API Endpoints")
    endpoints = [
        "GET  /api/health                 - Health check",
        "POST /api/auth/login             - User login", 
        "POST /api/auth/logout            - User logout",
        "GET  /api/auth/me                - Get current user",
        "POST /api/auth/register          - Register new user",
        "GET  /docs                       - API documentation"
    ]
    
    for endpoint in endpoints:
        print(f"  {endpoint}")
    
    # Show user accounts
    print_section("Available User Accounts")
    print(f"{'Username':<12} {'Password':<15} {'Role':<10} {'Description'}")
    print(f"{'-'*12} {'-'*15} {'-'*10} {'-'*20}")
    
    descriptions = {
        "admin": "Full system access",
        "engineer": "Test configuration",
        "operator": "Test execution", 
        "viewer": "Read-only access"
    }
    
    for user in TEST_USERS:
        print(f"{user['username']:<12} {user['password']:<15} {user['role']:<10} {descriptions.get(user['role'], 'N/A')}")
    
    print_section("Quick Start Commands")
    print("1. Start Backend:")
    print("   cd backend && uvicorn main:app --port 8000 --reload")
    print("\n2. Start Frontend:")
    print("   cd frontend && npm run dev")
    print("\n3. Open Application:")
    print("   http://localhost:3000")
    print("\n4. Database Management:")
    print("   python create_first_user.py --list")
    print("   python check_database.py")

if __name__ == "__main__":
    show_system_status()
