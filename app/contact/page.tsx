"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { siteConfig } from "@/lib/utils/constants";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[+\d\s()-]+$/, "Invalid phone number format"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(20, "Please describe your project in at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
  "Residential",
  "Commercial",
  "Interior",
  "Landscape",
  "Renovation",
  "Consultation",
];

const budgetRanges = [
  "Under ₦20M",
  "₦20M – ₦50M",
  "₦50M – ₦100M",
  "₦100M – ₦500M",
  "₦500M+",
  "Not sure yet",
];

const timelines = [
  "Immediately",
  "1 – 3 months",
  "3 – 6 months",
  "6+ months",
  "Just exploring",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again or contact us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="pt-40 lg:pt-52 pb-20 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <span className="overline">Get in Touch</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="font-serif text-[clamp(2.25rem,5vw,4rem)] font-light leading-[1.1] mt-6 max-w-3xl">
              Let&apos;s Build
              <br />
              Together
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-28 lg:pb-40 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Contact Info */}
          <div className="lg:col-span-4">
            <ScrollReveal>
              <div className="space-y-8 lg:sticky lg:top-32">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-tertiary mb-2">
                    Address
                  </p>
                  <p className="text-base text-text">{siteConfig.address}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-tertiary mb-2">
                    Phone
                  </p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-base text-text hover:text-accent transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-tertiary mb-2">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-base text-text hover:text-accent transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-tertiary mb-2">
                    Office Hours
                  </p>
                  <p className="text-base text-text-secondary">
                    {siteConfig.officeHours}
                  </p>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-border">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-tertiary mb-4">
                    Follow Us
                  </p>
                  <div className="flex gap-6">
                    {Object.entries(siteConfig.socials).map(([name, url]) => (
                      <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text-secondary hover:text-accent transition-colors capitalize"
                      >
                        {name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            <ScrollReveal delay={150}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-accent"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-3xl font-light mb-3">
                    Message Sent
                  </h3>
                  <p className="text-text-secondary max-w-md">
                    Thank you for reaching out. We&apos;ll review your message
                    and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-tertiary block mb-3">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register("name")}
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={`w-full bg-transparent border-b py-3 text-base font-sans text-text transition-colors ${
                          errors.name
                            ? "border-red-400"
                            : "border-border"
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p id="name-error" role="alert" className="mt-2 text-xs text-red-500">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-tertiary block mb-3">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`w-full bg-transparent border-b py-3 text-base font-sans text-text transition-colors ${
                          errors.email
                            ? "border-red-400"
                            : "border-border"
                        }`}
                        placeholder="you@email.com"
                      />
                      {errors.email && (
                        <p id="email-error" role="alert" className="mt-2 text-xs text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Project Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="phone" className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-tertiary block mb-3">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        className={`w-full bg-transparent border-b py-3 text-base font-sans text-text transition-colors ${
                          errors.phone
                            ? "border-red-400"
                            : "border-border"
                        }`}
                        placeholder="+234 XXX XXX XXXX"
                      />
                      {errors.phone && (
                        <p id="phone-error" role="alert" className="mt-2 text-xs text-red-500">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="projectType" className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-tertiary block mb-3">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        {...register("projectType")}
                        aria-required="true"
                        aria-invalid={!!errors.projectType}
                        aria-describedby={errors.projectType ? "projectType-error" : undefined}
                        className={`w-full bg-transparent border-b py-3 text-base font-sans text-text transition-colors appearance-none cursor-pointer ${
                          errors.projectType
                            ? "border-red-400"
                            : "border-border"
                        }`}
                      >
                        <option value="">Select type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <p id="projectType-error" role="alert" className="mt-2 text-xs text-red-500">
                          {errors.projectType.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="budget" className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-tertiary block mb-3">
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        {...register("budget")}
                        className="w-full bg-transparent border-b border-border py-3 text-base font-sans text-text transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-tertiary block mb-3">
                        Preferred Timeline
                      </label>
                      <select
                        id="timeline"
                        {...register("timeline")}
                        className="w-full bg-transparent border-b border-border py-3 text-base font-sans text-text transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-tertiary block mb-3">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      {...register("message")}
                      rows={5}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`w-full bg-transparent border-b py-3 text-base font-sans text-text transition-colors resize-none ${
                        errors.message
                          ? "border-red-400"
                          : "border-border"
                      }`}
                      placeholder="Tell us about your vision..."
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="mt-2 text-xs text-red-500">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="px-10 py-4 bg-accent text-text-inverse text-[13px] font-sans font-medium uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] lg:h-[500px] bg-bg-tertiary flex items-center justify-center">
        <p className="text-text-tertiary text-sm font-sans">
          Map integration — Google Maps or Mapbox embed
        </p>
      </section>
    </>
  );
}
