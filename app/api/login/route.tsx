import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('Name');
    

    if (!name) {
      throw new Error('Data is missing');
    }
    
    if(name == "MyLoginFirst")
    {
        console.log("name");
    }
   

    return NextResponse.json({ name }, { status: 200 });
  } catch (error: any) {  // Change 'error' type to 'any' for handling unknown errors
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
