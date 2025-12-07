import { Instagram, Linkedin, Github } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-indigo-900 flex flex-col justify-center items-center text-white px-4">
      <div className="max-w-md text-center">
        <h1 className="text-5xl font-bold">Fachri Akbar Rahmanda</h1>
        <p className="mt-2 text-lg">Software Engineer</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="https://www.instagram.com/fachriakbb/" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/fachriakbr" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://www.github.com/pukuri" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
