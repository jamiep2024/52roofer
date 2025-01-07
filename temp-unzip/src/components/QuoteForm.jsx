import React from 'react'
import { FaPhone } from 'react-icons/fa'

export default function QuoteForm() {
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

      <form className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">
            What Roofing Service Do You Need? *
          </label>
          <select className="w-full p-3 border rounded-lg">
            <option>Please Choose</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            What Type Of Property Is This? *
          </label>
          <select className="w-full p-3 border rounded-lg">
            <option>Please Choose</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            How Soon Do You Need Help
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="radio" name="timeline" className="mr-2" />
              ASAP
            </label>
            <label className="flex items-center">
              <input type="radio" name="timeline" className="mr-2" />
              This Month
            </label>
            <label className="flex items-center">
              <input type="radio" name="timeline" className="mr-2" />
              Next 2-3 Months
            </label>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors">
          Get Your FREE Roofing Quote 👉
        </button>

        <div className="text-center">
          <a 
            href="tel:07990101321" 
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700"
          >
            <FaPhone /> Call Us Now
          </a>
        </div>
      </form>
    </div>
  )
}
