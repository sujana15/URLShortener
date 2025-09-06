import { connectDb } from "@/lib/mongodb";
import l from "@/models/l";
export async function POST(request) {
    await connectDb()
    const body=await request.json()
    const {links,handle,pic}=body;
    const existing=await l.findOne({handle})
    if(existing){
        return Response.json({success:false,error:true,message:"your bittree exists"})
    }
    await l.insertOne(body)
    return Response.json({success:true,error:false,message:"your bittree is created"})
}