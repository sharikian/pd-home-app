// In-memory data (could be replaced with a file or DB later)
let admins = [
    { username: "admin", password: "1234", id: "35ef" }
  ];
  
  export default function handler(req, res) {
    switch (req.method) {
      case 'GET':
        res.status(200).json(admins);
        break;
      case 'POST':
        const newAdmin = { ...req.body, id: Math.random().toString(36).slice(2, 6) };
        admins.push(newAdmin);
        res.status(201).json(newAdmin);
        break;
      case 'PUT':
        const { id } = req.query;
        const adminIndex = admins.findIndex(a => a.id === id);
        if (adminIndex === -1) return res.status(404).json({ error: "Admin not found" });
        admins[adminIndex] = { ...admins[adminIndex], ...req.body };
        res.status(200).json(admins[adminIndex]);
        break;
      case 'DELETE':
        const delId = req.query.id;
        admins = admins.filter(a => a.id !== delId);
        res.status(200).json({ message: "Admin deleted" });
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }