from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from app.database import engine, Base
from app.routers import users, complaints
import os

# Create all tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="CRMRS API", version="1.0.0")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve uploaded images
os.makedirs("uploads", exist_ok=True)
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

# Routers
app.include_router(users.router)
app.include_router(complaints.router)

@app.get("/")
def root():
    return {"message": "Welcome to CRMRS API 🚀"}