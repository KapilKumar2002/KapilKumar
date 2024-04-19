import connectDB from "@/app/helper/db";
import { Project } from "@/app/models/projectModel";
import { NextResponse } from "next/server";
connectDB();
export async function GET(request, { params }) {
  try {
    const { id } = params;
    const project = await Project.findOne({ _id: id });
    return NextResponse.json({ project });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
