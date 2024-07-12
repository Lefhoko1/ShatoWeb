import { uploadFileToVercelBlob } from '@/lib/vercelBlob';
import { query } from '@/lib/db';

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get('file');

  if (!file) {
    return new Response('No file uploaded', { status: 400 });
  }

  const uploadResult = await uploadFileToVercelBlob(file);

  const fileDetails = {
    url: uploadResult.fileUrl,
    type: file.type,
    name: file.name,
  };

  await query(
    'INSERT INTO files (url, type, name) VALUES ($1, $2, $3)',
    [fileDetails.url, fileDetails.type, fileDetails.name]
  );

  return new Response(JSON.stringify(fileDetails), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
