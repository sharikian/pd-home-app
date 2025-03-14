import { NextRequest, NextResponse } from 'next/server';

let users = [
  { username: "user", password: "1234", id: "2fa3" }
];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const newUser = await request.json();
  newUser.id = Math.random().toString(36).slice(2, 6);
  users.push(newUser);
  return NextResponse.json(newUser, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const updatedUser = await request.json();
  const userIndex = users.findIndex(u => u.id === id);
  if (userIndex === -1) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  users[userIndex] = { ...users[userIndex], ...updatedUser };
  return NextResponse.json(users[userIndex]);
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  users = users.filter(u => u.id !== id);
  return NextResponse.json({ message: "User deleted" });
}