import React, { FormEvent, useState } from 'react';

interface SimpleLeadFormProps {
  source: string;
  className?: string;
}

const SimpleLeadForm: React.FC<SimpleLeadFormProps> = ({ source, className = '' }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const data = {
      timestamp: new Date().toISOString(),
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      address: formData.get('address'),
      service: formData.get('service'),
      urgency: formData.get('urgency'),
      message: formData.get('message'),
      source: source,
      status: 'New',
      notes: ''
    };

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Submission failed');
      
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your full name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Your phone number"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>

        {/* Address Field */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Property Address *
          </label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Full property address"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>

        {/* Service Field */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service Required *
          </label>
          <select
            name="service"
            id="service"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
            defaultValue=""
          >
            <option value="" disabled>Select a service</option>
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

        {/* Urgency Field */}
        <div>
          <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
            How Urgent Is Your Request? *
          </label>
          <select
            name="urgency"
            id="urgency"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
            defaultValue=""
          >
            <option value="" disabled>Select urgency level</option>
            <option value="Emergency">Emergency - Need help immediately</option>
            <option value="Urgent">Urgent - Within 24-48 hours</option>
            <option value="Soon">Soon - Within a week</option>
            <option value="Planning">Planning - Just getting quotes</option>
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Details
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Please describe your roofing needs in detail"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent text-white font-medium py-3 px-4 rounded-md hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
      </button>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="p-4 rounded-md bg-green-50 text-green-800">
          Thank you! Your message has been sent successfully. We'll be in touch shortly.
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="p-4 rounded-md bg-red-50 text-red-800">
          Sorry, there was an error submitting your message. Please try again or call us directly.
        </div>
      )}
    </form>
  );
};

export default SimpleLeadForm;
