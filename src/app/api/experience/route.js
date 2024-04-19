import connectDB from "@/app/helper/db";
import { Experience } from "@/app/models/experienceModel";
import { NextResponse } from "next/server";
connectDB();
export async function GET(request) {
  try {
    const experiences = await Experience.find().sort({ startDate: -1 }); // Project only description, exclude _id
    return NextResponse.json(experiences);
  } catch (error) {
    console.error(error.message);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const {
      jobTitle,
      company,
      companyLink,
      isIntern,
      description,
      techStack,
      startDate,
      endDate,
    } = await request.json();

    const newExperience = new Experience({
      jobTitle,
      company,
      companyLink,
      isIntern,
      description,
      techStack,
      startDate,
      endDate,
    });

    await newExperience.save();

    return NextResponse.json({ message: "Experience added successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export function DELETE() {}
export function PUT() {}
