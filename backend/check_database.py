#!/usr/bin/env python3
"""
MongoDB Database Status Checker for SIH MCB Testing System
"""

import asyncio
import os
import sys
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime

sys.path.append(os.path.dirname(os.path.abspath(__file__)))

async def check_database_status():
    """Check MongoDB connection and database status"""
    try:
        # Connect to MongoDB
        mongodb_uri = os.getenv("MONGODB_URI", "mongodb://localhost:27017")
        client = AsyncIOMotorClient(mongodb_uri)
        
        print("🔍 SIH MCB Testing System - Database Status Check")
        print("="*60)
        
        # Test connection
        await client.admin.command('ping')
        print("✅ MongoDB connection: SUCCESS")
        print(f"🔗 Connection URI: {mongodb_uri}")
        
        # Get database
        db = client["sih_mcb_testing"]
        print(f"📊 Database: {db.name}")
        
        # Check collections
        collections = await db.list_collection_names()
        print(f"📁 Collections: {collections}")
        
        # Check users collection specifically
        if "users" in collections:
            users_count = await db.users.count_documents({})
            print(f"👥 Users in database: {users_count}")
            
            if users_count > 0:
                # Get sample users
                sample_users = await db.users.find({}, {"username": 1, "role": 1, "email": 1, "is_active": 1}).limit(5).to_list(length=5)
                print("\n🔍 Sample users:")
                for user in sample_users:
                    print(f"  • {user.get('username')} ({user.get('role')}) - {user.get('email')} - Active: {user.get('is_active')}")
        else:
            print("⚠️  Users collection not found")
        
        # Database stats
        stats = await db.command("dbStats")
        print(f"\n📈 Database Statistics:")
        print(f"  • Storage Size: {stats.get('storageSize', 0):,} bytes")
        print(f"  • Data Size: {stats.get('dataSize', 0):,} bytes")
        print(f"  • Collections: {stats.get('collections', 0)}")
        print(f"  • Objects: {stats.get('objects', 0):,}")
        
        # Server info
        server_info = await client.server_info()
        print(f"\n🖥️  MongoDB Server:")
        print(f"  • Version: {server_info.get('version', 'Unknown')}")
        print(f"  • Platform: {server_info.get('os', {}).get('type', 'Unknown')}")
        
        print(f"\n✅ Database check completed at {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        
        # Close connection
        client.close()
        
    except Exception as e:
        print(f"❌ Database check failed: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    asyncio.run(check_database_status())
