import { useState } from "react";

function ImageUploader() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Create preview URL
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const uploadImage = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      // CHANGED: Replaced http://127.0.0.1:8000 with the environment variable using backticks
      const res = await fetch(`${import.meta.env.VITE_API_URL}analyze`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.log("Upload error:", error);
    }
  };

  return (
    <div style={{ padding: "20px", color: "white" }}>
      
      <h2>Upload Your Outfit 👗</h2>

      {/* File Input */}
      <input type="file" onChange={handleFileChange} />

      {/* Image Preview */}
      {preview && (
        <div style={{ marginTop: "15px" }}>
          <p>Preview:</p>
          <img
            src={preview}
            alt="preview"
            style={{
              width: "250px",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          />
        </div>
      )}

      {/* Upload Button */}
      <div>
        <button
          onClick={uploadImage}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Upload & Analyze
        </button>
      </div>

      {/* Backend Response */}
      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>Backend Response:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
