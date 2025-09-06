from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import auth, dashboard
from app.config.database import connect_to_mongo, close_mongo_connection

app = FastAPI(
    title="SIH MCB Testing API",
    description="Automated High-Current Short-Circuit Test System for MCB API",
    version="1.0.0"
)

ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:3000",
    "http://your-production-url.com"
    
]

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/api/auth", tags=["authentication"])
app.include_router(dashboard.router, prefix="/api/dashboard", tags=["dashboard"])

@app.on_event("startup")
async def startup_event():
    await connect_to_mongo()

@app.on_event("shutdown")
async def shutdown_event():
    await close_mongo_connection()

@app.get("/")
async def root():
    return {"message": "SIH MCB Testing System API", "status": "running"}

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "message": "API is running correctly"}
