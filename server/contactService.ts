import { Request, Response } from "express";
import { z } from "zod";

// Define validation schema for contact form
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
  service: z.string().min(1),
});

export async function contactHandler(req: Request, res: Response) {
  try {
    // Validate the request body
    const validatedData = contactSchema.parse(req.body);
    
    // In a real application, you would:
    // 1. Store the contact request in a database
    // 2. Send an email notification
    // 3. Set up auto-responses, etc.
    
    // For now, we'll just log the contact request and return success
    console.log("Contact form submission received:", validatedData);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return res.status(200).json({
      success: true,
      message: "Thank you for your message. We will be in touch soon!"
    });
  } catch (error) {
    console.error("Contact form validation error:", error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.errors
      });
    }
    
    return res.status(500).json({
      success: false,
      message: "Failed to process your request"
    });
  }
}
