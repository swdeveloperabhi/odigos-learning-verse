
import React from 'react';
import { Check } from 'lucide-react';

const ComparisonSection = () => {
  return (
    <section id="comparison" className="py-20 bg-odigos-softPurple">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-odigos-deepPurple mb-6">How Odigos Stands Out</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how our approach to employee training differs from traditional solutions.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-odigos-deepPurple text-white">
                <th className="py-4 px-6 text-left">Feature</th>
                <th className="py-4 px-6 text-center">Traditional LMS</th>
                <th className="py-4 px-6 text-center">Digital Adoption Tools</th>
                <th className="py-4 px-6 text-center bg-odigos-purple">Odigos</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 font-medium">Format</td>
                <td className="py-4 px-6 text-center">Video courses</td>
                <td className="py-4 px-6 text-center">In-app walkthroughs</td>
                <td className="py-4 px-6 text-center bg-odigos-softPurple">
                  <div className="flex items-center justify-center gap-2">
                    <Check size={18} className="text-odigos-purple" />
                    <span className="font-medium">Tool-native learning</span>
                  </div>
                </td>
              </tr>
              
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 font-medium">Personalization</td>
                <td className="py-4 px-6 text-center">Basic</td>
                <td className="py-4 px-6 text-center">Manual</td>
                <td className="py-4 px-6 text-center bg-odigos-softPurple">
                  <div className="flex items-center justify-center gap-2">
                    <Check size={18} className="text-odigos-purple" />
                    <span className="font-medium">AI-powered paths</span>
                  </div>
                </td>
              </tr>
              
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 font-medium">Real-Time Help</td>
                <td className="py-4 px-6 text-center">None</td>
                <td className="py-4 px-6 text-center">Tooltips</td>
                <td className="py-4 px-6 text-center bg-odigos-softPurple">
                  <div className="flex items-center justify-center gap-2">
                    <Check size={18} className="text-odigos-purple" />
                    <span className="font-medium">Live AI assistant</span>
                  </div>
                </td>
              </tr>
              
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 font-medium">Hybrid Training</td>
                <td className="py-4 px-6 text-center">No</td>
                <td className="py-4 px-6 text-center">No</td>
                <td className="py-4 px-6 text-center bg-odigos-softPurple">
                  <div className="flex items-center justify-center gap-2">
                    <Check size={18} className="text-odigos-purple" />
                    <span className="font-medium">Physical + Digital</span>
                  </div>
                </td>
              </tr>
              
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 font-medium">Gamification</td>
                <td className="py-4 px-6 text-center">Limited</td>
                <td className="py-4 px-6 text-center">Minimal</td>
                <td className="py-4 px-6 text-center bg-odigos-softPurple">
                  <div className="flex items-center justify-center gap-2">
                    <Check size={18} className="text-odigos-purple" />
                    <span className="font-medium">Smart rewards</span>
                  </div>
                </td>
              </tr>
              
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 font-medium">Integration</td>
                <td className="py-4 px-6 text-center">Poor</td>
                <td className="py-4 px-6 text-center">Some</td>
                <td className="py-4 px-6 text-center bg-odigos-softPurple">
                  <div className="flex items-center justify-center gap-2">
                    <Check size={18} className="text-odigos-purple" />
                    <span className="font-medium">Deep plug-in support</span>
                  </div>
                </td>
              </tr>
              
              <tr>
                <td className="py-4 px-6 font-medium">Pricing</td>
                <td className="py-4 px-6 text-center">High</td>
                <td className="py-4 px-6 text-center">Enterprise-only</td>
                <td className="py-4 px-6 text-center bg-odigos-softPurple">
                  <div className="flex items-center justify-center gap-2">
                    <Check size={18} className="text-odigos-purple" />
                    <span className="font-medium">Modular & scalable</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
