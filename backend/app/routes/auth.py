from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from datetime import timedelta
from app.models.user import LoginRequest, Token, User, UserCreate
from app.utils.auth import (
    authenticate_user, 
    create_access_token, 
    get_current_user,
    get_password_hash
)
from app.config.database import get_database
import os

router = APIRouter()

@router.post("/login", response_model=dict)
async def login(login_data: LoginRequest, db=Depends(get_database)):
    """Login endpoint"""
    try:
        # For demo purposes, accept admin/admin
        if login_data.username == "admin" and login_data.password == "admin":
            access_token_expires = timedelta(minutes=int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 30)))
            access_token = create_access_token(
                data={"sub": "admin"}, expires_delta=access_token_expires
            )
            
            return {
                "success": True,
                "message": "Login successful",
                "token": access_token,
                "user": {
                    "id": "admin",
                    "username": "admin",
                    "email": "admin@mcb-testing.com",
                    "role": "admin"
                }
            }
        
        # Authenticate user from database
        user = await authenticate_user(db, login_data.username, login_data.password)
        if not user:
            return {
                "success": False,
                "message": "Invalid username or password"
            }
        
        access_token_expires = timedelta(minutes=int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 30)))
        access_token = create_access_token(
            data={"sub": user["username"]}, expires_delta=access_token_expires
        )
        
        return {
            "success": True,
            "message": "Login successful",
            "token": access_token,
            "user": {
                "id": str(user["_id"]),
                "username": user["username"],
                "email": user.get("email"),
                "role": user.get("role", "user")
            }
        }
        
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Login failed: {str(e)}"
        )

@router.post("/logout")
async def logout(current_user: dict = Depends(get_current_user)):
    """Logout endpoint - invalidate token"""
    try:
        # In a production environment, you would:
        # 1. Add the token to a blacklist stored in Redis/Database
        # 2. Or implement token revocation
        # For now, we'll just return success as the frontend handles token removal
        
        return {
            "success": True, 
            "message": f"User {current_user.get('username', 'Unknown')} logged out successfully"
        }
    except Exception as e:
        return {
            "success": True,  # Always return success for logout
            "message": "Logged out successfully"
        }

@router.get("/me", response_model=User)
async def read_users_me(current_user: dict = Depends(get_current_user)):
    """Get current user information"""
    return current_user

@router.post("/register", response_model=dict)
async def register(user_data: UserCreate, db=Depends(get_database)):
    """Register new user"""
    try:
        # Check if user already exists
        existing_user = await db.users.find_one({"username": user_data.username})
        if existing_user:
            return {
                "success": False,
                "message": "Username already exists"
            }
        
        # Hash password and create user
        hashed_password = get_password_hash(user_data.password)
        user_dict = user_data.dict(exclude={"password"})
        user_dict["hashed_password"] = hashed_password
        
        result = await db.users.insert_one(user_dict)
        
        if result.inserted_id:
            return {
                "success": True,
                "message": "User registered successfully",
                "user_id": str(result.inserted_id)
            }
        else:
            return {
                "success": False,
                "message": "Failed to register user"
            }
            
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Registration failed: {str(e)}"
        )
