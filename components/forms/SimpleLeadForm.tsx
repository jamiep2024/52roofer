import React, { FormEvent, useState } from "react";

interface SimpleLeadFormProps {
  source: string;
  className?: string;
}

const SimpleLeadForm: React.FC<SimpleLeadFormProps> = ({
  source,
  className = "",
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Basic validation
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;

    if (!name || !phone || !email) {
      setErrorMessage("Please fill in all required fields");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    // Phone validation
    const phoneRegex = /^[\d\s+()-]{10,}$/;
    if (!phoneRegex.test(phone)) {
      setErrorMessage("Please enter a valid phone number");
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

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();

      if (responseData.success) {
        setSubmitStatus("success");
        form.reset();
      } else {
        throw new Error(responseData.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMessage(
        error instanceof Error ? error.message : "An unexpected error occurred",
      );
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name *
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone *
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email *
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address *
          </label>
          <input
            type="text"
            name="address"
            id="address"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-gray-700"
          >
            Service Required *
          </label>
          <select
            name="service"
            id="service"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
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
          <label
            htmlFor="urgency"
            className="block text-sm font-medium text-gray-700"
          >
            Urgency *
          </label>
          <select
            name="urgency"
            id="urgency"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
          >
            <option value="">Select urgency</option>
            <option value="Emergency">Emergency - Need help immediately</option>
            <option value="Urgent">Urgent - Within 24-48 hours</option>
            <option value="Soon">Soon - Within a week</option>
            <option value="Planning">Planning - Just getting quotes</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
          placeholder="Please describe your roofing needs in detail"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Get Free Quote"}
        </button>
      </div>

      {submitStatus === "success" && (
        <div className="rounded-md bg-green-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-green-400"
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
              <p className="text-sm font-medium text-green-800">
                Thank you! Your message has been sent successfully.
              </p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-400"
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
              <p className="text-sm font-medium text-red-800">
                {errorMessage ||
                  "Sorry, there was an error submitting your message. Please try again."}
              </p>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default SimpleLeadForm;
