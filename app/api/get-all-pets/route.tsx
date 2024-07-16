import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const imagedata = await sql`SELECT * FROM imagepdf;`;

    // Return the response with the pets data
    return NextResponse.json({ images: imagedata.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
