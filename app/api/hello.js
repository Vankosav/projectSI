import connectDB from "../../configs/db";

export default async function handler(req, res) {
  await connectDB(); // Connect to MongoDB

  res.status(200).json({ message: "Hello from Next.js API!" });
}
//import connectDB from "@/configs/db";
import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});

const TestModel = mongoose.models.Test || mongoose.model("Test", TestSchema);

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const { name, age } = body;

  if (!name || !age) {
    return new Response(JSON.stringify({ message: "Name and age are required." }), { status: 400 });
  }

  const newDoc = await TestModel.create({ name, age });
  return new Response(JSON.stringify(newDoc), { status: 201 });
}

export async function GET() {
  await connectDB();
  const documents = await TestModel.find();
  return new Response(JSON.stringify(documents), { status: 200 });
}
