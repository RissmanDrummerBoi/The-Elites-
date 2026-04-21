from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File, Form
from sqlalchemy.orm import Session
from app.database import get_db
from app import models, schemas
from app.auth import get_current_user
from typing import List, Optional
import shutil
import os
import uuid

router = APIRouter(prefix="/complaints", tags=["Complaints"])

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

# --- Submit Complaint ---
@router.post("/", response_model=schemas.ComplaintResponse, status_code=status.HTTP_201_CREATED)
async def submit_complaint(
    title: str = Form(...),
    description: str = Form(...),
    category: models.ComplaintCategory = Form(...),
    image: Optional[UploadFile] = File(None),
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    image_url = None
    if image and image.filename:
        ext = image.filename.split(".")[-1]
        filename = f"{uuid.uuid4()}.{ext}"
        filepath = os.path.join(UPLOAD_DIR, filename)
        with open(filepath, "wb") as buffer:
            contents = await image.read()
            buffer.write(contents)
        image_url = f"/uploads/{filename}"

    new_complaint = models.Complaint(
        title=title,
        description=description,
        category=category,
        image_url=image_url,
        user_id=current_user.id
    )
    db.add(new_complaint)
    db.commit()
    db.refresh(new_complaint)
    return new_complaint

# --- Get My Complaints ---
@router.get("/my", response_model=List[schemas.ComplaintResponse])
def get_my_complaints(
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    return db.query(models.Complaint).filter(models.Complaint.user_id == current_user.id).all()

# --- Get All Complaints (Admin) ---
@router.get("/", response_model=List[schemas.ComplaintResponse])
def get_all_complaints(
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    return db.query(models.Complaint).all()

# --- Get Single Complaint ---
@router.get("/{id}", response_model=schemas.ComplaintResponse)
def get_complaint(
    id: int,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    complaint = db.query(models.Complaint).filter(models.Complaint.id == id).first()
    if not complaint:
        raise HTTPException(status_code=404, detail="Complaint not found")
    return complaint

# --- Update Complaint Status ---
@router.patch("/{id}/status", response_model=schemas.ComplaintResponse)
def update_status(
    id: int,
    update: schemas.ComplaintUpdate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    complaint = db.query(models.Complaint).filter(models.Complaint.id == id).first()
    if not complaint:
        raise HTTPException(status_code=404, detail="Complaint not found")
    complaint.status = update.status
    db.commit()
    db.refresh(complaint)
    return complaint

# --- Delete Complaint ---
@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_complaint(
    id: int,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    complaint = db.query(models.Complaint).filter(models.Complaint.id == id).first()
    if not complaint:
        raise HTTPException(status_code=404, detail="Complaint not found")
    db.delete(complaint)
    db.commit()