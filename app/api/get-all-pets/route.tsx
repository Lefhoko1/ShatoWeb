import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const pets = await sql`SELECT * FROM Pets;`;

    // Return the response with the pets data
    return NextResponse.json({ pets: pets.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
