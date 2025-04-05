import React from 'react';
import CtaButton from './CtaButton';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Odigos completely transformed how we onboard new hires. What used to take weeks now happens in days, and our employees are more confident using our tools.",
      name: "Sarah Johnson",
      title: "Head of HR, TechCorp",
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      quote: "The real-time AI assistant is a game-changer. Our team members get the help they need exactly when they need it, without disrupting their workflow.",
      name: "Michael Chen",
      title: "L&D Manager, GrowthStartup",
      image: "https://i.pravatar.cc/150?img=2"
    },
    {
      quote: "We've seen a 65% improvement in tool adoption since implementing Odigos. The personalized learning paths ensure everyone gets the training they actually need.",
      name: "Alex Rivera",
      title: "CTO, InnovateNow",
      image: "https://i.pravatar.cc/150?img=3"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-odigos-deepPurple mb-6">What Companies Are Saying</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our customers have experienced.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md fade-in-section relative"
            >
              {/* Quote mark decoration */}
              <div className="absolute top-4 right-4 text-5xl text-odigos-softPurple opacity-50 font-serif">"</div>
              
              <p className="text-gray-700 mb-6 relative z-10">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-odigos-purple mb-6">
            Join these satisfied customers and transform your employee training
          </p>
          <div className="inline-block">
            <CtaButton>Start Your Free Trial</CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
