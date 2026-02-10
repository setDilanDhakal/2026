const Footer = () => {
  return (
    <footer className="bg-primary text-light py-6 md:py-8 mt-8 md:mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">API Explorer</h3>
            <p className="text-secondary text-xs md:text-sm">
              Exploring JSONPlaceholder APIs with a beautiful interface
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 md:mb-3 text-sm md:text-base">Resources</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-secondary">
              <li>Users API</li>
              <li>Posts API</li>
              <li>Albums API</li>
              <li>Photos API</li>
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold mb-2 md:mb-3 text-sm md:text-base">About</h4>
            <p className="text-secondary text-xs md:text-sm">
              Built with React, Vite, and Tailwind CSS
            </p>
            <p className="text-secondary text-xs md:text-sm mt-2">
              Data from JSONPlaceholder
            </p>
          </div>
        </div>
        <div className="border-t border-secondary/30 mt-4 md:mt-6 pt-4 md:pt-6 text-center text-secondary text-xs md:text-sm">
          © 2026 API Explorer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
