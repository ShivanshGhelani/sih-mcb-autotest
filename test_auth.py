#!/usr/bin/env python3
"""
Quick test script to verify the authentication endpoints
Run this after starting the backend server
"""

import requests
import json

BASE_URL = "http://localhost:8000"

def test_health():
    """Test if the API is running"""
    try:
        response = requests.get(f"{BASE_URL}/api/health")
        print(f"🔍 Health Check: {response.status_code}")
        if response.status_code == 200:
            print(f"✅ API is running: {response.json()}")
            return True
        else:
            print(f"❌ API health check failed")
            return False
    except requests.exceptions.ConnectionError:
        print("❌ Cannot connect to backend server. Make sure it's running on port 8000")
        return False

def test_login():
    """Test login endpoint"""
    print("\n🔐 Testing Login Endpoint...")
    
    # Test credentials
    credentials = {"username": "admin", "password": "admin"}
    
    try:
        response = requests.post(
            f"{BASE_URL}/api/auth/login",
            json=credentials,
            headers={"Content-Type": "application/json"}
        )
        
        print(f"Login Status: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get('success'):
                print(f"✅ Login successful!")
                print(f"Token: {data.get('token', 'N/A')[:50]}...")
                print(f"User: {data.get('user', {})}")
                return data.get('token')
            else:
                print(f"❌ Login failed: {data.get('message')}")
        else:
            print(f"❌ Login request failed: {response.text}")
            
    except Exception as e:
        print(f"❌ Login test error: {e}")
    
    return None

def test_logout(token):
    """Test logout endpoint"""
    print("\n🚪 Testing Logout Endpoint...")
    
    if not token:
        print("❌ No token available for logout test")
        return
    
    try:
        response = requests.post(
            f"{BASE_URL}/api/auth/logout",
            headers={
                "Authorization": f"Bearer {token}",
                "Content-Type": "application/json"
            }
        )
        
        print(f"Logout Status: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Logout successful: {data.get('message')}")
        else:
            print(f"❌ Logout failed: {response.text}")
            
    except Exception as e:
        print(f"❌ Logout test error: {e}")

def test_protected_endpoint(token):
    """Test protected endpoint (/me)"""
    print("\n👤 Testing Protected Endpoint (/me)...")
    
    if not token:
        print("❌ No token available for protected endpoint test")
        return
    
    try:
        response = requests.get(
            f"{BASE_URL}/api/auth/me",
            headers={
                "Authorization": f"Bearer {token}",
                "Content-Type": "application/json"
            }
        )
        
        print(f"Protected Endpoint Status: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Protected endpoint accessible:")
            print(f"User Data: {data}")
        else:
            print(f"❌ Protected endpoint failed: {response.text}")
            
    except Exception as e:
        print(f"❌ Protected endpoint test error: {e}")

if __name__ == "__main__":
    print("🧪 SIH MCB Testing System - Authentication Test")
    print("=" * 50)
    
    # Test sequence
    if test_health():
        token = test_login()
        if token:
            test_protected_endpoint(token)
            test_logout(token)
    
    print("\n" + "=" * 50)
    print("🏁 Test completed!")
    print("\nTo start the servers:")
    print("Backend: cd backend && uvicorn main:app --port 8000 --reload")
    print("Frontend: cd frontend && npm run dev")
