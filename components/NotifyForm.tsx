"use client";

import { FormEvent, useState } from "react";

export default function NotifyForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire up to the email provider (Mailchimp, ConvertKit, etc.)
    // For now, just acknowledge the submission locally.
    if (!email.trim()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="text-[15px] text-stone">
        Thanks. We&rsquo;ll let you know the day it ships.
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full overflow-hidden rounded-[6px] border border-ink/15 bg-white focus-within:border-ink/35"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@firm.com"
        aria-label="Email address"
        className="flex-1 bg-transparent px-4 py-3 text-[15px] text-ink placeholder:text-stone/70 focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 bg-ink px-5 py-3 text-[13px] font-medium tracking-[0.2px] text-ivory transition-colors hover:bg-ink/85"
      >
        Notify me
      </button>
    </form>
  );
}
