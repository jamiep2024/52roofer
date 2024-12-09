import { NextApiRequest, NextApiResponse } from 'next';

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, phone, email, address, serviceNeeded, urgency, message } = req.body;

    // Validate required fields
    if (!name || !phone || !email || !address || !serviceNeeded || !urgency) {
      return res.status(400).json({ message: 'Please fill in all required fields' });
    }

    // Send data to Google Apps Script web app
    const response = await fetch(GOOGLE_SCRIPT_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name,
        phone,
        email,
        address,
        serviceNeeded,
        urgency,
        message: message || 'No message provided',
        source: req.headers.referer || 'Direct',
        status: 'New',
        followUpNotes: ''
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit to spreadsheet');
    }

    res.status(200).json({ message: 'Quote request submitted successfully' });
  } catch (error) {
    console.error('Error submitting to spreadsheet:', error);
    res.status(500).json({ message: 'Error submitting quote request' });
  }
}
