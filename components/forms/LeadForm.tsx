import React, { FormEvent, useState } from "react";

interface LeadFormProps {
  source: string;
  className?: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ source, className = "" }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
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
        setMessage(
          "Thank you! Your message has been sent successfully. We'll be in touch soon.",
        );
        form.reset();
      } else {
        throw new Error(responseData.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setMessage(
        error instanceof Error ? error.message : "An unexpected error occurred",
      );
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-gradient-to-br from-primary-500/10 to-accent/5 p-8 rounded-2xl shadow-lg ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-primary-600 mb-2"
          >
            Name *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="pl-10 w-full rounded-lg border-2 border-gray-200 bg-white py-2.5 text-sm transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder="Your full name"
            />
          </div>
        </div>

        <div className="relative">
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-primary-600 mb-2"
          >
            Phone *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              className="pl-10 w-full rounded-lg border-2 border-gray-200 bg-white py-2.5 text-sm transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder="Your phone number"
            />
          </div>
        </div>

        <div className="relative">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-primary-600 mb-2"
          >
            Email *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="pl-10 w-full rounded-lg border-2 border-gray-200 bg-white py-2.5 text-sm transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder="Your email address"
            />
          </div>
        </div>

        <div className="relative">
          <label
            htmlFor="address"
            className="block text-sm font-semibold text-primary-600 mb-2"
          >
            Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              name="address"
              id="address"
              className="pl-10 w-full rounded-lg border-2 border-gray-200 bg-white py-2.5 text-sm transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder="Your address (optional)"
            />
          </div>
        </div>

        <div className="relative">
          <label
            htmlFor="service"
            className="block text-sm font-semibold text-primary-600 mb-2"
          >
            Service Required *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
            </div>
            <select
              name="service"
              id="service"
              required
              className="pl-10 w-full rounded-lg border-2 border-gray-200 bg-white py-2.5 text-sm transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 appearance-none"
            >
              <option value="">Select a service</option>
              <option value="Residential Roofing">Residential Roofing</option>
              <option value="Commercial Roofing">Commercial Roofing</option>
              <option value="Roof Maintenance">Roof Maintenance</option>
              <option value="Emergency Repairs">Emergency Repairs</option>
              <option value="Roof Inspection">Roof Inspection</option>
              <option value="Gutter Services">Gutter Services</option>
              <option value="Skylight Installation">
                Skylight Installation
              </option>
              <option value="Roof Ventilation">Roof Ventilation</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative">
          <label
            htmlFor="urgency"
            className="block text-sm font-semibold text-primary-600 mb-2"
          >
            Urgency *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <select
              name="urgency"
              id="urgency"
              required
              className="pl-10 w-full rounded-lg border-2 border-gray-200 bg-white py-2.5 text-sm transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 appearance-none"
            >
              <option value="">Select urgency</option>
              <option value="Emergency">
                Emergency - Need help immediately
              </option>
              <option value="Urgent">Urgent - Within 24-48 hours</option>
              <option value="Soon">Soon - Within a week</option>
              <option value="Planning">Planning - Just getting quotes</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-primary-600 mb-2"
        >
          Message
        </label>
        <div className="relative">
          <div className="absolute top-3 left-3 flex items-start pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <textarea
            name="message"
            id="message"
            rows={4}
            className="pl-10 w-full rounded-lg border-2 border-gray-200 bg-white py-2.5 text-sm transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            placeholder="Describe your roofing needs (optional)"
          ></textarea>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary-500 to-accent rounded-lg py-3 px-4 text-white font-semibold shadow-lg transition-all hover:from-primary-600 hover:to-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Submitting...
            </span>
          ) : (
            "Get Your Free Quote"
          )}
        </button>
      </div>

      {submitStatus === "success" && (
        <div className="mt-6 rounded-lg bg-green-50 p-4 border-l-4 border-green-400">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">{message}</p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mt-6 rounded-lg bg-red-50 p-4 border-l-4 border-red-400">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-red-800">{message}</p>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default LeadForm;
