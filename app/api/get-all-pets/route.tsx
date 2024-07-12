 
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // Generate a timestamp to use as a query parameter
    const timestamp = new Date().getTime();
    const pets = await sql`SELECT * FROM Pets;`;

    // Return the response with the current timestamp
    return NextResponse.json({ pets, timestamp }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
