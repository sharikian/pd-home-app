import { NextRequest, NextResponse } from 'next/server';

// In-memory data (could be replaced with a DB or file)
let admins = [
  { username: "admin", password: "1234", id: "989021111111" }
];

export async function GET() {
  return NextResponse.json(admins);
}

export async function POST(request: NextRequest) {
  const newAdmin = await request.json();
  newAdmin.id = Math.random().toString(36).slice(2, 6);
  admins.push(newAdmin);
  return NextResponse.json(newAdmin, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const updatedAdmin = await request.json();
  const adminIndex = admins.findIndex(a => a.id === id);
  if (adminIndex === -1) {
    return NextResponse.json({ error: "Admin not found" }, { status: 404 });
  }
  admins[adminIndex] = { ...admins[adminIndex], ...updatedAdmin };
  return NextResponse.json(admins[adminIndex]);
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  admins = admins.filter(a => a.id !== id);
  return NextResponse.json({ message: "Admin deleted" });
}