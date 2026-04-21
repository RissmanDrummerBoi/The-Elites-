from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.database import get_db
from app import models, schemas
from app.auth import create_access_token, get_current_user
from passlib.context import CryptContext

router = APIRouter(tags=["Users"])

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str):
    return pwd_context.hash(password)

def verify_password(plain, hashed):
    return pwd_context.verify(plain, hashed)

# --- Register ---
@router.post("/register", response_model=schemas.UserResponse, status_code=status.HTTP_201_CREATED)
def register(user: schemas.UserCreate, db: Session = Depends(get_db)):
    existing = db.query(models.User).filter(
        (models.User.email == user.email) | 
        (models.User.student_number == user.student_number)
    ).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email or student number already registered")
    
    new_user = models.User(
        full_name=user.full_name,
        student_number=user.student_number,
        email=user.email,
        residence=user.residence,
        room_number=user.room_number,
        password=hash_password(user.password),
        role=user.role
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

# --- Login ---
@router.post("/login", response_model=schemas.Token)
def login(credentials: schemas.LoginRequest, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.student_number == credentials.student_number).first()
    if not user or not verify_password(credentials.password, user.password):
        raise HTTPException(status_code=403, detail="Invalid student number or password")
    
    token = create_access_token({"user_id": user.id})
    return {"access_token": token, "token_type": "bearer"}

# --- Get Current User Profile ---
@router.get("/me", response_model=schemas.UserResponse)
def get_me(current_user: models.User = Depends(get_current_user)):
    return current_user