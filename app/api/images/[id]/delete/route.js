// app/api/images/[id]/delete/route.js

import Image from '../../../../models/Image';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      const image = await Image.findByPk(id);
      if (!image) {
        return res.status(404).json({ error: 'Image not found' });
      }

      await image.destroy();

      res.status(200).json({ message: 'Image deleted successfully' });
    } catch (error) {
      console.error('Error deleting image:', error);
      res.status(500).json({ error: 'Failed to delete image' });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
