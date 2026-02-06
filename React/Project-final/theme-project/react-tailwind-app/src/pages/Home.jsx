const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to MyApp
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A modern React application with Tailwind CSS and dark mode support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-colors duration-300">
            <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Fast Performance
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Built with Vite for lightning-fast development and optimized production builds.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-colors duration-300">
            <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Beautiful Design
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Styled with Tailwind CSS for a modern, responsive, and customizable interface.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-colors duration-300">
            <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">🌙</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Dark Mode
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Toggle between light and dark themes for comfortable viewing anytime.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">
            Explore our features and see what makes this app special.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
