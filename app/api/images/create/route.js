import { NextResponse } from 'next/server';
import Image from '../../../../models/Image';

export async function POST(req) {
  try {
    // Hardcoded sample data
    const name = "Sample Image";
    const description = "This is a sample image description.";
    const filename = "sample_image.jpg";

    // Save image metadata to database
    const newImage = await Image.create({
      name,
      description,
      filename
    });

    return NextResponse.json(newImage, { status: 200 });
  } catch (error) {
    console.error('Error saving image:', error);
    return NextResponse.json({ error: 'Failed to save image to database' }, { status: 500 });
  }
}
