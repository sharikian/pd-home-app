const admins = [
    { username: "admin", password: "1234", id: "989021111111" }
  ];
  const users = [
    { username: "user", password: "1234", id: "9023333333" }
  ];
  
  export default function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    const { username, password, role } = req.body;
    const data = role === 'admin' ? admins : users;
    const user = data.find(u => u.username === username && u.password === password);
  
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  
    res.status(200).json({ message: "Authenticated", user });
  }