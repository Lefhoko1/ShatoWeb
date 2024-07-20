import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { del } from '@vercel/blob'; // Import from Vercel Blob

export const dynamic = "force-dynamic";

export async function DELETE(request: Request) {
  const { url } = await request.json();

  try {
    // Delete the record from the database using the URL
    await sql`DELETE FROM imagepdf WHERE url = ${url};`;

    // Delete the specific blob from Vercel Blob Storage
    await del([url]);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
