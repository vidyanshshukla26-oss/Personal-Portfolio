<div align="center">
🚀 Vidyansh Shukla — Portfolio
A modern, AI-powered personal portfolio built with React, TypeScript
Show Image
Show Image
Show Image
Show Image
Show Image
</div>

✨ Features

🎨 Modern UI — Sleek animations with Motion and Tailwind CSS v4
📱 Fully Responsive — Looks great on all screen sizes
🔒 Type-Safe — Written in TypeScript throughout


🛠️ Tech Stack
LayerTechnologyFrameworkReact 19LanguageTypeScript 5.8StylingTailwind CSS v4BundlerVite 6AIGoogle Gemini (@google/genai)AnimationsMotionIconsLucide React

🚀 Getting Started
Prerequisites

Node.js (v18 or higher recommended)

Installation

Clone the repository

bash   git clone https://github.com/your-username/portfolio.git
   cd portfolio

Install dependencies

bash   npm install

Set up environment variables
Copy the example env file and add your Gemini API key:

bash   cp .env.example .env.local
Then open .env.local and fill in:
env   GEMINI_API_KEY=your_api_key_here

Get your free API key at Google AI Studio


Start the development server

bash   npm run dev
Open http://localhost:3000 in your browser.

📜 Available Scripts
CommandDescriptionnpm run devStart development server on port 3000npm run buildBuild for productionnpm run previewPreview the production buildnpm run lintRun TypeScript type-checkingnpm run cleanRemove build artifacts

📁 Project Structure
portfolio/
├── src/
│   ├── main.tsx          # App entry point
│   └── ...               # Components, pages, hooks
├── index.html            # HTML shell
├── vite.config.ts        # Vite + Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── package.json
└── .env.local            # Environment variables (not committed)

🌐 Deployment
This project can be deployed to any static hosting platform:

Vercel — npm run build → deploy dist/
Netlify — connect repo and set build command to npm run build
GitHub Pages — use the gh-pages package or GitHub Actions


Don't forget to add your GEMINI_API_KEY as an environment variable on your hosting platform.


📬 Contact
Vidyansh Shukla
Feel free to reach out or connect!

<div align="center">
  Made with ❤️ and a lot of ☕
</div>
