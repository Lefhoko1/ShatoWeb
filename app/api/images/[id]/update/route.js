// app/api/images/[id]/update/route.js

import Image from '../../../../models/Image';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    try {
      const { name, description } = req.body;

      const image = await Image.findByPk(id);
      if (!image) {
        return res.status(404).json({ error: 'Image not found' });
      }

      image.name = name;
      image.description = description;
      await image.save();

      res.status(200).json(image);
    } catch (error) {
      console.error('Error updating image:', error);
      res.status(500).json({ error: 'Failed to update image' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
