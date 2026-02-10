const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Learn more about our mission and values
          </p>
        </div>

        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 mb-8 transition-colors duration-300">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            We are passionate developers dedicated to creating exceptional web experiences. 
            Our journey began with a simple idea: to build applications that are not only 
            functional but also beautiful and user-friendly.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Using modern technologies like React and Tailwind CSS, we craft solutions that 
            meet the needs of today's users while preparing for tomorrow's challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To empower developers and businesses with cutting-edge tools and technologies 
              that enable them to build amazing digital experiences. We believe in the power 
              of clean code, beautiful design, and seamless user experiences.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                Innovation and continuous improvement
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                User-centered design approach
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                Quality and attention to detail
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                Collaboration and community
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-lg mb-6">
            We're always looking for talented individuals to join our team.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
