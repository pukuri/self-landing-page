import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

function Works() {
  const projects = [
    {
      title: "Simple Expenses Tracker",
      description: "An end to end project from development to deployment for managing my daily expenses.",
      liveUrl: "https://expenses.fachriakbarr.com",
      codeUrl: "https://github.com/pukuri/expenses",
      technologies: ["React", "Typescript", "Go", "PostgreSQL"]
    },
    {
      title: "Vidio.com", 
      description: "The company i've been working on right now. A top OTT in Indonesia that serves VOD and live streaming content.",
      liveUrl: "https://www.vidio.com",
      codeUrl: "",
      technologies: ["React", "Ruby on Rails", "PostgreSQL"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-4">
      <div className="text-center text-white max-w-6xl">
        <Link to="/" className="inline-flex items-center mb-8 hover:underline">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-5xl font-bold mb-6">My Works</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 whitespace-pre-line">
                {project.description}
              </p>
              
              <div className="flex flex-wrap justify-between gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-center items-center space-x-4">
                <a href={project.liveUrl} target="_blank" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
                {
                  project.codeUrl &&
                  <a href={project.codeUrl} target="_blank" className="inline-flex items-center text-gray-400 hover:text-gray-300 transition-colors" >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;
