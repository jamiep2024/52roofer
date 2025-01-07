import React, { FormEvent, useState } from "react";
import { FaPhone } from 'react-icons/fa';

interface QuoteFormProps {
  source?: string;
  className?: string;
}

export default function QuoteForm({ source = "landing-page", className = "" }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setMessage("");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Basic validation
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;

    if (!name || !phone || !email) {
      setMessage("Please fill in all required fields");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    // Phone validation
    const phoneRegex = /^[\d\s+()-]{10,}$/;
    if (!phoneRegex.test(phone)) {
      setMessage("Please enter a valid phone number");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    const data = {
      timestamp: new Date().toISOString(),
      name,
      phone,
      email,
      address: formData.get("address"),
      service: formData.get("service"),
      urgency: formData.get("urgency"),
      message: formData.get("message"),
      source,
      status: "New",
      notes: "",
    };

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (responseData.status === "success") {
        setSubmitStatus("success");
        setMessage("Thank you! Your message has been sent successfully. We'll be in touch soon.");
        form.reset();
      } else {
        throw new Error(responseData.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setMessage(error instanceof Error ? error.message : "An unexpected error occurred");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
      <div className="flex justify-between mb-6">
        <div className="px-4 py-2 bg-blue-50 rounded-lg text-center">
          <div className="text-sm text-blue-600">Step</div>
          <div className="font-bold text-blue-600">1</div>
        </div>
        <div className="px-4 py-2 bg-gray-100 rounded-lg text-center">
          <div className="text-sm text-gray-600">Step</div>
          <div className="font-bold text-gray-600">2</div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Get Your Free Roof Inspection & Quote</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name *</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full rounded-lg border-2 border-gray-200 p-2.5 text-sm transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone *</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            className="w-full rounded-lg border-2 border-gray-200 p-2.5 text-sm transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
            placeholder="Your phone number"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full rounded-lg border-2 border-gray-200 p-2.5 text-sm transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
            placeholder="Your email address"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-1">Service Required *</label>
          <select
            name="service"
            id="service"
            required
            className="w-full rounded-lg border-2 border-gray-200 p-2.5 text-sm transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
          >
            <option value="">Select a service</option>
            <option value="Residential Roofing">Residential Roofing</option>
            <option value="Commercial Roofing">Commercial Roofing</option>
            <option value="Roof Maintenance">Roof Maintenance</option>
            <option value="Emergency Repairs">Emergency Repairs</option>
            <option value="Roof Inspection">Roof Inspection</option>
            <option value="Gutter Services">Gutter Services</option>
            <option value="Skylight Installation">Skylight Installation</option>
            <option value="Roof Ventilation">Roof Ventilation</option>
          </select>
        </div>

        <div>
          <label htmlFor="urgency" className="block text-sm font-medium mb-1">How Soon Do You Need Help? *</label>
          <select
            name="urgency"
            id="urgency"
            required
            className="w-full rounded-lg border-2 border-gray-200 p-2.5 text-sm transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
          >
            <option value="">Select urgency</option>
            <option value="Emergency">Emergency - Need help immediately</option>
            <option value="Urgent">Urgent - Within 24-48 hours</option>
            <option value="Soon">Soon - Within a week</option>
            <option value="Planning">Planning - Just getting quotes</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Message (Optional)</label>
          <textarea
            name="message"
            id="message"
            rows={3}
            className="w-full rounded-lg border-2 border-gray-200 p-2.5 text-sm transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
            placeholder="Describe your roofing needs"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span>
          ) : (
            "Get Your FREE Roofing Quote 👉"
          )}
        </button>

        <div className="text-center mt-4">
          <a 
            href="tel:07990101321" 
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700"
          >
            <FaPhone /> Call Us Now
          </a>
        </div>

        {submitStatus === "success" && (
          <div className="mt-4 p-4 bg-green-50 text-green-800 rounded-lg border-l-4 border-green-500">
            {message}
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mt-4 p-4 bg-red-50 text-red-800 rounded-lg border-l-4 border-red-500">
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
