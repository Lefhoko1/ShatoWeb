"use client"
import { title } from "@/components/primitives"; 
import Form from "@/components/Form";   

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
      <h1>Upload Files here</h1> 
      <Form/>
       

     
    </div>
    </div> 
    
  );
}
