import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  projectType: z.string().min(1),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(20),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    const emailHtml = `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <div style="border-bottom: 2px solid #8B7355; padding-bottom: 20px; margin-bottom: 30px;">
          <h1 style="font-size: 24px; font-weight: 300; color: #1A1A18; margin: 0;">
            New Consultation Request
          </h1>
          <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.2em; color: #8B7355; margin-top: 8px;">
            Royal Diadem Consult
          </p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #E0DCD6; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #7A756C; width: 140px;">Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #E0DCD6; font-size: 15px; color: #1A1A18;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #E0DCD6; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #7A756C;">Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #E0DCD6; font-size: 15px; color: #1A1A18;">
              <a href="mailto:${data.email}" style="color: #8B7355; text-decoration: none;">${data.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #E0DCD6; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #7A756C;">Phone</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #E0DCD6; font-size: 15px; color: #1A1A18;">
              <a href="tel:${data.phone}" style="color: #8B7355; text-decoration: none;">${data.phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #E0DCD6; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #7A756C;">Project Type</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #E0DCD6; font-size: 15px; color: #1A1A18;">${data.projectType}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #E0DCD6; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #7A756C;">Budget</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #E0DCD6; font-size: 15px; color: #1A1A18;">${data.budget || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #E0DCD6; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #7A756C;">Timeline</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #E0DCD6; font-size: 15px; color: #1A1A18;">${data.timeline || "Not specified"}</td>
          </tr>
        </table>

        <div style="margin-bottom: 30px;">
          <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #7A756C; margin-bottom: 12px;">Project Description</p>
          <p style="font-size: 15px; color: #1A1A18; line-height: 1.8; white-space: pre-wrap;">${data.message}</p>
        </div>

        <div style="border-top: 1px solid #E0DCD6; padding-top: 20px; font-size: 12px; color: #7A756C;">
          <p>Submitted on ${new Date().toLocaleDateString("en-NG", { weekday: "long", year: "numeric", month: "long", day: "numeric" })} at ${new Date().toLocaleTimeString("en-NG")}</p>
        </div>
      </div>
    `;

    // Send notification email to the studio
    const resend = getResend();

    if (resend) {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "Royal Diadem Consult <noreply@royaldiadem.com>",
        to: process.env.CONTACT_EMAIL || "info@royaldiadem.com",
        replyTo: data.email,
        subject: `New Inquiry: ${data.projectType} — ${data.name}`,
        html: emailHtml,
      });

      // Send auto-reply to the client
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "Royal Diadem Consult <noreply@royaldiadem.com>",
        to: data.email,
        subject: "Thank you for contacting Royal Diadem Consult",
        html: `
          <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <h1 style="font-size: 24px; font-weight: 300; color: #1A1A18;">Thank you, ${data.name}</h1>
            <p style="font-size: 15px; color: #5C5950; line-height: 1.8; margin-top: 16px;">
              We have received your consultation request and will review it within 24 hours. A member of our team will reach out to discuss your ${data.projectType.toLowerCase()} project in detail.
            </p>
            <p style="font-size: 15px; color: #5C5950; line-height: 1.8; margin-top: 16px;">
              In the meantime, feel free to browse our <a href="https://royaldiadem.com/projects" style="color: #8B7355;">portfolio</a> or reach us on WhatsApp for urgent inquiries.
            </p>
            <div style="border-top: 1px solid #E0DCD6; margin-top: 30px; padding-top: 20px;">
              <p style="font-size: 14px; font-weight: 300; color: #1A1A18;">Royal Diadem Consult</p>
              <p style="font-size: 12px; color: #7A756C; margin-top: 4px;">Architecture · Design · Vision</p>
            </div>
          </div>
        `,
      });
    } else {
      // Fallback: log when no API key is configured
      console.log("📧 Contact form submission (no RESEND_API_KEY):", {
        name: data.name,
        email: data.email,
        projectType: data.projectType,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const zodError = error as z.ZodError;
      return NextResponse.json(
        {
          success: false,
          message: "Invalid form data",
          errors: zodError.issues.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
