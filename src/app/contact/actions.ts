"use server";

import { getSupabaseServerClient } from "@/lib/supabase";

export type LeadFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitLead(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const activity = String(formData.get("activity") ?? "").trim();
  const location = String(formData.get("location") ?? "").trim();
  const eventDate = String(formData.get("eventDate") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !activity || !message) {
    return {
      status: "error",
      message: "Merci de remplir tous les champs obligatoires.",
    };
  }

  try {
    const supabase = getSupabaseServerClient();
    const { error } = await supabase.from("leads").insert({
      name,
      email,
      phone: phone || null,
      activity,
      location: location || null,
      event_date: eventDate || null,
      message,
    });

    if (error) {
      console.error("Supabase insert error:", error.message);
      return {
        status: "error",
        message:
          "Une erreur est survenue lors de l'envoi. Réessayez ou contactez-moi directement par téléphone.",
      };
    }

    return {
      status: "success",
      message: "Merci ! Votre demande a bien été envoyée, je vous réponds sous 24h.",
    };
  } catch (err) {
    console.error("Lead submission failed:", err);
    return {
      status: "error",
      message:
        "Une erreur est survenue lors de l'envoi. Réessayez ou contactez-moi directement par téléphone.",
    };
  }
}
