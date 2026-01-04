import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

function Works() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-4">
      <div className="text-center text-white max-w-6xl">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-5xl font-bold mb-6">My Works</h1>
        <p className="text-lg mb-12 text-gray-300">
          Here are some of the projects I've been working on
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder project cards */}
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Project One</h3>
            <p className="text-gray-300 mb-4">
              A brief description of your first project. This could be a web application, 
              mobile app, or any other software project you've worked on.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
              <a 
                href="#" 
                className="inline-flex items-center text-gray-400 hover:text-gray-300 transition-colors"
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Project Two</h3>
            <p className="text-gray-300 mb-4">
              Description of your second project. Highlight the technologies used 
              and what makes this project special or interesting.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
              <a 
                href="#" 
                className="inline-flex items-center text-gray-400 hover:text-gray-300 transition-colors"
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Project Three</h3>
            <p className="text-gray-300 mb-4">
              Your third project description. You can add more projects by 
              duplicating this card structure and updating the content.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
              <a 
                href="#" 
                className="inline-flex items-center text-gray-400 hover:text-gray-300 transition-colors"
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
