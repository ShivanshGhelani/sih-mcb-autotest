#!/usr/bin/env python3
"""
Script to create the first user in the SIH database
This script will create an admin user and some sample users for testing
"""

import asyncio
import os
import sys
from datetime import datetime
from motor.motor_asyncio import AsyncIOMotorClient
from passlib.context import CryptContext

# Add the current directory to Python path to import our modules
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from app.config.database import connect_to_mongo, get_database
from app.utils.auth import get_password_hash

# Password hashing context
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

async def create_users():
    """Create initial users in the database"""
    try:
        # Connect to database
        await connect_to_mongo()
        db = await get_database()
        
        print("🔗 Connected to MongoDB successfully!")
        print(f"📊 Using database: {db.name}")
        
        # Check if users collection exists and has any documents
        users_count = await db.users.count_documents({})
        print(f"📋 Current users count: {users_count}")
        
        # Define users to create
        users_to_create = [
            {
                "username": "admin",
                "email": "admin@sih-mcb.com",
                "role": "admin",
                "password": "admin123",
                "is_active": True
            },
            {
                "username": "engineer",
                "email": "engineer@sih-mcb.com", 
                "role": "engineer",
                "password": "engineer123",
                "is_active": True
            },
            {
                "username": "operator",
                "email": "operator@sih-mcb.com",
                "role": "operator", 
                "password": "operator123",
                "is_active": True
            },
            {
                "username": "viewer",
                "email": "viewer@sih-mcb.com",
                "role": "viewer",
                "password": "viewer123", 
                "is_active": True
            }
        ]
        
        created_users = []
        skipped_users = []
        
        for user_data in users_to_create:
            # Check if user already exists
            existing_user = await db.users.find_one({"username": user_data["username"]})
            
            if existing_user:
                print(f"⚠️  User '{user_data['username']}' already exists - skipping")
                skipped_users.append(user_data["username"])
                continue
            
            # Hash the password
            hashed_password = get_password_hash(user_data["password"])
            
            # Prepare user document
            user_doc = {
                "username": user_data["username"],
                "email": user_data["email"],
                "role": user_data["role"],
                "hashed_password": hashed_password,
                "is_active": user_data["is_active"],
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            }
            
            # Insert user into database
            result = await db.users.insert_one(user_doc)
            
            if result.inserted_id:
                print(f"✅ Created user: {user_data['username']} ({user_data['role']}) - ID: {result.inserted_id}")
                created_users.append({
                    "username": user_data["username"],
                    "password": user_data["password"],  # Store plain password for display
                    "role": user_data["role"],
                    "email": user_data["email"]
                })
            else:
                print(f"❌ Failed to create user: {user_data['username']}")
        
        # Display summary
        print("\n" + "="*60)
        print("📊 USER CREATION SUMMARY")
        print("="*60)
        
        if created_users:
            print(f"✅ Successfully created {len(created_users)} users:")
            print("\n🔐 LOGIN CREDENTIALS:")
            print("-" * 40)
            for user in created_users:
                print(f"Username: {user['username']:<12} | Password: {user['password']:<12} | Role: {user['role']}")
                print(f"Email:    {user['email']}")
                print("-" * 40)
        
        if skipped_users:
            print(f"\n⚠️  Skipped {len(skipped_users)} existing users: {', '.join(skipped_users)}")
        
        # Final count
        final_count = await db.users.count_documents({})
        print(f"\n📋 Total users in database: {final_count}")
        
        # Test one of the created users
        if created_users:
            test_user = created_users[0]
            print(f"\n🧪 Testing authentication for user: {test_user['username']}")
            
            # Try to find and verify the user
            db_user = await db.users.find_one({"username": test_user['username']})
            if db_user:
                print(f"✅ User found in database")
                
                # Verify password
                from app.utils.auth import verify_password
                if verify_password(test_user['password'], db_user['hashed_password']):
                    print(f"✅ Password verification successful")
                else:
                    print(f"❌ Password verification failed")
            else:
                print(f"❌ User not found in database")
        
        print("\n🎉 Database initialization complete!")
        
    except Exception as e:
        print(f"❌ Error creating users: {e}")
        import traceback
        traceback.print_exc()

async def list_users():
    """List all users in the database"""
    try:
        await connect_to_mongo()
        db = await get_database()
        
        print("👥 CURRENT USERS IN DATABASE")
        print("="*50)
        
        users = await db.users.find({}).to_list(length=None)
        
        if not users:
            print("📭 No users found in database")
            return
        
        for i, user in enumerate(users, 1):
            print(f"{i}. Username: {user.get('username', 'N/A')}")
            print(f"   Email: {user.get('email', 'N/A')}")
            print(f"   Role: {user.get('role', 'N/A')}")
            print(f"   Active: {user.get('is_active', False)}")
            print(f"   Created: {user.get('created_at', 'N/A')}")
            print("-" * 30)
        
        print(f"Total users: {len(users)}")
        
    except Exception as e:
        print(f"❌ Error listing users: {e}")

async def main():
    """Main function"""
    print("🚀 SIH MCB Testing System - User Creation Script")
    print("="*60)
    
    if len(sys.argv) > 1 and sys.argv[1] == "--list":
        await list_users()
    else:
        await create_users()

if __name__ == "__main__":
    asyncio.run(main())
