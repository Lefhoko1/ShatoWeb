'use client';

import { useState } from 'react';

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [uploadResult, setUploadResult] = useState(null);
  const [error, setError] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError(null);
    setUploadResult(null);
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    setIsUploading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      setUploadResult(result);
    } catch (err) {
      setError('Failed to upload file. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-5 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Upload File</h1>
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4 block w-full text-sm text-gray-500"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        disabled={isUploading}
      >
        {isUploading ? 'Uploading...' : 'Upload'}
      </button>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {uploadResult && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Upload Result:</h3>
          <p>URL: <a href={uploadResult.url} target="_blank" className="text-blue-500 underline">{uploadResult.url}</a></p>
          <p>Type: {uploadResult.type}</p>
          <p>Name: {uploadResult.name}</p>
        </div>
      )}
    </div>
  );
}
