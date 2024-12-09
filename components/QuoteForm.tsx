import React, { useState } from 'react';

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
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: '' });

    try {
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error submitting form');
      }

      setStatus({
        submitting: false,
        submitted: true,
        error: ''
      });
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
      setStatus({
        submitting: false,
        submitted: false,
        error: error instanceof Error ? error.message : 'Error submitting form'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Get Your Free Quote</h2>
      {status.submitted ? (
        <div className="text-center p-4 bg-green-50 text-green-700 rounded-md">
          <p className="font-medium">Thank you for your request!</p>
          <p className="mt-2">We'll get back to you within 60 minutes.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name*"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number*"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address*"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
              />
            </div>
            <div>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder={`Address in ${location || 'your area'}*`}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
              />
            </div>
            <div>
              <select
                name="serviceNeeded"
                value={formData.serviceNeeded}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
              >
                <option value="">Select Service Needed*</option>
                <option value="Emergency Repair">Emergency Repair</option>
                <option value="Roof Replacement">Roof Replacement</option>
                <option value="Leak Repair">Leak Repair</option>
                <option value="Inspection">Roof Inspection</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
              >
                <option value="">How Urgent Is Your Need?*</option>
                <option value="Emergency">Emergency (Need help now)</option>
                <option value="Urgent">Urgent (Within 24 hours)</option>
                <option value="Soon">Soon (This week)</option>
                <option value="Planning">Planning (No immediate rush)</option>
              </select>
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please describe your roofing need"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent h-32"
              />
            </div>
            {status.error && (
              <div className="text-red-600 text-sm">
                {status.error}
              </div>
            )}
            <button
              type="submit"
              disabled={status.submitting}
              className="w-full bg-accent text-white py-3 px-6 rounded-md hover:bg-accent-dark transition duration-150 ease-in-out disabled:opacity-50"
            >
              {status.submitting ? 'Sending...' : 'Get Free Quote Now'}
            </button>
            <p className="text-center text-sm text-gray-500 mt-2">
              No obligation quote - hear back within 60 minutes
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
