import { useState, useEffect } from 'react';
import { FaFolder } from 'react-icons/fa';

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-12 text-primary text-xl">Loading albums...</div>;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-primary mb-6">Albums</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {albums.map((album) => (
          <div
            key={album.id}
            className="bg-white rounded-lg shadow-md p-5 border-b-4 border-accent hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 mx-auto">
              <FaFolder className="text-3xl text-accent" />
            </div>
            <div className="text-center">
              <span className="inline-block bg-secondary text-white px-2 py-1 rounded text-xs mb-2">
                Album #{album.id}
              </span>
              <h3 className="text-md font-semibold text-primary capitalize line-clamp-2 min-h-[3rem]">
                {album.title}
              </h3>
              <p className="text-secondary text-xs mt-2">User {album.userId}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Albums;
