import { useState, useEffect } from 'react';
import { FaImage } from 'react-icons/fa';

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=100')
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleImageError = (photoId) => {
    setImageErrors(prev => ({ ...prev, [photoId]: true }));
  };

  const getImageUrl = (photo, isThumbnail = true) => {
    // Use picsum.photos as a reliable alternative
    const size = isThumbnail ? '150' : '600';
    return `https://picsum.photos/id/${photo.id}/` + size;
  };

  if (loading) {
    return <div className="text-center py-12 text-primary text-xl">Loading photos...</div>;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-primary mb-6">Photos Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
          >
            <div className="relative pb-[100%] bg-secondary/20">
              {imageErrors[photo.id] ? (
                <div className="absolute inset-0 flex items-center justify-center bg-secondary/10">
                  <FaImage className="text-4xl text-secondary" />
                </div>
              ) : (
                <img
                  src={getImageUrl(photo, true)}
                  alt={photo.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  onError={() => handleImageError(photo.id)}
                />
              )}
            </div>
            <div className="p-3">
              <p className="text-xs text-secondary mb-1">Album {photo.albumId}</p>
              <h3 className="text-sm font-semibold text-primary line-clamp-2 capitalize">
                {photo.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-primary/90 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-primary capitalize pr-8">
                {selectedPhoto.title}
              </h3>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="text-secondary hover:text-primary text-3xl leading-none flex-shrink-0"
              >
                ×
              </button>
            </div>
            <div className="relative bg-secondary/10 rounded-lg overflow-hidden mb-4">
              {imageErrors[selectedPhoto.id] ? (
                <div className="flex items-center justify-center h-96 bg-secondary/10">
                  <FaImage className="text-6xl text-secondary" />
                </div>
              ) : (
                <img
                  src={getImageUrl(selectedPhoto, false)}
                  alt={selectedPhoto.title}
                  className="w-full h-auto"
                  onError={() => handleImageError(selectedPhoto.id)}
                />
              )}
            </div>
            <div className="flex gap-4 text-sm">
              <span className="bg-accent text-white px-3 py-1 rounded-full font-semibold">
                Photo ID: {selectedPhoto.id}
              </span>
              <span className="bg-secondary/30 text-primary px-3 py-1 rounded-full">
                Album ID: {selectedPhoto.albumId}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photos;
