"use server";

import { Resend } from "resend";
import { getSupabaseServerClient } from "@/lib/supabase";

const ACTIVITY_LABELS: Record<string, string> = {
  immobilier: "Immobilier",
  "evenement-sportif": "Événement sportif",
  autre: "Autre",
};

async function sendLeadNotification(lead: {
  name: string;
  email: string;
  phone: string;
  activity: string;
  location: string;
  eventDate: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY absent — notification email non envoyée.");
    return;
  }

  const resend = new Resend(apiKey);
  const activityLabel = ACTIVITY_LABELS[lead.activity] ?? lead.activity;

  await resend.emails.send({
    from: "StycFly <onboarding@resend.dev>",
    to: "contactstycfly@gmail.com",
    replyTo: lead.email,
    subject: `Nouvelle demande de devis — ${activityLabel}`,
    text: [
      `Nom : ${lead.name}`,
      `E-mail : ${lead.email}`,
      lead.phone ? `Téléphone : ${lead.phone}` : null,
      `Activité : ${activityLabel}`,
      lead.location ? `Lieu : ${lead.location}` : null,
      lead.eventDate ? `Date souhaitée : ${lead.eventDate}` : null,
      "",
      "Message :",
      lead.message,
    ]
      .filter(Boolean)
      .join("\n"),
  });
}

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

    try {
      await sendLeadNotification({ name, email, phone, activity, location, eventDate, message });
    } catch (emailErr) {
      console.error("Email notification failed:", emailErr);
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
