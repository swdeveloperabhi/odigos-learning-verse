
import React from 'react';
import CtaButton from './CtaButton';

const SolutionSection = () => {
  return (
    <section id="solutions" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -z-10 top-0 right-0 w-1/3 h-1/3 bg-odigos-softPurple opacity-30 rounded-bl-full"></div>
      <div className="absolute -z-10 bottom-0 left-0 w-1/4 h-1/4 bg-odigos-softPurple opacity-20 rounded-tr-full"></div>
      
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-odigos-deepPurple mb-6">Meet Odigos: Your Training OS</h2>
          <p className="text-lg text-gray-600">
            Odigos transforms employee training with innovative approaches to learning that drive real results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              {/* Solution 1 */}
              <div className="flex gap-4 fade-in-section">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-odigos-purple flex items-center justify-center text-white">
                    <span className="font-bold">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tool-native learning modules</h3>
                  <p className="text-gray-600">
                    Training embedded directly inside tools like Figma, Excel, and Notion, creating contextual learning experiences.
                  </p>
                </div>
              </div>
              
              {/* Solution 2 */}
              <div className="flex gap-4 fade-in-section">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-odigos-purple flex items-center justify-center text-white">
                    <span className="font-bold">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI-powered assistant</h3>
                  <p className="text-gray-600">
                    Real-time guidance within tools, answering questions and providing contextual help when needed.
                  </p>
                </div>
              </div>
              
              {/* Solution 3 */}
              <div className="flex gap-4 fade-in-section">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-odigos-purple flex items-center justify-center text-white">
                    <span className="font-bold">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Dynamic learning paths</h3>
                  <p className="text-gray-600">
                    Personalized to roles, tool usage, and performance, ensuring relevant skill development.
                  </p>
                </div>
              </div>
              
              {/* Solution 4 */}
              <div className="flex gap-4 fade-in-section">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-odigos-purple flex items-center justify-center text-white">
                    <span className="font-bold">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Hybrid training experiences</h3>
                  <p className="text-gray-600">
                    Combining digital modules with physical training for both desk and on-ground workers.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 fade-in-section">
                <CtaButton>Learn How It Works</CtaButton>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 fade-in-section">
            <div className="relative">
              {/* Main illustration */}
              <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-200 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-odigos-purple flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold">Odigos Learning Platform</h4>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm">Excel Mastery</span>
                      <span className="text-sm text-odigos-purple">80% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-odigos-purple h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm">Figma Essentials</span>
                      <span className="text-sm text-odigos-purple">45% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-odigos-purple h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-odigos-softPurple p-4 rounded-lg border border-odigos-lightPurple">
                    <div className="flex items-center gap-2 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-odigos-purple">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="10 8 16 12 10 16 10 8"></polygon>
                      </svg>
                      <span className="font-medium text-sm">Next recommended: GitHub Workflows</span>
                    </div>
                    <p className="text-xs text-gray-600">Tailored specifically for your developer role</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-0 -bottom-6 -right-6 w-32 h-32 bg-odigos-purple/10 rounded-lg transform rotate-6"></div>
              <div className="absolute -z-0 -top-6 -left-6 w-24 h-24 bg-blue-200/20 rounded-lg transform -rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
