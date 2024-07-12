import { list } from "@vercel/blob";
import Image from "next/image";
import { DeleteButton } from "./deleteButton";
export default async function AllFilesPage(){
    const blobs =await list();
    return (
        <div>
            <h1>Files</h1>
            <ul>
                {
                    blobs.blobs.map((blob) =>(
                       <li key={blob.pathname}>
                        <a href={blob.url} target="_blank"  rel="noopener noreferrer">
                            
                        <Image src={blob.url} alt ={blob.pathname} width={200} height = {200} />
                        {blob.pathname} {blob.size} 
                        
                        </a>
                       <DeleteButton url={blob.url}/>
                       </li> 
                    ))
                }
            </ul>
        </div>
    )
}