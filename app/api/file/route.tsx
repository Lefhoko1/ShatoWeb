import {NextResponse} from "next/server";
import { put, del } from "@vercel/blob"; 
import { NextApiRequest } from "next";

export   async function POST(req:Request) {
 const form = await req.formData();
 const file = form.get("file")   as File;
 
 if(!file.name)
 {
    return NextResponse.json({error: "No file provided"}, {status : 400});

 }
 const blob = await put(file.name, file, {
    access: "public",
 })
 return Response.json(blob)
}

