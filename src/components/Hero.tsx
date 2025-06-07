
import React, { useEffect, useState } from 'react';
import { ArrowRight, Globe } from 'lucide-react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'From Idea to Digital Reality';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated tech lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="tech-lines absolute top-1/4 left-0 w-full h-px"></div>
        <div className="tech-lines absolute top-2/4 right-0 w-full h-px animation-delay-1000"></div>
        <div className="tech-lines absolute top-3/4 left-0 w-full h-px animation-delay-2000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main headline with typewriter effect */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">
              {displayedText}
              <span className="animate-blink">|</span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-ider-grey mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-3000">
            We help you design, build, and scale digital solutions that drive results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-4000">
            <a
              href="#contact"
              className="group bg-ider-yellow text-ider-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 flex items-center space-x-2 neon-glow"
            >
              <span>🚀 Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#portfolio"
              className="group glass-effect px-8 py-4 rounded-full font-semibold text-lg text-white hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
            >
              <Globe className="w-5 h-5" />
              <span>👁️ Explore Our Work</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up animation-delay-5000">
            {[
              { number: '50+', label: 'Happy Clients' },
              { number: '100+', label: 'Projects Completed' },
              { number: '24/7', label: 'Support' },
              { number: '5★', label: 'Average Rating' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-ider-yellow mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-ider-grey">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-ider-yellow rounded-full flex justify-center">
          <div className="w-1 h-3 bg-ider-yellow rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
