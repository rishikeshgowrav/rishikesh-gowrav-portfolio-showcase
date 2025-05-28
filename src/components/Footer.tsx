
import { Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-navy text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Devarinti Konda Reddy</h3>
            <p className="text-gray-300">
              Full Stack Developer & B.Tech Student at VIT University
            </p>
            <p className="text-gray-400 text-sm">
              Passionate about creating innovative solutions through code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-300 hover:text-portfolio-accent transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:devarintikondareddy1@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-portfolio-accent transition-colors"
              >
                <Mail size={18} />
                <span>devarintikondareddy1@gmail.com</span>
              </a>
              <a
                href="tel:+917997929185"
                className="flex items-center space-x-3 text-gray-300 hover:text-portfolio-accent transition-colors"
              >
                <Phone size={18} />
                <span>+91 7997929185</span>
              </a>
              <a
                href="https://github.com/konda-reddy07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-portfolio-accent transition-colors"
              >
                <Github size={18} />
                <span>github.com/konda-reddy07</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Devarinti Konda Reddy. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
