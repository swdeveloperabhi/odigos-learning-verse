
import React from 'react';

const ProblemSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-odigos-deepPurple mb-6">Training That Works for Today's Workforce</h2>
          <p className="text-lg text-gray-600">
            Companies struggle to train employees effectively on essential tools like Excel, Figma, GitHub, and CRMs. 
            Traditional methods fail to deliver meaningful results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Problem 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-red-400 fade-in-section">
            <div className="mb-4 text-red-500 bg-red-50 rounded-full w-12 h-12 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"></rect>
                <path d="M15 9l-6 6"></path>
                <path d="M9 9l6 6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Lack of Interactivity</h3>
            <p className="text-gray-600">
              Passive watching of training videos doesn't translate to active skill development.
            </p>
          </div>
          
          {/* Problem 2 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-red-400 fade-in-section">
            <div className="mb-4 text-red-500 bg-red-50 rounded-full w-12 h-12 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Unrealistic Training</h3>
            <p className="text-gray-600">
              Training environments don't reflect real-world usage scenarios and workflows.
            </p>
          </div>
          
          {/* Problem 3 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-red-400 fade-in-section">
            <div className="mb-4 text-red-500 bg-red-50 rounded-full w-12 h-12 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Hard to Track</h3>
            <p className="text-gray-600">
              Difficult to personalize training and track real progress with traditional methods.
            </p>
          </div>
          
          {/* Problem 4 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-red-400 fade-in-section">
            <div className="mb-4 text-red-500 bg-red-50 rounded-full w-12 h-12 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"></path>
                <path d="M15 7h6v6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Poor ROI</h3>
            <p className="text-gray-600">
              Low engagement leads to wasted resources and limited skill retention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
