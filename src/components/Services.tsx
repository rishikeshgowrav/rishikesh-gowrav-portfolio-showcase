
import { Code2, Database, Globe, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Full Stack Web Development',
      description: 'Complete web application development using MERN stack technologies, from frontend design to backend architecture.',
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB']
    },
    {
      icon: Code2,
      title: 'Software Development',
      description: 'Custom software solutions using Python, Java, and C, focusing on efficient algorithms and clean code architecture.',
      skills: ['Python', 'Java', 'C', 'Data Structures']
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Database architecture and optimization for scalable applications, with expertise in both SQL and NoSQL databases.',
      skills: ['MongoDB', 'MySQL', 'Database Design', 'Optimization']
    },
    {
      icon: Smartphone,
      title: 'IoT Solutions',
      description: 'Hardware-software integration projects, including sensor-based systems and embedded programming.',
      skills: ['Sensors', 'IoT', 'Hardware Integration', 'Data Analysis']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-navy mb-4">
            What I Do
          </h2>
          <p className="text-xl text-portfolio-gray max-w-3xl mx-auto">
            Leveraging my technical expertise to create innovative solutions 
            and tackle challenging development projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-portfolio-accent/10 rounded-2xl group-hover:bg-portfolio-accent group-hover:text-white transition-colors">
                  <service.icon size={32} className="text-portfolio-accent group-hover:text-white transition-colors" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-portfolio-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-portfolio-gray leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {service.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-portfolio-navy"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-portfolio-navy rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new challenges and innovative projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-portfolio-accent hover:bg-portfolio-accent-light text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Get In Touch
              </button>
              <button
                onClick={() => window.open('https://github.com/konda-reddy07', '_blank')}
                className="border border-white text-white hover:bg-white hover:text-portfolio-navy px-8 py-3 rounded-lg font-medium transition-colors"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
