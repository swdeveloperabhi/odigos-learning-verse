
import React from 'react';
import { Check } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Learn-by-doing modules',
      description: 'Interactive training inside tools',
      icon: 'graduation-cap'
    },
    {
      title: 'AI-powered assistant',
      description: 'Real-time guidance and answers',
      icon: 'brain'
    },
    {
      title: 'Role-adaptive learning paths',
      description: 'Tailored to individual needs',
      icon: 'route'
    },
    {
      title: 'Hybrid learning',
      description: 'Desk + on-ground training for all roles',
      icon: 'layers'
    },
    {
      title: 'Gamified engagement',
      description: 'Challenges, rewards, leaderboards',
      icon: 'trophy'
    },
    {
      title: 'Seamless integrations',
      description: 'Slack, Teams, Notion, HR dashboards',
      icon: 'puzzle'
    }
  ];

  // Custom icon renderer based on icon name
  const renderIcon = (iconName: string) => {
    switch(iconName) {
      case 'graduation-cap':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
          </svg>
        );
      case 'brain':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44A2.5 2.5 0 0 1 2 17.5v-10a2.5 2.5 0 0 1 5-.44A2.5 2.5 0 0 1 9.5 2Z"></path>
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44A2.5 2.5 0 0 0 22 17.5v-10a2.5 2.5 0 0 0-5-.44A2.5 2.5 0 0 0 14.5 2Z"></path>
          </svg>
        );
      case 'route':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="19" r="3"></circle>
            <circle cx="18" cy="5" r="3"></circle>
            <path d="M12 19h4a2 2 0 0 0 2-2v-8"></path>
            <path d="M8 5h4a2 2 0 0 1 2 2v8"></path>
          </svg>
        );
      case 'layers':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
        );
      case 'trophy':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
            <path d="M4 22h16"></path>
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
          </svg>
        );
      case 'puzzle':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"></path>
          </svg>
        );
      default:
        return <Check />;
    }
  };

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-odigos-deepPurple mb-6">Why Companies Choose Odigos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform offers comprehensive training solutions that empower employees to excel in their roles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100 hover:border-odigos-lightPurple fade-in-section"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-odigos-purple bg-odigos-softPurple p-3 rounded-lg">
                  {renderIcon(feature.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-gray-700 mb-6">
            Join leading companies that have transformed their employee training with Odigos
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
            {/* Placeholder company logos */}
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
            <div className="h-8 w-32 bg-gray-300 rounded"></div>
            <div className="h-8 w-28 bg-gray-300 rounded"></div>
            <div className="h-8 w-30 bg-gray-300 rounded"></div>
            <div className="h-8 w-26 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
