
"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type FormStatus = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const ready = Boolean(site.formspree?.trim());

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!ready) return;

    const form = e.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(site.formspree, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          Your name
          <input
            name="name"
            autoComplete="name"
            placeholder="Your name"
            required
          />
        </label>

        <label>
          Email address
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
        </label>
      </div>

      <label>
        What can we help with?
        <select name="topic" defaultValue="" required>
          <option value="" disabled>
            Select a topic
          </option>
          <option>Website Development</option>
          <option>Product Development</option>
          <option>UI/UX Design and Branding</option>
          <option>Digital Marketing</option>
          <option>Social Media Management</option>
          <option>Startup and Product Collaboration</option>
          <option>General Enquiry</option>
          <option>Partnership</option>
          <option>Interest in the Academy</option>
          <option>Job Opportunities</option>
        </select>
      </label>

      <label>
        Your message
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell us a little about your idea..."
        />
      </label>

      {ready ? (
        <button
          className="button button-primary"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send message →"}
        </button>
      ) : (
        <a
          className="button button-primary"
          href={`mailto:${site.email}?subject=TechMindsVerse%20Enquiry`}
        >
          Send us an email →
        </a>
      )}

      {status === "sent" && (
        <p role="status" className="form-feedback">
          Your message has been sent successfully. Thank you for
          contacting TechMindsVerse.
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="form-feedback">
          We couldn't send your message. Please email us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
    </form>
  );
}
