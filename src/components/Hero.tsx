
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-portfolio-navy to-portfolio-navy-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-portfolio-accent/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          <div className="lg:w-1/2 text-white space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-portfolio-accent font-medium">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Devarinti
                <br />
                <span className="text-portfolio-accent">Konda Reddy</span>
              </h1>
              <div className="text-xl lg:text-2xl text-gray-300 space-y-2">
                <p>Full Stack Developer</p>
                <p className="text-lg">B.Tech Student at VIT University</p>
              </div>
            </div>

            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              Passionate MERN stack developer with expertise in Python, C, and Java. 
              Creating innovative solutions and bringing ideas to life through code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-portfolio-accent hover:bg-portfolio-accent-light text-white px-8 py-6 text-lg group"
              >
                Get In Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-portfolio-navy px-8 py-6 text-lg"
                onClick={() => window.open('https://github.com/konda-reddy07', '_blank')}
              >
                View GitHub
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-16 lg:mt-0">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-portfolio-accent to-blue-600 p-1 animate-bounce-subtle">
                <img 
                  src="/lovable-uploads/816fb3b5-33e4-4d26-9fed-037356274c16.png" 
                  alt="Devarinti Konda Reddy - Full Stack Developer"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-portfolio-accent rounded-full flex items-center justify-center text-white font-bold">
                Dev
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                MERN
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
