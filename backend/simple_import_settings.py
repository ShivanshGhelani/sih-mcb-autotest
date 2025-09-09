#!/usr/bin/env python3
"""
Simple MongoDB Test Settings Import Script
Direct connection to MongoDB for importing test configuration data.
"""

import json
import sys
import os
from pymongo import MongoClient
from datetime import datetime

def connect_to_mongodb():
    """Connect directly to MongoDB"""
    try:
        # Get MongoDB URI from environment or use default
        mongodb_uri = os.getenv("MONGODB_URI", "mongodb://localhost:27017")
        client = MongoClient(mongodb_uri)
        
        # Test the connection
        client.admin.command('ping')
        print("✅ Successfully connected to MongoDB")
        
        # Get the database
        db = client["sih_mcb_testing"]
        return db
        
    except Exception as e:
        print(f"❌ Error connecting to MongoDB: {str(e)}")
        return None

def import_test_settings():
    """Import test settings from JSON file into MongoDB"""
    try:
        # Connect to database
        db = connect_to_mongodb()
        if db is None:
            return False
        
        settings_collection = db.settings
        
        # Read the JSON file
        with open('mongodb_test_settings.json', 'r') as file:
            test_settings = json.load(file)
        
        print(f"Loading {len(test_settings)} test settings into MongoDB...")
        
        # Clear existing settings (optional - remove this if you want to append)
        existing_count = settings_collection.count_documents({})
        if existing_count > 0:
            print(f"Found {existing_count} existing settings. Clearing collection...")
            settings_collection.delete_many({})
        
        # Insert the test settings
        result = settings_collection.insert_many(test_settings)
        
        print(f"✅ Successfully imported {len(result.inserted_ids)} test settings!")
        
        # Verify the import
        total_settings = settings_collection.count_documents({})
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

def verify_settings():
    """Verify the imported settings by displaying them"""
    try:
        db = connect_to_mongodb()
        if db is None:
            return False
        
        settings_collection = db.settings
        
        print("\n🔍 Verifying Test Settings in Database:")
        print("=" * 60)
        
        settings = list(settings_collection.find({}))
        
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

if __name__ == "__main__":
    print("🔧 MCB Test Settings Import Tool (Direct MongoDB)")
    print("=" * 50)
    
    # Import the settings
    if import_test_settings():
        
        # Ask if user wants to verify
        if len(sys.argv) > 1 and sys.argv[1] == "--verify":
            verify_settings()
        else:
            print("\n💡 Use --verify flag to display all imported settings")
            print("Example: python simple_import_settings.py --verify")
    
    print("\n✨ Import process completed!")
