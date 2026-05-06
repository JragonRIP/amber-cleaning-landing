"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";

/** Override with `NEXT_PUBLIC_CLIENT_WEBSITE_URL` if needed for staging. */
const CLIENT_WEBSITE_URL =
  process.env.NEXT_PUBLIC_CLIENT_WEBSITE_URL ??
  "https://ambers-cleaning-web.vercel.app";

const STRIPE_PAY_URL =
  "https://buy.stripe.com/9B63cx4LU6iQ6V9ciCeZ201";
const PHONE = "906-290-0302";
const EMAIL = "aurumautodetail906@gmail.com";
const FORMSUBMIT_ACTION = `https://formsubmit.co/${EMAIL}`;

export default function Home() {
  const [revisionOpen, setRevisionOpen] = useState(false);
  const titleId = useId();

  const closeModal = useCallback(() => setRevisionOpen(false), []);

  useEffect(() => {
    if (!revisionOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [revisionOpen, closeModal]);

  return (
    <div className="relative flex min-h-[100dvh] flex-col overflow-x-hidden">
      {/* Layered backdrop — warm gold ambience, subtle motion, still executive */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#141008] via-[#070604] to-[#030203]" />
        <div className="aurum-top-shimmer absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
        <div className="absolute -top-[42%] left-1/2 flex w-[160vmin] max-w-none -translate-x-1/2 justify-center">
          <div className="aurum-orb-primary h-[95vmin] w-full rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(234,200,95,0.45)_0%,rgba(180,140,45,0.15)_38%,transparent_68%)] blur-[2px]" />
        </div>
        <div className="aurum-orb-secondary absolute -bottom-[28%] -right-[18%] h-[75vmin] w-[75vmin] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(212,175,55,0.22)_0%,rgba(120,90,30,0.08)_45%,transparent_70%)] blur-md" />
        <div className="absolute -left-[20%] top-[38%] h-[55vmin] w-[55vmin] rounded-full bg-[radial-gradient(circle_at_center,rgba(250,230,180,0.08)_0%,transparent_65%)] blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_100%,rgba(15,12,8,0.85)_0%,transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Masthead — larger type on small screens for readability */}
      <header className="shrink-0 px-4 pb-2 pt-[max(0.75rem,env(safe-area-inset-top))] text-center sm:px-6 sm:pb-2 md:pb-3">
        <p className="text-xs font-medium uppercase tracking-[0.26em] text-amber-500/90 sm:text-sm md:text-base">
          Aurum Web Design
        </p>
        <h1 className="mx-auto max-w-2xl font-serif text-xl font-medium leading-snug tracking-tight text-zinc-100 md:text-2xl">
          Thanks for working with Aurum Web Design.
        </h1>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-snug text-zinc-400 sm:mt-1.5 sm:text-base md:text-lg">
          Your digital presence is ready for the world.
        </p>
      </header>

      {/* Preview + actions — one continuous block */}
      <section
        className="mx-auto flex w-full max-w-5xl flex-1 min-h-0 flex-col px-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-6 sm:px-3 sm:pt-1 md:px-4"
        aria-labelledby="delivery-heading"
      >
        <h2 id="delivery-heading" className="sr-only">
          Your website preview and next steps
        </h2>

        <p className="mb-2 shrink-0 px-1 text-center font-serif text-lg leading-tight text-zinc-100 sm:mb-3 sm:text-xl md:text-2xl">
          Amber&apos;s Cleaning Service
        </p>

        <a
          href={CLIENT_WEBSITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-0 flex-1 flex-col rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0a06] md:rounded-lg"
        >
          <div className="relative min-h-0 flex-1">
            <Image
              src="/client-showcase.png"
              alt="Preview of your new website"
              fill
              priority
              sizes="100vw"
              className="object-contain object-top transition duration-300 ease-out group-hover:brightness-[1.05]"
            />
          </div>
          <div className="shrink-0 px-1 pt-2 text-center sm:pt-1.5 md:pt-2">
            <span className="block text-sm leading-snug text-zinc-400 transition group-hover:text-amber-400/95 sm:text-base md:text-lg">
              Tap or click to open your site · new tab
            </span>
            <p className="mt-1.5 font-medium tabular-nums text-base text-amber-300/90 sm:mt-1 sm:text-lg md:text-xl">
              $400/month
            </p>
          </div>
        </a>

        <div className="mx-auto mt-4 grid w-full min-w-0 max-w-lg grid-cols-1 gap-6 px-1 sm:mt-3 sm:max-w-2xl sm:grid-cols-2 sm:gap-x-10 sm:gap-y-5 sm:px-0 md:max-w-3xl md:mt-4">
          <div className="flex min-w-0 flex-col items-center gap-3 text-center sm:items-stretch sm:gap-2 sm:text-left">
            <p className="font-serif text-lg text-zinc-100 md:text-xl">
              Love it?
            </p>
            <a
              href={STRIPE_PAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-zinc-200 via-amber-200 to-amber-400 px-4 text-base font-semibold tracking-wide text-zinc-950 shadow-[0_0_28px_-4px_rgba(212,175,55,0.5)] transition hover:brightness-105 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 sm:min-h-11 md:min-h-12"
            >
              Pay Now
            </a>
          </div>
          <div className="flex min-w-0 flex-col items-center gap-3 text-center sm:items-stretch sm:gap-2 sm:text-left">
            <p className="font-serif text-lg text-zinc-100 md:text-xl">
              Need tweaks?
            </p>
            <button
              type="button"
              onClick={() => setRevisionOpen(true)}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-zinc-900/35 px-4 text-base font-semibold tracking-wide text-zinc-100 ring-1 ring-zinc-600/80 transition hover:bg-zinc-800/50 hover:ring-amber-500/35 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 sm:min-h-11 md:min-h-12"
            >
              Submit Changes
            </button>
          </div>
        </div>
      </section>

      {revisionOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center p-3 sm:items-center sm:p-4"
          role="presentation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            aria-label="Close revision form"
            onClick={closeModal}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 max-h-[min(92dvh,calc(100dvh-1rem))] w-full max-w-md overflow-y-auto overscroll-contain rounded-xl border border-zinc-800 bg-[#0c0c0d] p-4 shadow-[0_32px_120px_-24px_rgba(0,0,0,0.9)] sm:rounded-2xl sm:p-5"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <h2
                id={titleId}
                className="font-serif text-base font-medium text-zinc-50 sm:text-lg md:text-xl"
              >
                Request revisions
              </h2>
              <button
                type="button"
                onClick={closeModal}
                className="shrink-0 rounded-lg p-1 text-zinc-500 transition hover:bg-zinc-900 hover:text-zinc-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80"
                aria-label="Close"
              >
                <svg
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form
              action={FORMSUBMIT_ACTION}
              method="POST"
              className="flex flex-col gap-3.5"
            >
              <input type="hidden" name="_subject" value="Revision request — Aurum delivery" />
              <input type="hidden" name="_template" value="table" />

              <div>
                <label
                  htmlFor="revision-name"
                  className="mb-1 block text-[10px] font-medium uppercase tracking-wider text-zinc-500 sm:text-xs"
                >
                  Name
                </label>
                <input
                  id="revision-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950/80 px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="revision-business"
                  className="mb-1 block text-[10px] font-medium uppercase tracking-wider text-zinc-500 sm:text-xs"
                >
                  Business name
                </label>
                <input
                  id="revision-business"
                  name="business_name"
                  type="text"
                  required
                  autoComplete="organization"
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950/80 px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30"
                  placeholder="Company or project name"
                />
              </div>

              <div>
                <label
                  htmlFor="revision-changes"
                  className="mb-1 block text-[10px] font-medium uppercase tracking-wider text-zinc-500 sm:text-xs"
                >
                  Requested changes
                </label>
                <textarea
                  id="revision-changes"
                  name="requested_changes"
                  required
                  rows={4}
                  className="w-full resize-y rounded-lg border border-zinc-800 bg-zinc-950/80 px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30"
                  placeholder="Describe the updates you’d like."
                />
              </div>

              <button
                type="submit"
                className="mt-0.5 inline-flex h-10 items-center justify-center rounded-full bg-zinc-100 px-6 text-sm font-semibold text-zinc-950 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0d]"
              >
                Send request
              </button>
            </form>

            <div className="mt-5 border-t border-zinc-800/90 pt-4 text-xs leading-relaxed text-zinc-500">
              <p className="font-medium text-zinc-400">Direct contact</p>
              <p className="mt-1.5">
                <span className="text-zinc-600">Direct: </span>
                <a
                  href="tel:+19062900302"
                  className="text-amber-500/95 underline-offset-4 hover:underline"
                >
                  {PHONE}
                </a>
              </p>
              <p className="mt-0.5">
                <span className="text-zinc-600">Email: </span>
                <a
                  href={`mailto:${EMAIL}`}
                  className="break-all text-amber-500/95 underline-offset-4 hover:underline"
                >
                  {EMAIL}
                </a>
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
