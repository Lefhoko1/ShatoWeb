"use client"
import { title } from "@/components/primitives"; 
import Form from "@/components/Form";
import UploadForm from "@/components/UploadForm"; 
import AllFilesPage from "@/components/allfiles"
export default function DocsPage() {
  return (
    <div>
      <h1 className={title()}>Docs</h1>
      <div
      style={{
        backgroundImage: 'url(/images/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <h1>Upload Files</h1>
      <Form/>
      <UploadForm/>

     
    </div>
    </div> 
    
  );
}
