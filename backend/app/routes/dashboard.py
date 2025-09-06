from fastapi import APIRouter, Depends
from app.config.database import get_database
from app.utils.auth import get_current_user

router = APIRouter()

@router.get("/stats")
async def get_dashboard_stats(
    current_user: dict = Depends(get_current_user),
    db=Depends(get_database)
):
    """Get dashboard statistics for MCB testing system"""
    try:
        # In a real application, these would come from your database
        # For now, return mock data that matches the frontend expectations
        
        stats = {
            "testsExecuted": 1247,
            "activeSessions": 3,
            "systemUptime": 99.8,
            "complianceRate": 98.5
        }
        
        return {
            "success": True,
            "data": stats,
            "message": "Dashboard stats retrieved successfully"
        }
        
    except Exception as e:
        return {
            "success": False,
            "data": {
                "testsExecuted": 1247,
                "activeSessions": 3,
                "systemUptime": 99.8,
                "complianceRate": 98.5
            },
            "message": f"Error retrieving stats, using default values: {str(e)}"
        }
