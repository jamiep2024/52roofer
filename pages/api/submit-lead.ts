import type { NextApiRequest, NextApiResponse } from 'next';

// Get the Apps Script Web App URL from environment variable
const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ 
      status: 'error',
      message: 'Method not allowed. Only POST requests are accepted.' 
    });
  }

  // Check if Apps Script URL is configured
  if (!APPS_SCRIPT_URL) {
    console.error('APPS_SCRIPT_URL environment variable is not set');
    return res.status(500).json({ 
      status: 'error',
      message: 'Server configuration error: Missing Apps Script URL' 
    });
  }

  try {
    const {
      timestamp,
      name,
      phone,
      email,
      address,
      service,
      urgency,
      message,
      source,
      status,
      notes
    } = req.body;

    // Validate required fields
    const requiredFields = ['name', 'phone', 'email', 'service', 'urgency'];
    const missingFields = requiredFields.filter(field => !req.body[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({ 
        status: 'error',
        message: `Missing required fields: ${missingFields.join(', ')}` 
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        status: 'error',
        message: 'Invalid email format' 
      });
    }

    // Basic phone validation (allows various formats)
    const phoneRegex = /^[\d\s()+.-]+$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ 
        status: 'error',
        message: 'Invalid phone number format' 
      });
    }

    // Log the request data for debugging
    console.log('Submitting to Google Apps Script:', {
      url: APPS_SCRIPT_URL,
      data: {
        timestamp,
        name,
        phone,
        email,
        service,
        urgency,
        // Exclude sensitive data from logs
        hasAddress: !!address,
        hasMessage: !!message,
        source,
        status
      }
    });

    // Make request to Google Apps Script Web App
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        timestamp,
        name,
        phone,
        email,
        address,
        service,
        urgency,
        message,
        source,
        status,
        notes
      })
    });

    // Log the response status and headers for debugging
    console.log('Google Apps Script response:', {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries())
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response from Google Apps Script:', errorText);
      throw new Error(`Failed to submit to Google Apps Script: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Google Apps Script result:', result);

    if (result.status === 'error') {
      throw new Error(result.message || 'Error submitting lead');
    }

    res.status(200).json({ 
      status: 'success',
      message: 'Lead submitted successfully',
      result 
    });
  } catch (error) {
    // Enhanced error logging
    console.error('Error submitting lead:', {
      error: error instanceof Error ? {
        message: error.message,
        stack: error.stack
      } : error,
      url: APPS_SCRIPT_URL
    });

    // Return a more detailed error message
    res.status(500).json({
      status: 'error',
      message: error instanceof Error ? error.message : 'An unexpected error occurred while submitting the lead',
      details: process.env.NODE_ENV === 'development' ? error : undefined
    });
  }
}
