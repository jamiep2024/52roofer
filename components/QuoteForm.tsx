import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

interface QuoteFormProps {
  location?: string;
}

export default function QuoteForm({ location = '' }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    serviceNeeded: '',
    urgency: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          address: formData.address || location,
          serviceNeeded: formData.serviceNeeded,
          urgency: formData.urgency,
          message: formData.message,
          source: typeof window !== 'undefined' ? window.location.pathname : '',
          status: 'New Lead',
          followUpNotes: ''
        })
      });

      // Since we're using no-cors, we won't get a proper response
      // but if we reach here, it means the request was sent
      toast.success('Thank you! We will contact you shortly about your roofing needs.');
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        serviceNeeded: '',
        urgency: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Sorry, there was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
            placeholder="Your phone number"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
          placeholder="Your email"
        />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
          Property Address *
        </label>
        <input
          type="text"
          id="address"
          name="address"
          required
          value={formData.address || location}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
          placeholder={`Address in ${location || 'your area'}`}
        />
      </div>

      <div>
        <label htmlFor="serviceNeeded" className="block text-sm font-medium text-gray-700 mb-1">
          What roofing service do you need? *
        </label>
        <select
          id="serviceNeeded"
          name="serviceNeeded"
          required
          value={formData.serviceNeeded}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
        >
          <option value="">Select a service</option>
          <option value="Emergency Repair">Emergency Repair</option>
          <option value="Roof Repair">Roof Repair</option>
          <option value="Roof Replacement">Roof Replacement</option>
          <option value="Inspection">Inspection</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Please describe your roofing problem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
          placeholder="Tell us about your roofing issue..."
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent text-white py-3 px-6 rounded-md hover:bg-accent/90 transition-colors font-medium"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </button>
      </div>

      <p className="text-sm text-gray-500">* Required fields</p>
    </form>
  );
}
