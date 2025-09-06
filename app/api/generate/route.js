import { connectDb } from '@/lib/mongodb';
import Url from '@/models/Url';

export async function POST(request) {
  await connectDb();

  const body = await request.json();
  const { url, shorturl } = body;

  const existing = await Url.findOne({ shorturl });
  if (existing) {
    return Response.json({ success: false, error: true, message: "URL already exists" });
  }

  await Url.create({ url, shorturl });

  return Response.json({ success: true, error: false, message: "URL created successfully" });
}
