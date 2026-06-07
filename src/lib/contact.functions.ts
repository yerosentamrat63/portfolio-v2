import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Invalid email").max(254),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import(
      "@/integrations/supabase/client.server"
    );
    const { error } = await supabaseAdmin
      .from("contact_messages")
      .insert({ name: data.name, email: data.email, message: data.message });
    if (error) {
      console.error("[contact] insert failed", error);
      throw new Error("Failed to send message. Please try again.");
    }
    return { ok: true } as const;
  });