// File: /api/chat.js

// This is a Vercel Serverless Function (Node.js environment)
export default async function handler(req, res) {
  // 1. Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // 2. Get the chat history from the request body sent by the frontend
  const { chatHistory } = req.body;

  if (!chatHistory) {
    return res.status(400).json({ error: 'chatHistory is required' });
  }

  // 3. Securely get the API key from Vercel's Environment Variables
  const apiKey = process.env.GEMINI_API_KEY;
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  try {
    // 4. Call the Gemini API from the backend
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: chatHistory })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API Error:', errorData);
      return res.status(response.status).json({ error: 'Error from Gemini API' });
    }

    // 5. Send the successful response from Gemini back to the frontend
    const result = await response.json();
    res.status(200).json(result);

  } catch (error) {
    console.error('Internal Server Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}