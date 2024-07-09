// app/api/images/[id]/route.js

import Image from '../../../../models/Image';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const image = await Image.findByPk(id);
      if (!image) {
        return res.status(404).json({ error: 'Image not found' });
      }
      res.status(200).json(image);
    } catch (error) {
      console.error('Error fetching image:', error);
      res.status(500).json({ error: 'Failed to fetch image' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
