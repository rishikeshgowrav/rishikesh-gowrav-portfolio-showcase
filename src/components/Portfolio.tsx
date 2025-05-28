
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'Food Spoilage Detector',
      description: 'An innovative sensor-based system that detects spoiled food using high-frequency sensors. This project combines hardware integration with software analysis to provide real-time food quality assessment.',
      technologies: ['Python', 'Sensors', 'Data Analysis', 'IoT'],
      category: 'Hardware/Software Integration',
      featured: true
    },
    {
      title: 'MERN E-Commerce Platform',
      description: 'A full-stack e-commerce application built with the MERN stack, featuring user authentication, product management, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      category: 'Web Development',
      featured: false
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management application with real-time updates, user roles, and project tracking capabilities.',
      technologies: ['JavaScript', 'React', 'Node.js', 'Socket.io'],
      category: 'Web Development',
      featured: false
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'A data visualization dashboard that displays weather patterns and forecasts using external APIs and interactive charts.',
      technologies: ['Python', 'JavaScript', 'Chart.js', 'API Integration'],
      category: 'Data Visualization',
      featured: false
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-navy mb-4">
            My Projects
          </h2>
          <p className="text-xl text-portfolio-gray max-w-3xl mx-auto">
            A showcase of my technical projects and development skills across 
            various domains and technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 ${
                project.featured 
                  ? 'md:col-span-2 bg-gradient-to-br from-portfolio-navy to-portfolio-navy-dark text-white' 
                  : 'hover:-translate-y-2'
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <span className="bg-portfolio-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <span className={`text-sm font-medium ${
                    project.featured ? 'text-portfolio-accent' : 'text-portfolio-accent'
                  }`}>
                    {project.category}
                  </span>
                  <h3 className={`text-2xl font-bold mt-2 ${
                    project.featured ? 'text-white' : 'text-portfolio-navy'
                  }`}>
                    {project.title}
                  </h3>
                </div>

                <p className={`leading-relaxed ${
                  project.featured ? 'text-gray-300' : 'text-portfolio-gray'
                }`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.featured
                          ? 'bg-white/20 text-white'
                          : 'bg-portfolio-navy/10 text-portfolio-navy'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    variant={project.featured ? "secondary" : "outline"}
                    size="sm"
                    className="group/btn"
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                    <ExternalLink size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant={project.featured ? "outline" : "ghost"}
                    size="sm"
                    className={project.featured ? "border-white text-white hover:bg-white hover:text-portfolio-navy" : ""}
                  >
                    Live Demo
                    <ExternalLink size={14} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://github.com/konda-reddy07', '_blank')}
            className="group"
          >
            View All Projects on GitHub
            <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
