import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const petName = searchParams.get('petName');
    const ownerName = searchParams.get('ownerName');

    if (!petName || !ownerName) {
      throw new Error('Pet and owner names required');
    }

    await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;

    const pets = await sql`SELECT * FROM Pets;`;

    return NextResponse.json({ pets }, { status: 200 });
  } catch (error: any) {  // Change 'error' type to 'any' for handling unknown errors
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
