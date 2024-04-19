import connectDB from "@/app/helper/db";
import { NextResponse } from "next/server";
import { Project } from "@/app/models/projectModel"; // Import the Project
connectDB();
export async function GET(request) {
  try {
    const projects = await Project.find().sort({ startDate: -1 });
    return NextResponse.json({ projects });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const {
      projectName,
      projectType,
      githubLink,
      liveLink,
      techStack,
      startDate,
      endDate,
      description,
      references,
      projectImage,
    } = await request.json();

    const newProject = new Project({
      projectName,
      projectType,
      githubLink,
      liveLink,
      techStack,
      startDate,
      endDate,
      description,
      references,
      projectImage,
    });

    await newProject.save();

    return NextResponse.json({ message: "Project added successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export function DELETE() {}
export function PUT() {}
