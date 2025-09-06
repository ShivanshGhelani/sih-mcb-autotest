import os
from motor.motor_asyncio import AsyncIOMotorClient
from pymongo.errors import ConnectionFailure
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class Database:
    client: AsyncIOMotorClient = None
    database = None

db = Database()

async def get_database():
    return db.database

async def connect_to_mongo():
    """Create database connection"""
    try:
        mongodb_uri = os.getenv("MONGODB_URI", "mongodb://localhost:27017")
        db.client = AsyncIOMotorClient(mongodb_uri)
        
        # Test the connection
        await db.client.admin.command('ping')
        logger.info("Successfully connected to MongoDB")
        
        # Get database name from URI or use default
        db_name = "sih_mcb_testing"
        db.database = db.client[db_name]
        
        return db.database
        
    except ConnectionFailure as e:
        logger.error(f"Failed to connect to MongoDB: {e}")
        raise e
    except Exception as e:
        logger.error(f"Unexpected error connecting to MongoDB: {e}")
        raise e

async def close_mongo_connection():
    """Close database connection"""
    try:
        if db.client:
            db.client.close()
            logger.info("Disconnected from MongoDB")
    except Exception as e:
        logger.error(f"Error closing MongoDB connection: {e}")
