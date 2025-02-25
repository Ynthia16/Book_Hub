# schemas.py
from pydantic import BaseModel
from typing import Optional

class BookBase(BaseModel):
    title: str
    author: str
    description: Optional[str] = None
    cover: Optional[str] = None

class BookResponse(BookBase):
    id: int

    class Config:
        orm_mode = True
