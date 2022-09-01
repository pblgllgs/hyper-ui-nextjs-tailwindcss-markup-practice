export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return getTecnologias(req, res);
    default:
      return res.status(400).json({ message: 'Method not allowed' });
  }
}

const getTecnologias = async (req, res) => {
  const { take = 12, skip = 0 } = req.query;
  const resp = await fetch(
    `https://backend-tecnologias.vercel.app/api/v1/tecnologia?take=${take}&skip=${skip}`
  );
  const response = await resp.json();
  return res.status(200).json(response);
};
