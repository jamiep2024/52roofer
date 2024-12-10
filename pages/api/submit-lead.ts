import type { NextApiRequest, NextApiResponse } from 'next';

// Get the Apps Script Web App URL from environment variable
const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Check if Apps Script URL is configured
  if (!APPS_SCRIPT_URL) {
    console.error('APPS_SCRIPT_URL environment variable is not set');
    return res.status(500).json({ message: 'Server configuration error' });
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
    if (!name || !phone || !email || !service || !urgency) {
      return res.status(400).json({ message: 'Missing required fields' });
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

    res.status(200).json({ message: 'Lead submitted successfully', result });
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
      message: 'Error submitting lead',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
