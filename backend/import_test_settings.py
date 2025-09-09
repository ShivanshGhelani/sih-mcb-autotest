#!/usr/bin/env python3
"""
Import MCB test settings into MongoDB
This script imports the test configuration data into the MongoDB settings collection.
"""

import json
import sys
import asyncio
from datetime import datetime
from pymongo import MongoClient
from app.config.database import get_database

async def import_test_settings():
    """Import test settings from JSON file into MongoDB"""
    try:
        # Get database connection
        db = await get_database()
        settings_collection = db.settings
        
        # Read the JSON file
        with open('mongodb_test_settings.json', 'r') as file:
            test_settings = json.load(file)
        
        print(f"Loading {len(test_settings)} test settings into MongoDB...")
        
        # Clear existing settings (optional - remove this if you want to append)
        existing_count = await settings_collection.count_documents({})
        if existing_count > 0:
            print(f"Found {existing_count} existing settings. Clearing collection...")
            await settings_collection.delete_many({})
        
        # Insert the test settings
        result = await settings_collection.insert_many(test_settings)
        
        print(f"✅ Successfully imported {len(result.inserted_ids)} test settings!")
        
        # Verify the import
        total_settings = await settings_collection.count_documents({})
        print(f"📊 Total test settings in database: {total_settings}")
        
        # Display summary of imported settings
        print("\n📋 Imported Test Settings Summary:")
        print("-" * 50)
        for setting in test_settings:
            print(f"• {setting['_id']}: {setting['mcbModel']} - {setting['testDesignation']}")
        
        return True
        
    except FileNotFoundError:
        print("❌ Error: mongodb_test_settings.json file not found!")
        print("Make sure you're running this script from the backend directory.")
        return False
        
    except Exception as e:
        print(f"❌ Error importing test settings: {str(e)}")
        return False

async def verify_settings():
    """Verify the imported settings by displaying them"""
    try:
        db = await get_database()
        settings_collection = db.settings
        
        print("\n🔍 Verifying Test Settings in Database:")
        print("=" * 60)
        
        settings = await settings_collection.find({}).to_list(None)
        
        for setting in settings:
            print(f"\nTest ID: {setting['_id']}")
            print(f"MCB Model: {setting['mcbModel']}")
            print(f"Test: {setting['testDesignation']}")
            print(f"Current: {setting['prospectiveCurrent_A']}A")
            print(f"Power Factor: {setting['powerFactor_cos_phi']}")
            print(f"Voltage: {setting['testVoltage_V']}V")
            print(f"Operating Duty: {setting['operatingDuty']}")
            print(f"R Config: {setting['r_config_code']}")
            print(f"XL Config: {setting['xl_config_code']}")
            print(f"Mimic - R Blinks: {setting['mimic']['r_blinks']}, XL Blinks: {setting['mimic']['xl_blinks']}")
            print("-" * 40)
        
        return True
        
    except Exception as e:
        print(f"❌ Error verifying settings: {str(e)}")
        return False

async def main():
    """Main async function"""
    print("🔧 MCB Test Settings Import Tool")
    print("=" * 40)
    
    # Import the settings
    if await import_test_settings():
        
        # Ask if user wants to verify
        if len(sys.argv) > 1 and sys.argv[1] == "--verify":
            await verify_settings()
        else:
            print("\n💡 Use --verify flag to display all imported settings")
            print("Example: python import_test_settings.py --verify")
    
    print("\n✨ Import process completed!")

if __name__ == "__main__":
    asyncio.run(main())
