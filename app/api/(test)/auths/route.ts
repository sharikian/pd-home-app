import { NextRequest, NextResponse } from 'next/server';

const admins = [
  { username: "admin", password: "1234", id: "989021111111" }
];
const users = [
  { username: "user", password: "1234", id: "9023333333" }
];

export async function POST(request: NextRequest) {
  const { username, password, role } = await request.json();
  const data = role === 'admin' ? admins : users;
  const user = data.find(u => u.username === username && u.password === password);

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  return NextResponse.json({ message: "Authenticated", user });
}