
import React from 'react';
import { Globe, Code, Zap, Image } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: 'Digital Marketing',
      description: 'Complete digital marketing solutions to grow your online presence',
      features: [
        'SEO optimization & keyword research',
        'Social media management & paid ads',
        'Content creation & video editing',
        'Blog content & infographics',
      ],
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites that convert visitors into customers',
      features: [
        'WordPress, Wix & Shopify stores',
        'Custom responsive websites',
        'CRM integration & lead generation',
        'Fast-loading & SEO optimized',
      ],
      gradient: 'from-green-500 to-teal-600',
    },
    {
      icon: Code,
      title: 'App Development',
      description: 'Mobile and web applications built for scale',
      features: [
        'iOS & Android mobile apps',
        'Custom SaaS platforms',
        'Internal dashboards & CRMs',
        'API development & integrations',
      ],
      gradient: 'from-orange-500 to-red-600',
    },
    {
      icon: Image,
      title: 'Design & Multimedia',
      description: 'Visual identity and multimedia content that stands out',
      features: [
        'Logo design & brand identity',
        'Marketing banners & graphics',
        'Video editing & social media reels',
        'UI/UX design for web & mobile',
      ],
      gradient: 'from-pink-500 to-violet-600',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-ider-grey max-w-2xl mx-auto">
            End-to-end digital solutions to transform your business and accelerate growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-8 group hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-ider-yellow to-yellow-400 rounded-full flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                  <service.icon className="w-8 h-8 text-ider-dark" />
                </div>

                {/* Title and Description */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-ider-yellow transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-ider-grey mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3 text-ider-grey group-hover:text-white transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-ider-yellow rounded-full mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <a
                    href="#contact"
                    className="text-ider-yellow hover:text-yellow-400 font-semibold inline-flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300"
                  >
                    <span>Get Started</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-ider-grey mb-6">
            Need a custom solution? We'd love to discuss your project.
          </p>
          <a
            href="#contact"
            className="bg-ider-yellow text-ider-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 inline-flex items-center space-x-2 neon-glow"
          >
            <span>Start Your Project</span>
            <span>🚀</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
