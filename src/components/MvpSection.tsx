
import React from 'react';
import CtaButton from './CtaButton';

const MvpSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-odigos-deepPurple mb-6">Start Small, Scale Big</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our approach makes it easy to begin with focused pilots and expand as you see results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-4">Target mid-sized companies and high-growth startups with distributed teams through:</h3>
              
              {/* Strategy 1 */}
              <div className="flex gap-4 fade-in-section">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-odigos-purple text-white flex items-center justify-center font-semibold">1</div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Department-specific paid pilots</h4>
                  <p className="text-gray-600">
                    Start with a focused approach, such as sales teams using your CRM, and demonstrate measurable improvements.
                  </p>
                </div>
              </div>
              
              {/* Strategy 2 */}
              <div className="flex gap-4 fade-in-section">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-odigos-purple text-white flex items-center justify-center font-semibold">2</div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Concrete deliverables</h4>
                  <p className="text-gray-600">
                    Provide in-app modules and HR dashboards for tracking progress, giving stakeholders clear visibility into results.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 fade-in-section">
                <CtaButton>Contact Sales</CtaButton>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 fade-in-section">
            <div className="relative">
              {/* Main illustration */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
                <div className="bg-odigos-deepPurple text-white p-4">
                  <h4 className="font-semibold">Odigos Implementation Roadmap</h4>
                </div>
                <div className="p-6 space-y-4">
                  {/* Phase 1 */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center border-2 border-green-500 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-medium">Phase 1: Discovery & Pilot Design</h5>
                      <p className="text-sm text-gray-600">Identify key tools and processes for initial deployment</p>
                    </div>
                  </div>
                  
                  {/* Phase 2 */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center border-2 border-green-500 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-medium">Phase 2: Pilot Implementation</h5>
                      <p className="text-sm text-gray-600">Deploy tool-specific modules for a targeted department</p>
                    </div>
                  </div>
                  
                  {/* Phase 3 */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-500 flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div>
                      <h5 className="font-medium">Phase 3: Measure & Optimize</h5>
                      <p className="text-sm text-gray-600">Analyze usage data and refine training approaches</p>
                    </div>
                  </div>
                  
                  {/* Phase 4 */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border-2 border-gray-300 flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    </div>
                    <div>
                      <h5 className="font-medium">Phase 4: Company-wide Rollout</h5>
                      <p className="text-sm text-gray-600">Scale successful modules across all departments</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-lg -z-10 transform rotate-6"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-odigos-softPurple rounded-lg -z-10 transform -rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MvpSection;
