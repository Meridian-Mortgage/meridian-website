"use client";

import { FormEvent, useState } from "react";

type Fields = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const empty: Fields = { name: "", email: "", company: "", message: "" };

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [submitted, setSubmitted] = useState(false);

  const update =
    (key: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire up to email or CRM provider. `fields` holds the message.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[8px] border border-ink/10 bg-cream px-8 py-10">
        <p className="font-serif text-[26px] leading-[1.2] text-ink">
          Thanks, {fields.name.split(" ")[0] || "talk soon"}.
        </p>
        <p className="mt-3 text-[15px] leading-[24px] text-stone">
          We&rsquo;ve got your note and will reply within one business day.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border-b border-ink/15 bg-transparent py-3 text-[16px] text-ink placeholder:text-stone/70 focus:border-ink/60 focus:outline-none";
  const labelClass =
    "text-[12px] font-medium uppercase tracking-[0.96px] text-stone";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className={labelClass}>Your name</span>
          <input
            type="text"
            required
            value={fields.name}
            onChange={update("name")}
            placeholder="First and last"
            className={inputClass}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className={labelClass}>Email</span>
          <input
            type="email"
            required
            value={fields.email}
            onChange={update("email")}
            placeholder="you@firm.com"
            className={inputClass}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className={labelClass}>Brokerage or company</span>
        <input
          type="text"
          value={fields.company}
          onChange={update("company")}
          placeholder="Optional"
          className={inputClass}
        />
      </label>

      <label className="flex flex-col gap-3">
        <span className={labelClass}>Message</span>
        <textarea
          required
          rows={5}
          value={fields.message}
          onChange={update("message")}
          placeholder="What's on your mind?"
          className="w-full resize-none border-b border-ink/15 bg-transparent py-3 text-[16px] leading-[26px] text-ink placeholder:text-stone/70 focus:border-ink/60 focus:outline-none"
        />
      </label>

      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-[13px] text-stone">
          We reply within one business day.
        </p>
        <button
          type="submit"
          className="inline-flex items-center rounded-[6px] bg-ink px-7 py-3.5 text-[13px] font-medium tracking-[0.2px] text-ivory transition-colors hover:bg-ink/85"
        >
          Send message
        </button>
      </div>
    </form>
  );
}
