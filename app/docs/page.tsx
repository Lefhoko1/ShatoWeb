import { title } from "@/components/primitives"; 
import UploadForm from "@/components/uploadForm"
import ImageList from "@/components/ImageList"
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
      <UploadForm/>
     
    </div>
    </div> 
    
  );
}
