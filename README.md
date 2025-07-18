# SpeakWise AI – English Speaking Practice

![SpeakWise AI thumbnail](/images/demo.png)

A **modern, glassmorphism-inspired web app** for English conversation practice powered by Gemini AI, Web Speech API, and a secure Node/Serverless backend. Practice real English, receive instant pronunciation feedback, and build fluency with a sleek, interactive UI.

---

## ✨ Features

- **Voice Recognition & Synthesis**
  - Speak naturally: browser captures your English and converts to text.
  - AI responds with authentic, intelligible spoken replies.

- **Gemini AI Integration**
  - Smart, concise feedback.
  - Context-aware corrections and tutor-style engagement.

- **Glassy, Modern UI**
  - Glassmorphism panels, animated particles, and smooth transitions.
  - Responsive and mobile-friendly.

- **Login & Session Control**
  - Simple username/password login for demonstration.
  - Session persists until logout or browser tab is closed.

- **Secure API Key Management**
  - Gemini API key securely stored server-side (never exposed in client).

- **Support/Donate Modal**
  - QR code and UPI payment included for support (demo mode).

---

## 🛠 Tech Stack

| Layer            | Technology                                         |
|------------------|---------------------------------------------------|
| Frontend         | HTML5, TailwindCSS, Canvas, Vanilla JavaScript    |
| AI Backend Proxy | Node.js/Serverless (Vercel, Netlify, etc.)        |
| AI Engine        | Google Gemini (via Gemini API)                    |
| Voice Features   | Web Speech API (SpeechRecognition, SpeechSynthesis)|

---

## 📝 Demo Credentials

Username: admin
Password: password


---

## 🚀 Getting Started

### 1. Clone & Install

git clone https://github.com/your-username/speakwise-ai.git
cd speakwise-ai

## If using a serverless backend for API proxy,

see /api/chat.js for setup.

### 2. Deploy or Open Locally

- You can use any static server for the frontend (e.g., `live-server`, Vercel, Netlify, etc.)
- For production, deploy `/api/chat.js` as a serverless function (Vercel, Netlify Functions, etc.).

### 3. Set Your Gemini API Key (Backend)

Create a `.env` or platform environment variable:

GEMINI_API_KEY=your_gemini_api_key


### 4. Run

- Launch the frontend.
- Ensure `/api/chat` endpoint is accessible and proxying API calls securely.

---

## 📁 File Structure

.
├── index.html # Main HTML file with all UI, JS, and styles
├── /api/chat.js # (If using Vercel/Netlify) Secure API backend proxy
├── /public/ # (Optional) Assets like QR images, favicon, etc.


---

## 💻 Usage

1. **Login** with demo credentials.
2. Speak by tapping the mic button and allow browser mic access.
3. Respond to the AI, listen, and learn. The app keeps sessions isolated for privacy.
4. Support the project via the QR code or UPI panel if you wish.

---

## ☁️ Deployment Notes

- **API Key Security:** Never expose your Gemini API key in frontend JS. Always use a backend (proxy) endpoint with proper environment variables.
- **Browser Support:** Works best in latest Chrome/Edge. Requires microphone and SpeechSynthesis API support.
- **Session:** Demo only; production should use secure authentication and proper session handling.

---

## 🎨 Customization

- **Glassmorphism:** Tweak the `.glass-panel` class or background colors for personality.
- **Voice Settings:** Adjust language/model in the SpeechSynthesis or Gemini prompt.
- **AI Prompting:** Edit the initial system prompt for your custom learning goals.

---

## 🙏 Credits

- UI by [Mastan Vali Shaik]
- AI powered by Google Gemini API
- Style inspired by modern glassmorphism design

---

## Thanks for using SpeakWise AI!  
Your conversational journey to English fluency begins here.

*For bug reports and contributions, open an issue or submit a PR on GitHub.*
