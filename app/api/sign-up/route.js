import dbConnect from "../../../lib/dbConnect";
import Email from "../../../model/email";


export async function POST(req) {
  await dbConnect();
  try {
    const { email } = await req.json();


    const emailRegex = /.+\@.+\..+/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, message: "Please use a valid email address" },
        { status: 400 }
      );
    }


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
