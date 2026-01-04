import { ArrowLeft, GraduationCap, Briefcase, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  const journeyItems = [
    {
      title: "Engineering Manager & Team Lead",
      organization: "Vidio.com",
      period: "2021 - Present",
      description: `Delivered seamless content upload experiences across front-end and back-end systems, ensuring smooth user interactions and reliable performance. 
      Maintained and enhanced an in-house video player built with pure JavaScript and Video.js for optimal playback quality. 
      Optimized the in-house video transcoding system while spearheading development of DRM transcoding and packaging using FFmpeg to bolster content security.
​
      Supported server and client teams in crafting consolidated, uniform API designs that streamlined development and integration efforts. 
      Conducted regular 1-on-1 sessions with team members, mentees, and interns to foster growth and knowledge sharing. 
      Streamlined CMS content setup using Rails for efficiency, while optimizing cloud platform storage, CDN delivery costs, and overall infrastructure economics.`,
      icon: Briefcase,
    },
    {
      title: "Full-Stack Engineer",
      organization: "Vidio.com",
      period: "2018 - 2021",
      description: `Developed key video catalogue and livestream pages using Ruby on Rails, while introducing user subscription and premium content features. 

      Created a comprehensive CMS dashboard to streamline content management workflows. 

      Contributed significantly to migrating server infrastructure from AWS to Google Cloud Platform.`,
      icon: Briefcase,
    },
    {
      title: "UI & Frontend Engineer",
      organization: "Bisnis Indonesia Sibertama",
      period: "2016 - 2018",
      description: "Develop UI front end for numerous websites including news and e-commerce platforms.",
      icon: Briefcase,
    },
    {
      title: "Computer Science Degree",
      organization: "Bina Nusantara University",
      period: "2012 - 2016",
      description: "Foundation in computer science, algorithms, and software engineering principles.",
      icon: GraduationCap,
    }
  ];

  return (
    <div className="py-12 bg-gray-900 flex flex-col justify-center items-center px-4">
      <div className="text-center text-white max-w-6xl">
        <Link to="/" className="inline-flex items-center mb-8 hover:underline">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-5xl font-bold mb-6">About Me</h1>
        
        <div className="text-lg leading-relaxed space-y-4">
          <p>
            With over 9 years as a web developer and software engineer, passion for building robust applications remains strong. A fast learner who thrives on mastering new technologies, career started with 2 years as a frontend engineer before advancing to engineering manager. Expertise spans full-stack development, leading teams on OTT platforms like Vidio.com.
          </p>
          
          <p>
            Began as a frontend engineer for two years at a digital agency, honing skills in modern web interfaces. Progressed to full-stack roles, including core site engineering with video catalogues, subscriptions, and CMS dashboards. Now serves as engineering manager and team lead since 2021, overseeing content upload experiences, custom video players, transcoding, DRM, API design, etc.
          </p>
        </div>

        <div className="mt-16 w-full">
          <h2 className="text-3xl font-bold mb-12">My Journey</h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 bg-gray-600 h-full"></div>
            
            <div className="space-y-12">
              {journeyItems.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors">
                      <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-3`}>
                        <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className={`p-2 rounded-full bg-gray-300 ${index % 2 === 0 ? 'ml-3' : 'mr-3'}`}>
                            <item.icon className="w-4 h-4 text-black" />
                          </div>
                          <div className="flex items-center text-gray-400">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="text-sm">{item.period}</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <h4 className={`text-lg font-medium text-blue-400 mb-3`}>{item.organization}</h4>
                      <p className="text-gray-300 leading-relaxed whitespace-pre-line">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className={`w-4 h-4 rounded-full border-4 bg-gray-500 border-gray-300`}></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
