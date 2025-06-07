
import React from 'react';
import { Zap, Users, Globe, Code } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Lightning-fast turnaround times without compromising on quality or attention to detail.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Users,
      title: 'Results-Focused',
      description: 'Every project is designed with your business goals in mind, ensuring measurable outcomes.',
      color: 'from-blue-400 to-purple-500',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Remote-first approach allows us to serve clients worldwide, 24/7 support included.',
      color: 'from-green-400 to-teal-500',
    },
    {
      icon: Code,
      title: 'Creative + Technical',
      description: 'Perfect blend of creative design and technical expertise for outstanding results.',
      color: 'from-pink-400 to-red-500',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Why Choose IDER?</span>
          </h2>
          <p className="text-xl text-ider-grey max-w-2xl mx-auto">
            We combine speed, creativity, and technical excellence to deliver exceptional digital solutions
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${reason.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
              
              {/* Card */}
              <div className="relative glass-effect rounded-2xl p-8 text-center group-hover:bg-white/10 transition-all duration-500 hover:scale-105 h-full">
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-r ${reason.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow`}>
                  <reason.icon className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-ider-yellow transition-colors duration-300">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-ider-grey leading-relaxed group-hover:text-white transition-colors duration-300">
                  {reason.description}
                </p>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-ider-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-ider-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Transform Your Ideas?
            </h3>
            <p className="text-ider-grey mb-6 leading-relaxed">
              Join 50+ satisfied clients who have successfully launched their digital products with IDER Solutions.
            </p>
            <a
              href="#contact"
              className="bg-ider-yellow text-ider-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 inline-flex items-center space-x-2 neon-glow"
            >
              <span>Let's Build Together</span>
              <span>🚀</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
