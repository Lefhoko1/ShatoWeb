'use client';

import { useState } from 'react';

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [uploadResult, setUploadResult] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    setUploadResult(result);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploadResult && (
        <div>
          <h3>Upload Result:</h3>
          <p>URL: {uploadResult.url}</p>
          <p>Type: {uploadResult.type}</p>
          <p>Name: {uploadResult.name}</p>
        </div>
      )}
    </div>
  );
}
