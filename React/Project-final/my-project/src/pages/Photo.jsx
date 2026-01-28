import { useState, useEffect } from "react";
import axios from "axios";

function Photo() {
  const [photo, setPhoto] = useState([]);

  const handler = async () => {
    const respondPhoto = await axios.get(
      "https://jsonplaceholder.typicode.com/photos",
    );

    setPhoto(respondPhoto.data);
  };

  useEffect(() => {
    handler();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-1">Photos</h2>
        <p className="text-gray-500">Browse photos</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photo.splice(0, 20).map((items) => {
          return (
            <div
              key={items.id}
              className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
            >
              <h1 className="text-base font-semibold text-gray-900 mb-3">
                {items.title}
              </h1>
              <p className="text-xs text-gray-500 mb-1 truncate">{items.url}</p>
              <p className="text-xs text-gray-500 truncate">{items.thumbnailUrl}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Photo;
