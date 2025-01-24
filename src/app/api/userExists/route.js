import connectMongoDB from "@/lib/mongodb";
import user from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectMongoDB();
        const { email }= await req.json();
        const User = await user.findOne({email}).select("_id");
        console.log("User : ", User);
        return NextResponse.json({User});
    } catch (error) {
        console.log(error)
    }
    
}

// This page helps preventing two accounts with the same email