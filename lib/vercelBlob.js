import axios from 'axios';
import FormData from 'form-data';

const VERCEL_BLOB_API_URL = process.env.VERCEL_BLOB_API_URL;
const VERCEL_BLOB_API_KEY = process.env.BLOB_READ_WRITE_TOKEN;

export const uploadFileToVercelBlob = async (file) => {
  const form = new FormData();
  form.append('file', file);

  const response = await axios.post(VERCEL_BLOB_API_URL, form, {
    headers: {
      ...form.getHeaders(),
      Authorization: `Bearer ${VERCEL_BLOB_API_KEY}`,
    },
  });

  return response.data;
};
