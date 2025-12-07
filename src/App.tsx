import { Instagram, Linkedin, Github } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-4">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold">Fachri Akbar Rahmanda</h1>
        <p className="mt-2 text-lg">Software Engineer</p>
        <div className="flex justify-evenly mt-4 space-x-4">
          <a href="https://www.instagram.com/fachriakbb/" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6" color="white" />
          </a>
          <a href="https://www.linkedin.com/in/fachriakbr" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" color="white" />
          </a>
          <a href="https://www.github.com/pukuri" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6" color="white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
