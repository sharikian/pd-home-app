let users = [
    { username: "user", password: "1234", id: "2fa3" }
  ];
  
  export default function handler(req, res) {
    switch (req.method) {
      case 'GET':
        res.status(200).json(users);
        break;
      case 'POST':
        const newUser = { ...req.body, id: Math.random().toString(36).slice(2, 6) };
        users.push(newUser);
        res.status(201).json(newUser);
        break;
      case 'PUT':
        const { id } = req.query;
        const userIndex = users.findIndex(u => u.id === id);
        if (userIndex === -1) return res.status(404).json({ error: "User not found" });
        users[userIndex] = { ...users[userIndex], ...req.body };
        res.status(200).json(users[userIndex]);
        break;
      case 'DELETE':
        const delId = req.query.id;
        users = users.filter(u => u.id !== delId);
        res.status(200).json({ message: "User deleted" });
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }