"use client";

import { FormEvent, useRef, useState } from "react";

type Fields = {
  name: string;
  email: string;
  link: string;
  pitch: string;
};

const empty: Fields = { name: "", email: "", link: "", pitch: "" };

const MAX_FILE_MB = 10;

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function CareersForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((f) => ({ ...f, [key]: e.target.value }));

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const picked = e.target.files?.[0] ?? null;
    if (!picked) {
      setFile(null);
      setFileError(null);
      return;
    }
    if (picked.size > MAX_FILE_MB * 1024 * 1024) {
      setFileError(`File is over ${MAX_FILE_MB}MB. Try a smaller version or share a link.`);
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    setFileError(null);
    setFile(picked);
  };

  const clearFile = () => {
    setFile(null);
    setFileError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire up to email or applicant tracking provider. The `file`
    // state holds the upload and should be sent as multipart/form-data.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[8px] border border-ink/10 bg-[#F2F1F0] px-8 py-10">
        <p className="font-serif text-[24px] leading-[1.2] text-ink">
          Got it, {fields.name.split(" ")[0] || "thanks"}.
        </p>
        <p className="mt-3 text-[15px] leading-[24px] text-stone">
          We read every application. If your work resonates with what we&rsquo;re building, you&rsquo;ll hear from us inside two weeks.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border-b border-ink/15 bg-transparent py-3 text-[16px] text-ink placeholder:text-stone/70 focus:border-ink/60 focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-10">
      <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-[12px] font-medium uppercase tracking-[0.96px] text-stone">
            Your name
          </span>
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
          <span className="text-[12px] font-medium uppercase tracking-[0.96px] text-stone">
            Email
          </span>
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
        <span className="text-[12px] font-medium uppercase tracking-[0.96px] text-stone">
          Your work
        </span>
        <input
          type="url"
          required
          value={fields.link}
          onChange={update("link")}
          placeholder="Portfolio, GitHub, Dribbble, or LinkedIn"
          className={inputClass}
        />
      </label>

      <label className="flex flex-col gap-3">
        <span className="text-[12px] font-medium uppercase tracking-[0.96px] text-stone">
          What you&rsquo;d want to do here
        </span>
        <textarea
          required
          rows={5}
          value={fields.pitch}
          onChange={update("pitch")}
          placeholder="A few sentences is plenty. Tell us what you do well and what you want to be working on."
          className="w-full resize-none border-b border-ink/15 bg-transparent py-3 text-[16px] leading-[26px] text-ink placeholder:text-stone/70 focus:border-ink/60 focus:outline-none"
        />
      </label>

      <div className="flex flex-col gap-3">
        <span className="text-[12px] font-medium uppercase tracking-[0.96px] text-stone">
          CV or portfolio (optional)
        </span>

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip"
          onChange={onFileChange}
          className="sr-only"
          id="careers-cv"
        />

        {file ? (
          <div className="flex items-center justify-between gap-4 rounded-[6px] border border-ink/15 bg-[#F2F1F0] px-4 py-3">
            <div className="flex min-w-0 items-center gap-3">
              <span
                aria-hidden
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] bg-ink/10 text-[12px] font-medium text-ink"
              >
                {file.name.split(".").pop()?.toUpperCase().slice(0, 4) || "FILE"}
              </span>
              <div className="flex min-w-0 flex-col">
                <span className="truncate text-[14px] text-ink">{file.name}</span>
                <span className="text-[12px] text-stone">{formatSize(file.size)}</span>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <label
                htmlFor="careers-cv"
                className="cursor-pointer text-[12px] font-medium uppercase tracking-[0.12em] text-stone hover:text-ink"
              >
                Replace
              </label>
              <button
                type="button"
                onClick={clearFile}
                className="text-[12px] font-medium uppercase tracking-[0.12em] text-stone hover:text-ink"
              >
                Remove
              </button>
            </div>
          </div>
        ) : (
          <label
            htmlFor="careers-cv"
            className="flex cursor-pointer items-center justify-between gap-4 rounded-[6px] border border-dashed border-ink/20 bg-transparent px-4 py-4 transition-colors hover:border-ink/40 hover:bg-ink/[0.02]"
          >
            <span className="text-[14px] text-stone">
              Drop a PDF, image, or .zip. Up to {MAX_FILE_MB}MB.
            </span>
            <span className="rounded-[4px] border border-ink/20 px-3 py-1.5 text-[12px] font-medium tracking-[0.12em] text-ink">
              Choose file
            </span>
          </label>
        )}

        {fileError && (
          <p className="text-[13px] text-[#a73a2c]">{fileError}</p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-[13px] text-stone">
          We respond to every application within two weeks.
        </p>
        <button
          type="submit"
          className="inline-flex items-center rounded-[6px] bg-ink px-7 py-3.5 text-[13px] font-medium tracking-[0.2px] text-ivory transition-colors hover:bg-ink/85"
        >
          Send application
        </button>
      </div>
    </form>
  );
}
