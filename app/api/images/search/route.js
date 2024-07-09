// app/api/images/search/route.js

import Image from '../../../models/Image';

export default async function handler(req, res) {
  const { name } = req.query;

  if (req.method === 'GET') {
    try {
      const images = await Image.findAll({
        where: {
          name: { [Op.like]: `%${name}%` }  // Use Sequelize's operator for case-insensitive LIKE query
        }
      });
      res.status(200).json(images);
    } catch (error) {
      console.error('Error searching images:', error);
      res.status(500).json({ error: 'Failed to search images' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
