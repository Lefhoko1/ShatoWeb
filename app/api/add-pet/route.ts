import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const petName = searchParams.get('petName');
    const ownerName = searchParams.get('ownerName');
    const fileextention = searchParams.get('contentType');

    if (!petName || !ownerName || !fileextention) {
      throw new Error('Data is missing');
    }

    await sql`INSERT INTO imagepdf (url, dowloadurl, pathname, extension) VALUES (${petName}, ${ownerName}, ${fileextention}, ${fileextention});`;

    const images = await sql`SELECT * FROM imagepdf;`;

    return NextResponse.json({ images }, { status: 200 });
  } catch (error: any) {  // Change 'error' type to 'any' for handling unknown errors
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
