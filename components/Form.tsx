import { useState } from "react";
import Image from "next/image";

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [inProgress, setInProgress] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!file) {
        throw new Error("Please select a file");
      }

      setInProgress(true);

      const formData = new FormData();
      formData.append("file", file as Blob);

      const response = await fetch("/api/file", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload file");
      }

      const data = await response.json();
      setPreview(data.url);

      // Extract file extension
      const fileExtension = file.name.split('.').pop();
      console.log("File extension:", fileExtension);

      const petName = data.url;
      const ownerName = data.downloadUrl;

      // Pass the preview URL to the backend API as query parameters
      const addPetResponse = await fetch(`/api/add-pet?petName=${encodeURIComponent(petName)}&ownerName=${encodeURIComponent(ownerName)}`, {
        method: "GET",
      });

      if (!addPetResponse.ok) {
        throw new Error("Failed to add pet");
      }

      const petsData = await addPetResponse.json();
      console.log("New pets list:", petsData.pets);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setInProgress(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white shadow-md rounded-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">
            Select a file
          </label>
          <input
            type="file"
            id="file-upload"
            onChange={(e) => setFile(e.target.files?.item(0) || null)}
            className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        {preview && (
          <div className="mt-4">
            <Image src={preview} alt="File preview" width={400} height={400} className="rounded-md" />
          </div>
        )}

        <button
          type="submit"
          disabled={inProgress}
          className={`w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
            inProgress ? "cursor-not-allowed" : ""
          }`}
        >
          {inProgress ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
}
