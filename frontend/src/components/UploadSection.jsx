import React, { useState, useRef } from "react";

function UploadSection() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(""); // "", "uploading", "success", "error"
  
  const fileInputRef = useRef(null);

  // Processes and validates file inputs
  const handleFileSelection = (selectedFile) => {
    if (!selectedFile) return;

    // Validate image format types
    const validTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!validTypes.includes(selectedFile.type)) {
      alert("Invalid format! Please upload a JPG, JPEG, or PNG image.");
      return;
    }

    setFile(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
    setUploadStatus(""); // Reset state for a new upload attempt
  };

  // Direct actions for the hidden file browser input
  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleInputChange = (e) => {
    handleFileSelection(e.target.files[0]);
  };

  // Drag over handlers to trigger container glow effects
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelection(e.dataTransfer.files[0]);
    }
  };

  // Stream binary to server backend
  const uploadToBackend = async () => {
    if (!file) return;

    setUploadStatus("uploading");

    const formData = new FormData();
    formData.append("image", file); // Key parameter matching standard backend ingest tools

    try {
      // Connect to your production endpoint (e.g., "/api/analyze-outfit")
      const response = await fetch("https://ai-fashion-stylist-backend.onrender.com/", {
        method: "POST",
        body: formData,
        // Content-Type header is left completely blank intentionally 
        // to let the browser automatically structure multipart boundaries.
      });

      if (!response.ok) throw new Error("Server rejected upload payload");

      const data = await response.json();
      setUploadStatus("success");
      console.log("Analysis success data:", data);

    } catch (error) {
      console.error("Backend transmission issue:", error);
      setUploadStatus("error");
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10">
        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Text Information Panel */}
          <div>
            <p className="uppercase tracking-[5px] text-pink-400">Get Started</p>
            <h2 className="mt-5 text-5xl font-black text-white">Upload Your Outfit</h2>
            <p className="mt-6 text-gray-300 leading-8">
              Let our AI analyze your clothing and provide outfit recommendations, color matching, and styling advice.
            </p>

            {/* Action panel triggers smoothly only when a file is ready */}
            {file && (
              <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/5 max-w-sm">
                <p className="text-sm text-gray-400 truncate">
                  Ready: <span className="text-white font-medium">{file.name}</span>
                </p>
                <button 
                  onClick={uploadToBackend}
                  disabled={uploadStatus === "uploading"}
                  className="mt-4 w-full rounded-full bg-gradient-to-r from-pink-500 to-purple-600 py-3 text-white font-semibold hover:opacity-90 disabled:opacity-50 transition"
                >
                  {uploadStatus === "uploading" ? "Analyzing Outfit..." : "Analyze with AI ✨"}
                </button>
                
                {uploadStatus === "success" && <p className="text-emerald-400 text-sm mt-3 text-center font-medium">✨ Analysis Complete!</p>}
                {uploadStatus === "error" && <p className="text-rose-400 text-sm mt-3 text-center font-medium">❌ System upload error. Try again.</p>}
              </div>
            )}
          </div>

          {/* Drag & Drop Interactivity Zone */}
          <div>
            <div 
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-3xl p-16 text-center transition min-h-[350px] flex flex-col justify-center items-center ${
                isDragging 
                  ? "border-cyan-400 bg-white/10 scale-[1.02]" 
                  : "border-purple-500 hover:border-cyan-400"
              }`}
            >
              {/* Invisible native explorer link */}
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleInputChange} 
                accept=".jpg,.jpeg,.png" 
                className="hidden" 
              />

              {previewUrl ? (
                <div className="flex flex-col items-center w-full">
                  <div className="relative group max-h-56 overflow-hidden rounded-2xl border border-white/10">
                    <img 
                      src={previewUrl} 
                      alt="Outfit Preview" 
                      className="max-h-56 w-auto object-contain transition group-hover:scale-105 duration-300"
                    />
                  </div>
                  <button 
                    onClick={handleBrowseClick} 
                    className="mt-5 text-sm text-purple-400 font-medium hover:text-cyan-400 hover:underline transition"
                  >
                    Choose a different file
                  </button>
                </div>
              ) : (
                <>
                  <div className="text-7xl">☁️</div>
                  <h3 className="text-2xl text-white mt-6 font-bold">Drag & Drop Image</h3>
                  <p className="text-gray-400 mt-3 text-sm">JPG • PNG • JPEG</p>
                  <button 
                    onClick={handleBrowseClick}
                    className="mt-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 text-white font-semibold hover:scale-105 transition shadow-lg shadow-purple-500/20"
                  >
                    Browse Files
                  </button>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default UploadSection;
