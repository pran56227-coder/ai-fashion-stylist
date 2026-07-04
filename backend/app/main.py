from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import os
import base64
from groq import Groq

app = FastAPI()

# CORS Middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Kept your working environment variable with 'K'
GROK_API_KEY = os.getenv("GROK_API_KEY")
client = Groq(api_key=GROK_API_KEY)

@app.get("/")
def home():
    return {"message": "AI Fashion Stylist Backend Running with Groq Vision"}

@app.post("/analyze")
async def analyze(file: UploadFile = File(...)):
    try:
        # Read the file contents directly from memory
        file_bytes = await file.read()
        
        # Convert image bytes into a Base64 string for the Vision API
        base64_image = base64.b64encode(file_bytes).decode("utf-8")
        
        # Determine the correct data type header based on file extension
        ext = file.filename.split(".")[-1].lower()
        mime_type = "image/jpeg" if ext in ["jpg", "jpeg"] else f"image/{ext}"

        # Complete prompt instructing the vision model
        prompt = """
        You are a professional fashion stylist. Look closely at this outfit image.
        Analyze the outfit and provide your feedback structured exactly like this:
        
        1. OUTFIT TYPE: (e.g., Casual, Formal, Streetwear, Ethnic)
        2. COLOR PALETTE: (Describe the core colors and how they match)
        3. KEY STRENGTHS: (What works well about this look)
        4. AREAS FOR IMPROVEMENT: (What layers, accessories, or shoes would elevate this further)
        5. FASHION SCORE: (Give a rating out of 10 with a one-sentence justification)
        
        Keep your styling recommendations direct, specific to the garment seen, and highly actionable.
        """

        # ✅ Switched to a valid, active multi-modal vision model
        response = client.chat.completions.create(
            model="meta-llama-4-scout-17b-16e-instruct",  
            messages=[
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text", 
                            "text": prompt
                        },
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:{mime_type};base64,{base64_image}"
                            }
                        }
                    ]
                }
            ],
            max_tokens=500,
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
