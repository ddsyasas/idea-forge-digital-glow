
import React from 'react';
import { Users, Zap, Globe, Code } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Lightning-fast turnaround without compromising quality',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with years of industry experience',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with remote-first approach',
    },
    {
      icon: Code,
      title: 'Modern Tech',
      description: 'Cutting-edge technologies and best practices',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">About IDER Solutions</span>
            </h2>
            <p className="text-xl text-ider-grey max-w-2xl mx-auto leading-relaxed">
              We're your trusted partner in transforming ideas into powerful digital solutions. 
              From concept to launch, we guide you through every step of your digital journey.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="glass-effect rounded-2xl p-8 mb-16 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-ider-yellow">Our Mission</h3>
            <p className="text-lg text-ider-grey leading-relaxed">
              To empower individuals, startups, and established companies by turning their innovative 
              ideas into scalable digital products that drive real business results and create lasting impact.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-effect rounded-xl p-6 text-center group hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-ider-yellow to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                  <feature.icon className="w-8 h-8 text-ider-dark" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white">{feature.title}</h4>
                <p className="text-ider-grey">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold mb-12 text-white">
              Trusted by <span className="text-ider-yellow">50+</span> Companies Worldwide
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { metric: '100+', label: 'Projects Delivered' },
                { metric: '50+', label: 'Happy Clients' },
                { metric: '15+', label: 'Countries Served' },
                { metric: '99%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-4xl font-bold text-ider-yellow mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.metric}
                  </div>
                  <div className="text-ider-grey font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
