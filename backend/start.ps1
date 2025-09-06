# PowerShell startup script for FastAPI backend

# Activate virtual environment
& .\sih\Scripts\Activate.ps1

# Start the FastAPI server
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
