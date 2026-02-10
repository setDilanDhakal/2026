import { FaArrowLeft, FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt, FaBuilding, FaCity, FaMailBulk, FaMap } from 'react-icons/fa';

const UserProfile = ({ user, onBack }) => {
  return (
    <div>
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold"
      >
        <FaArrowLeft className="text-lg" />
        <span>Back to Users</span>
      </button>

      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-primary to-accent p-4 md:p-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-light rounded-full flex items-center justify-center text-primary text-3xl md:text-4xl font-bold shadow-lg">
              {user.name.charAt(0)}
            </div>
            <div className="text-white text-center sm:text-left">
              <h1 className="text-2xl md:text-4xl font-bold mb-2">{user.name}</h1>
              <p className="text-lg md:text-xl">@{user.username}</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 border-b-2 border-accent pb-2">
                Contact Information
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-xl md:text-2xl text-accent mt-1 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm text-secondary font-semibold">Email</p>
                    <p className="text-primary break-words">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaPhone className="text-xl md:text-2xl text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-secondary font-semibold">Phone</p>
                    <p className="text-primary">{user.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaGlobe className="text-xl md:text-2xl text-accent mt-1 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm text-secondary font-semibold">Website</p>
                    <a
                      href={`http://${user.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-primary underline break-words"
                    >
                      {user.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 border-b-2 border-accent pb-2">
                Address
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-xl md:text-2xl text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-secondary font-semibold">Street</p>
                    <p className="text-primary">{user.address.street}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaBuilding className="text-xl md:text-2xl text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-secondary font-semibold">Suite</p>
                    <p className="text-primary">{user.address.suite}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCity className="text-xl md:text-2xl text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-secondary font-semibold">City</p>
                    <p className="text-primary">{user.address.city}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaMailBulk className="text-xl md:text-2xl text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-secondary font-semibold">Zipcode</p>
                    <p className="text-primary">{user.address.zipcode}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaMap className="text-xl md:text-2xl text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-secondary font-semibold">Coordinates</p>
                    <p className="text-primary text-sm">
                      Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Information */}
          <div className="mt-6 md:mt-8 bg-accent/10 rounded-lg p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <FaBuilding className="text-accent" />
              Company Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div>
                <p className="text-sm text-secondary font-semibold mb-1">Company Name</p>
                <p className="text-primary font-bold text-base md:text-lg">{user.company.name}</p>
              </div>
              <div>
                <p className="text-sm text-secondary font-semibold mb-1">Catch Phrase</p>
                <p className="text-primary italic text-sm md:text-base">{user.company.catchPhrase}</p>
              </div>
              <div className="sm:col-span-2 lg:col-span-1">
                <p className="text-sm text-secondary font-semibold mb-1">Business</p>
                <p className="text-primary text-sm md:text-base">{user.company.bs}</p>
              </div>
            </div>
          </div>

          {/* Map Preview */}
          <div className="mt-6 md:mt-8">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <FaMap className="text-accent" />
              Location Map
            </h2>
            <div className="bg-secondary/10 rounded-lg overflow-hidden">
              <iframe
                title="User Location"
                width="100%"
                height="300"
                className="md:h-[400px]"
                frameBorder="0"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${parseFloat(user.address.geo.lng) - 0.1},${parseFloat(user.address.geo.lat) - 0.1},${parseFloat(user.address.geo.lng) + 0.1},${parseFloat(user.address.geo.lat) + 0.1}&layer=mapnik&marker=${user.address.geo.lat},${user.address.geo.lng}`}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
