import ContactEmailForm from "@/app/component/ContactEmailForm";
import { sendEmail } from "@/lib/sendMail";
import { render } from "@react-email/components";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const {username, email, messages} = await req.json();

        const html = await render(
            ContactEmailForm({
                params: {
                username,
                email,
                messages,
                },
            })
        )
            

        // Send Email
        await sendEmail(`Messages sent by ${username} from Bunseueng Dev Portfolio`, html, email)

        return NextResponse.json({message: "Succeed"}, {status: 200})
    } catch (error) {
        return NextResponse.json({error: error}, {status: 500})
    }
}