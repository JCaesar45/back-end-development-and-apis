import math
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PrimeRequest(BaseModel):
    number: int

def is_prime(n: int) -> bool:
    if n <= 1: return False
    if n <= 3: return True
    if n % 2 == 0 or n % 3 == 0: return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0: return False
        i += 6
    return True

@app.post("/check")
async def check_prime(req: PrimeRequest):
    if req.number < 0:
        raise HTTPException(status_code=400, detail="Negative integers are not valid assets.")
    return {"number": req.number, "is_prime": is_prime(req.number), "status": "secured"}
