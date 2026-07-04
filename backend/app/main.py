from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os
from groq import Groq

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# 🔑 Your Groq API key
GROK_API_KEY = "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"

client = Groq(api_key=GROK_API_KEY)


@app.get("/")
def home():
    return {"message": "AI Fashion Stylist Backend Running with Groq"}


@app.post("/analyze")
async def analyze(file: UploadFile = File(...)):
    filepath = os.path.join(UPLOAD_FOLDER, file.filename)

    # Save image
    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Simple fashion prompt
    prompt = """
You are a professional fashion stylist.

Analyze the outfit and give:
1. Outfit type (casual / formal / streetwear)
2. Color combination
3. Improvements
4. Fashion score out of 10

Keep response short and structured.
"""

    try:
        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",   # ✅ FIXED MODEL
            messages=[
                {"role": "user", "content": prompt}
            ]
        )

        return {
            "success": True,
            "filename": file.filename,
            "ai_response": response.choices[0].message.content
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }
