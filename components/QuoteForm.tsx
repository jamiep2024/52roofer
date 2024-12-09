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
    
    // Special handling for phone numbers to ensure they start with 0
    if (name === 'phone') {
      let formattedPhone = value;
      if (value && !value.startsWith('0')) {
        formattedPhone = `0${value}`;
      }
      setFormData(prev => ({ ...prev, [name]: formattedPhone }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
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
            placeholder="07XXX XXXXXX"
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
          placeholder="your@email.com"
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
          placeholder={`Address in ${location}`}
        />
      </div>

      <div>
        <label htmlFor="serviceNeeded" className="block text-sm font-medium text-gray-700 mb-1">
          Service Needed *
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
          <option value="Leak Fix">Leak Fix</option>
          <option value="Inspection">Inspection</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
          How urgent is your need? *
        </label>
        <select
          id="urgency"
          name="urgency"
          required
          value={formData.urgency}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
        >
          <option value="">Select urgency</option>
          <option value="Emergency - Need help now">Emergency - Need help now</option>
          <option value="Urgent - Within 24 hours">Urgent - Within 24 hours</option>
          <option value="Soon - Within a week">Soon - Within a week</option>
          <option value="Planning ahead">Planning ahead</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Please describe your roofing problem *
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
          placeholder="Please provide details about your roofing issue..."
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-md transition-colors ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </button>
      </div>
      
      <p className="text-xs text-gray-500 mt-2">* Required fields</p>
    </form>
  );
}
