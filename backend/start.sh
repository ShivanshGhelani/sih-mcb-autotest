#!/bin/bash
# Startup script for FastAPI backend

# Activate virtual environment
source sih/Scripts/activate

# Start the FastAPI server
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
