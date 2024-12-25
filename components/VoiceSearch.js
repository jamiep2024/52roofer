import { useState, useEffect } from "react";

export default function VoiceSearch() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    if (
      !("webkitSpeechRecognition" in window) &&
      !("SpeechRecognition" in window)
    ) {
      setSupported(false);
    }
  }, []);

  const startListening = () => {
    if (!supported) return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
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
      console.error("Speech recognition error:", event.error);
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
    if (lowerCommand.includes("inspection")) {
      window.location.href = "/services/roof-inspection";
    } else if (lowerCommand.includes("repair")) {
      window.location.href = "/services/roof-repairs";
    } else if (lowerCommand.includes("quote")) {
      window.location.href = "/contact";
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
        className={`px-6 py-3 rounded-full ${
          isListening
            ? "bg-red-500 hover:bg-red-600"
            : "bg-blue-500 hover:bg-blue-600"
        } text-white font-semibold transition-colors`}
      >
        {isListening ? "Listening..." : "Start Voice Search"}
      </button>
      {transcript && (
        <div className="mt-4">
          <p className="font-semibold">You said:</p>
          <p className="mt-2 p-3 bg-gray-100 rounded">{transcript}</p>
        </div>
      )}
    </div>
  );
}
