
import React from 'react';

const ImpactSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-odigos-softPurple opacity-20 rounded-bl-full"></div>
      
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-odigos-deepPurple mb-6">Built for Modern Teams</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Odigos addresses the urgent need for effective training in today's dynamic workplace.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Impact Card 1 */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden fade-in-section group hover:border-odigos-purple transition-all">
            <div className="h-32 bg-gradient-to-r from-odigos-purple to-odigos-lightPurple flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Real-time Training</h3>
              <p className="text-gray-600">
                Deliver just-in-time guidance during onboarding and beyond. Employees learn as they work, minimizing disruptions.
              </p>
            </div>
          </div>
          
          {/* Impact Card 2 */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden fade-in-section group hover:border-odigos-purple transition-all">
            <div className="h-32 bg-gradient-to-r from-blue-500 to-odigos-purple flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Personalized Learning</h3>
              <p className="text-gray-600">
                Tailored learning journeys adapt to each role and individual, ensuring relevant skill development at the right pace.
              </p>
            </div>
          </div>
          
          {/* Impact Card 3 */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden fade-in-section group hover:border-odigos-purple transition-all">
            <div className="h-32 bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                <rect width="7" height="5" x="3" y="16" rx="1"></rect>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Hybrid Solutions</h3>
              <p className="text-gray-600">
                Flexible learning formats for both desk workers and field staff, ensuring no employee is left behind.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-odigos-softPurple rounded-xl p-8 shadow-inner">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Stat 1 */}
            <div className="fade-in-section">
              <div className="text-4xl font-bold text-odigos-purple mb-2">78%</div>
              <p className="text-gray-700">Reduction in training time</p>
            </div>
            
            {/* Stat 2 */}
            <div className="fade-in-section">
              <div className="text-4xl font-bold text-odigos-purple mb-2">92%</div>
              <p className="text-gray-700">Improved tool proficiency</p>
            </div>
            
            {/* Stat 3 */}
            <div className="fade-in-section">
              <div className="text-4xl font-bold text-odigos-purple mb-2">3.5x</div>
              <p className="text-gray-700">ROI compared to traditional training</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
