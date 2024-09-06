import { NextResponse } from "next/server"; 
import dbConnect from "../../../lib/dbConnect";
import Email from "../../../model/email";

export async function POST(req) {
  await dbConnect();
  try {
    const { email } = await req.json();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please use a valid email address" },
        { status: 400 }
      );
    }

    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return NextResponse.json(
        { success: false, message: "Email is already submitted" },
        { status: 400 }
      );
    }

    const newEmail = new Email({ email });
    await newEmail.save();

    return NextResponse.json(
      {
        success: true,
        message: "Email registered successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error requesting email", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error submitting email",
      },
      { status: 500 }
    );
  }
}
