
import React from 'react';
import CtaButton from './CtaButton';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center gradient-bg relative overflow-hidden">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="fade-in-section">
          <h1 className="mb-6">
            <span className="text-odigos-deepPurple">Revolutionize Employee Training</span>
            <span className="text-odigos-purple"> with Odigos</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-600">
            Personalized, immersive, and tool-native learning for modern teams.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <CtaButton>Request a Demo</CtaButton>
            <CtaButton variant="secondary">Start Your Free Trial</CtaButton>
          </div>
        </div>
        
        <div className="relative fade-in-section">
          <div className="relative bg-white rounded-xl shadow-2xl p-1 border border-gray-200 animate-float">
            <div className="bg-gray-100 rounded-t-lg h-8 flex items-center px-3 space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="p-4 relative">
              <div className="bg-white rounded-lg shadow-sm p-4 mb-3 border-l-4 border-odigos-purple">
                <p className="text-sm text-gray-700">Welcome to your Excel training module!</p>
              </div>
              <div className="bg-odigos-softPurple rounded-lg p-4 border border-odigos-lightPurple">
                <p className="text-sm font-medium">Odigos AI Assistant</p>
                <p className="text-xs text-gray-700">To use VLOOKUP, first select your target cell, then use the formula =VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])</p>
              </div>
              <div className="absolute -right-3 -top-3 bg-odigos-purple text-white rounded-full p-1 shadow-lg animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Background Decorations */}
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-odigos-purple rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -z-10 top-1/4 right-1/4 w-40 h-40 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-500 mb-2">Scroll to learn more</span>
        <ArrowDown className="text-odigos-purple" size={20} />
      </div>
    </section>
  );
};

export default HeroSection;
