import React, { useState } from 'react'
import { FaPhone, FaCheckCircle } from 'react-icons/fa'

const SERVICES = [
  'Roof Repair',
  'Roof Replacement',
  'Flat Roofing',
  'Gutter Installation',
  'Emergency Repair',
  'Roof Inspection'
]

const URGENCY_OPTIONS = [
  'ASAP',
  'This Month',
  'Next 2-3 Months'
]

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    urgency: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Website',
          status: 'New',
          notes: ''
        })
      })

      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center">
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
        <p className="text-gray-600 mb-6">
          We've received your request and will contact you shortly.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false)
            setFormData({
              name: '',
              phone: '',
              email: '',
              address: '',
              service: '',
              urgency: '',
              message: ''
            })
          }}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white p-4 md:p-8 rounded-2xl shadow-2xl w-full max-w-2xl border border-gray-100">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
        Get Expert Roof Repairs & Replacements
        <span className="block text-lg md:text-xl mt-2 font-normal text-gray-600">Fast, Free Quotes!</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <label className="block mb-2 font-medium text-gray-700">
              Full Name *
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 md:p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="John Doe"
                required
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
          </div>

          <div className="relative">
            <label className="block mb-2 font-medium text-gray-700">
              Phone Number *
            </label>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="123-456-7890"
                required
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <FaPhone className="h-5 w-5" />
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <label className="block mb-2 font-medium text-gray-700">
            Email Address *
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              placeholder="john@example.com"
              required
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </span>
          </div>
        </div>

        <div className="relative">
          <label className="block mb-2 font-medium text-gray-700">
            Property Address *
          </label>
          <div className="relative">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              placeholder="123 Main St, City"
              required
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              What Roofing Service Do You Need? *
            </label>
            <div className="relative">
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 appearance-none bg-white"
                required
              >
                <option value="">Please Choose</option>
                {SERVICES.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l5-2a1 1 0 000-1.838l-7-3z" />
                  <path d="M3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              How Soon Do You Need Help? *
            </label>
            <div className="space-y-2 md:space-y-3">
              {URGENCY_OPTIONS.map((option) => (
                <label key={option} className="flex items-center p-4 rounded-xl border-2 border-gray-200 hover:border-blue-500 cursor-pointer transition-all">
                  <input 
                    type="radio" 
                    name="urgency"
                    value={option}
                    checked={formData.urgency === option}
                    onChange={handleChange}
                    className="mr-3 w-5 h-5 text-blue-600 border-2 border-gray-300 focus:ring-blue-500"
                    required
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Additional Information
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Any specific details about your roofing needs..."
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            rows="4"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-pink-600 to-pink-800 text-white py-3 md:py-4 rounded-xl font-bold hover:from-pink-700 hover:to-pink-900 transition-all transform hover:scale-105 disabled:opacity-50 animate-pulse"
        >
          {isSubmitting ? 'Submitting...' : 'Get Your FREE Roofing Quote 👉'}
        </button>

        <div className="text-center mt-4">
          <a 
            href="tel:07990101321" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-pink-800 text-white px-4 py-2 rounded-xl font-bold hover:from-pink-700 hover:to-pink-900 transition-all transform hover:scale-105 w-full md:w-auto justify-center"
          >
            <FaPhone className="text-white" /> 
            <span>Call Now</span>
          </a>
        </div>
      </form>
    </div>
  )
}
