@echo off
REM Startup script for FastAPI backend (Windows)

REM Activate virtual environment
call sih\Scripts\activate.bat

REM Start the FastAPI server
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
