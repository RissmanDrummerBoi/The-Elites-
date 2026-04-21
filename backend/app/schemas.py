from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime
from app.models import ComplaintStatus, ComplaintCategory, UserRole

# --- User Schemas ---
class UserCreate(BaseModel):
    full_name: str
    student_number: str
    email: EmailStr
    residence: str
    room_number: str
    password: str
    role: UserRole = UserRole.student

class UserResponse(BaseModel):
    id: int
    full_name: str
    student_number: str
    email: str
    residence: str
    room_number: str
    role: UserRole
    created_at: datetime

    class Config:
        from_attributes = True

# --- Auth Schemas ---
class LoginRequest(BaseModel):
    student_number: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    id: Optional[int] = None

# --- Complaint Schemas ---
class ComplaintCreate(BaseModel):
    title: str
    description: str
    category: ComplaintCategory

class ComplaintUpdate(BaseModel):
    status: ComplaintStatus

class ComplaintResponse(BaseModel):
    id: int
    title: str
    description: str
    category: ComplaintCategory
    status: ComplaintStatus
    created_at: datetime
    updated_at: Optional[datetime] = None
    image_url: Optional[str] = None
    user_id: int

    class Config:
        from_attributes = True