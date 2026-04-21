from sqlalchemy import Column, Integer, String, Text, ForeignKey, DateTime, Enum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.database import Base
import enum

# --- Enums ---
class UserRole(str, enum.Enum):
    student = "student"
    admin = "admin"

class ComplaintStatus(str, enum.Enum):
    pending = "pending"
    in_progress = "in_progress"
    resolved = "resolved"

class ComplaintCategory(str, enum.Enum):
    plumbing = "plumbing"
    electrical = "electrical"
    carpentry = "carpentry"
    general = "general"

# --- User Table ---
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String, nullable=False)
    student_number = Column(String, unique=True, nullable=False)
    email = Column(String, unique=True, nullable=False)
    residence = Column(String, nullable=False)
    room_number = Column(String, nullable=False)
    password = Column(String, nullable=False)
    role = Column(Enum(UserRole), default=UserRole.student)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    complaints = relationship("Complaint", back_populates="owner")

# --- Complaint Table ---
class Complaint(Base):
    __tablename__ = "complaints"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(Text, nullable=False)
    category = Column(Enum(ComplaintCategory), nullable=False)
    status = Column(Enum(ComplaintStatus), default=ComplaintStatus.pending)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    image_url = Column(String, nullable=True)
    
    user_id = Column(Integer, ForeignKey("users.id"))
    owner = relationship("User", back_populates="complaints")