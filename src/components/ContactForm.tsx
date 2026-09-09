"use client";

import { useActionState } from "react";
import { submitLead, type LeadFormState } from "@/app/contact/actions";

const initialState: LeadFormState = { status: "idle" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitLead, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-line bg-mist p-8 text-center">
        <p className="text-lg font-bold text-ink">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      {state.status === "error" && (
        <p className="rounded-md border border-coral/30 bg-coral/5 px-4 py-3 text-sm text-coral-deep">
          {state.message}
        </p>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nom et prénom *" name="name" required />
        <Field label="Adresse e-mail *" name="email" type="email" required />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Téléphone" name="phone" type="tel" />
        <div className="flex flex-col gap-1.5">
          <label htmlFor="activity" className="text-sm font-semibold text-ink">
            Activité concernée *
          </label>
          <select
            id="activity"
            name="activity"
            required
            className="rounded-md border border-line px-4 py-3 text-ink outline-none focus:border-sky"
            defaultValue=""
          >
            <option value="" disabled>Choisissez…</option>
            <option value="immobilier">Immobilier</option>
            <option value="evenement-mariage">Événement / Mariage</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Lieu / ville de la prestation" name="location" />
        <Field label="Date souhaitée (si connue)" name="eventDate" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold text-ink">
          Votre message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="rounded-md border border-line px-4 py-3 text-ink outline-none focus:border-sky"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-coral px-6 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {pending ? "Envoi en cours…" : "Demander mon devis"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-semibold text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="rounded-md border border-line px-4 py-3 text-ink outline-none focus:border-sky"
      />
    </div>
  );
}
