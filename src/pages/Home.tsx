import { Instagram, Linkedin, Github } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [title, setTitle] = useState<string>('Software Engineer')
  
  useEffect(() => {
    const interval = setInterval(() => {
      const titles = ['Fullstack Engineer', 'Frontend Engineer', 'Backend Engineer', 'Engineering Manager', 'Web Developer']
      setTitle(titles[Math.floor(Math.random()*titles.length)])
    }, 3000)
    
    return () => {
      clearInterval(interval)
    }
  }, [])
  
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-4">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold">Fachri Akbar Rahmanda</h1>
        <p className="mt-2 text-xl">{title}</p>
        
        <div className="flex justify-center mt-8 gap-16">
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

        <div className="flex justify-center mt-8 space-x-4">
          <Link to="/about" className="px-6 py-3 hover:underline">About Me</Link>
          {/* <Link to="/works" className="px-6 py-3 hover:underline">My Works</Link> */}
        </div>
        
      </div>
    </div>
  );
}

export default Home;
