import { FaUsers, FaFileAlt, FaFolder, FaCamera, FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Navigation = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { id: 'users', label: 'Users', icon: FaUsers },
    { id: 'posts', label: 'Posts', icon: FaFileAlt },
    { id: 'albums', label: 'Albums', icon: FaFolder },
    { id: 'photos', label: 'Photos', icon: FaCamera },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl md:text-2xl font-bold text-light">API Explorer</h1>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-light text-2xl p-2"
          >
            <FaBars />
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-accent text-white font-semibold'
                      : 'text-secondary hover:bg-primary/80 hover:text-light'
                  }`}
                >
                  <Icon className="text-lg" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                    activeTab === tab.id
                      ? 'bg-accent text-white font-semibold'
                      : 'text-secondary hover:bg-primary/80 hover:text-light'
                  }`}
                >
                  <Icon className="text-lg" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
