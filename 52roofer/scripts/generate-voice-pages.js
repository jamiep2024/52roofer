const fs = require("fs");
const path = require("path");

const VOICE_PAGES = [
  {
    path: "/services/voice-roofing-services",
    title: "Voice-Enabled Roofing Services",
    description:
      "Access professional roofing services using voice commands. Get instant information about our roofing solutions.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Voice-Enabled Roofing Services",
      provider: {
        "@type": "RoofingContractor",
        name: "52Roofer",
      },
      description: "Access professional roofing services using voice commands",
      areaServed: "United States",
    },
  },
  {
    path: "/services/voice-roof-repairs",
    title: "Voice-Activated Roof Repair Services",
    description:
      "Get immediate roof repair assistance through voice commands. Quick access to emergency repairs and maintenance.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Voice-Activated Roof Repair Services",
      provider: {
        "@type": "RoofingContractor",
        name: "52Roofer",
      },
      description: "Immediate roof repair assistance through voice commands",
      areaServed: "United States",
    },
  },
  {
    path: "/services/voice-roof-installation",
    title: "Voice-Enabled Roof Installation Services",
    description:
      "Schedule and manage roof installation services using voice commands. Get quotes and consultation instantly.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Voice-Enabled Roof Installation Services",
      provider: {
        "@type": "RoofingContractor",
        name: "52Roofer",
      },
      description:
        "Schedule and manage roof installation services using voice commands",
      areaServed: "United States",
    },
  },
];

// Create voice service pages
VOICE_PAGES.forEach((page) => {
  const pagePath = path.join("pages", page.path + ".js");
  const dirPath = path.dirname(pagePath);

  // Create directories if they don't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const pageContent = `import Head from 'next/head';
import Layout from '../../../components/Layout';
import VoiceSearch from '../../../components/VoiceSearch';

export default function VoiceService() {
    return (
        <Layout>
            <Head>
                <title>${page.title} | 52Roofer</title>
                <meta name="description" content="${page.description}" />
                <link rel="canonical" href="https://52roofer.com${page.path}" />
                <script type="application/ld+json">
                    ${JSON.stringify(page.schema, null, 2)}
                </script>
            </Head>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">${page.title}</h1>
                <VoiceSearch />
                <div className="mt-8 prose max-w-none">
                    <h2>Voice-Enabled Roofing Services</h2>
                    <p>Access our roofing services using voice commands:</p>
                    <ul>
                        <li>"Get a roof inspection"</li>
                        <li>"Schedule emergency roof repair"</li>
                        <li>"Request roofing quote"</li>
                        <li>"Find nearest roofing contractor"</li>
                    </ul>
                </div>
            </div>
        </Layout>
    );
}`;

  fs.writeFileSync(pagePath, pageContent);
  console.log(`Created ${page.path}`);
});

// Create VoiceSearch component
const voiceSearchComponentPath = path.join("components", "VoiceSearch.js");
const voiceSearchDir = path.dirname(voiceSearchComponentPath);

if (!fs.existsSync(voiceSearchDir)) {
  fs.mkdirSync(voiceSearchDir, { recursive: true });
}

const voiceSearchContent = `import { useState, useEffect } from 'react';

export default function VoiceSearch() {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [supported, setSupported] = useState(true);

    useEffect(() => {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            setSupported(false);
        }
    }, []);

    const startListening = () => {
        if (!supported) return;

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = () => {
            setIsListening(true);
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setTranscript(transcript);
            processVoiceCommand(transcript);
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            setIsListening(false);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognition.start();
    };

    const processVoiceCommand = (command) => {
        const lowerCommand = command.toLowerCase();
        
        // Add your voice command processing logic here
        if (lowerCommand.includes('inspection')) {
            window.location.href = '/services/roof-inspection';
        } else if (lowerCommand.includes('repair')) {
            window.location.href = '/services/roof-repairs';
        } else if (lowerCommand.includes('quote')) {
            window.location.href = '/contact';
        }
    };

    if (!supported) {
        return (
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
                Voice recognition is not supported in your browser.
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Voice Search</h2>
            <button
                onClick={startListening}
                className={\`px-6 py-3 rounded-full \${
                    isListening 
                        ? 'bg-red-500 hover:bg-red-600' 
                        : 'bg-blue-500 hover:bg-blue-600'
                } text-white font-semibold transition-colors\`}
            >
                {isListening ? 'Listening...' : 'Start Voice Search'}
            </button>
            {transcript && (
                <div className="mt-4">
                    <p className="font-semibold">You said:</p>
                    <p className="mt-2 p-3 bg-gray-100 rounded">{transcript}</p>
                </div>
            )}
        </div>
    );
}`;

fs.writeFileSync(voiceSearchComponentPath, voiceSearchContent);
console.log("Created VoiceSearch component");

console.log(
  "\nAll voice search pages and components have been created successfully!",
);
