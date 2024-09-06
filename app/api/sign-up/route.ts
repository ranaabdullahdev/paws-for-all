import dbConnect from "../../../lib/dbConnect";
import Email from "../../../model/email";


export async function POST(req: Request) {
  await dbConnect();
  try {
    const { email } = await req.json();
    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return Response.json(
        { success: false, message: "Email is already Submitted" },
        { status: 400 }
      );
    }
    const newEmail = new Email({
      email,
    });

    await newEmail.save();

    return Response.json(
      {
        success: true,
        message: "Email Register succesfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error, "Error requesting email");
    return Response.json(
      {
        succes: false,
        message: "Error submitting Email",
      },
      {
        status: 500,
      }
    );
  }
}
