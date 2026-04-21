import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { api } from "@/services/api";
import Navbar from "@/components/Navbar";
import { Upload, X, CheckCircle } from "lucide-react";

const categories = ["plumbing", "electrical", "carpentry", "general"];

const SubmitComplaint = () => {
  const [searchParams] = useSearchParams();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(searchParams.get("category")?.toLowerCase() || "");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (file: File) => {
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) handleImageChange(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("token") || "";
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category.toLowerCase());
      formData.append("description", description);
      if (image) formData.append("image", image);
      await api.submitComplaint(formData, token);
      setSuccess(true);
      setTimeout(() => navigate("/my-complaints"), 2000);
    } catch {
      alert("Failed to submit complaint");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-200";

  if (success) {
    return (
      <div className="min-h-screen bg-muted/30">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-32 animate-fade-in">
          <CheckCircle className="text-green-500" size={64} />
          <h2 className="text-2xl font-display text-foreground mt-4">Complaint Submitted!</h2>
          <p className="text-muted-foreground mt-2">Redirecting to your complaints...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <h1 className="text-3xl font-display text-foreground mb-2 animate-fade-in">Submit a Complaint</h1>
        <p className="text-muted-foreground mb-8 animate-fade-in">Describe the maintenance issue in detail</p>

        <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className={inputClass} placeholder="Brief title of the issue" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className={inputClass} required>
              <option value="">Select category</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={`${inputClass} min-h-[120px] resize-y`}
              placeholder="Describe the issue in detail..."
              required
            />
          </div>

          {/* Image upload */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Attach Photo (optional)</label>
            <div
              onDrop={handleDrop}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 cursor-pointer ${
                dragOver ? "border-secondary bg-secondary/5" : "border-input hover:border-secondary/50"
              }`}
              onClick={() => document.getElementById("file-input")?.click()}
            >
              {preview ? (
                <div className="relative inline-block">
                  <img src={preview} alt="Preview" className="max-h-48 rounded-lg mx-auto" />
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setImage(null); setPreview(null); }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center"
                  >
                    <X size={14} />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <Upload size={32} className="text-secondary" />
                  <p className="text-sm">Drag & drop an image or <span className="text-secondary font-medium">click to browse</span></p>
                </div>
              )}
              <input
                id="file-input"
                type="file"
                accept="image/*"
                onChange={(e) => e.target.files?.[0] && handleImageChange(e.target.files[0])}
                className="hidden"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg gold-gradient text-secondary-foreground font-semibold hover:brightness-110 transition-all duration-200 disabled:opacity-50 shadow-lg"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-secondary-foreground/30 border-t-secondary-foreground rounded-full animate-spin-slow" />
                Submitting...
              </span>
            ) : (
              "Submit Complaint"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitComplaint;