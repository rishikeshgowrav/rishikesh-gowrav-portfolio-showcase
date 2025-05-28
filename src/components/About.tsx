
import { Code, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const skills = [
    'JavaScript', 'Python', 'Java', 'C', 'React', 'Node.js', 
    'MongoDB', 'Express.js', 'HTML/CSS', 'Git', 'SQL', 'TypeScript'
  ];

  const education = [
    {
      institution: 'VIT University',
      degree: 'B.Tech Computer Science',
      period: '2023 - 2027',
      status: 'Current'
    },
    {
      institution: 'Edify School',
      degree: 'Higher Secondary (+1, +2)',
      period: '2021 - 2022',
      status: 'Completed'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-navy mb-4">
            About Me
          </h2>
          <p className="text-xl text-portfolio-gray max-w-3xl mx-auto">
            A passionate full-stack developer with a strong foundation in computer science
            and a drive to create innovative digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold text-portfolio-navy mb-4">My Journey</h3>
              <p className="text-portfolio-gray leading-relaxed mb-6">
                I'm currently pursuing my B.Tech in Computer Science at VIT University, 
                where I'm deepening my understanding of software development and computer systems. 
                My passion for coding led me to complete the comprehensive Blackbucks MERN 
                full-stack course, where I mastered modern web development technologies.
              </p>
              <p className="text-portfolio-gray leading-relaxed">
                With expertise in Python, C, Java, and the complete MERN stack, I enjoy 
                building full-stack applications that solve real-world problems. My projects 
                range from innovative hardware-software integrations to modern web applications.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-portfolio-navy mb-4 flex items-center">
                <Code className="mr-2 text-portfolio-accent" size={20} />
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white border border-portfolio-accent/20 rounded-full text-portfolio-navy text-sm font-medium hover:bg-portfolio-accent hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold text-portfolio-navy mb-6 flex items-center">
                <GraduationCap className="mr-2 text-portfolio-accent" size={20} />
                Education
              </h4>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-portfolio-navy">{edu.institution}</h5>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'Current' 
                          ? 'bg-portfolio-accent text-white' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-portfolio-gray">{edu.degree}</p>
                    <p className="text-sm text-portfolio-gray-light">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-portfolio-navy mb-4 flex items-center">
                <Award className="mr-2 text-portfolio-accent" size={20} />
                Certification
              </h4>
              <div>
                <h5 className="font-medium text-portfolio-navy">Blackbucks MERN Full Stack Course</h5>
                <p className="text-portfolio-gray text-sm">Comprehensive training in MongoDB, Express.js, React, and Node.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
