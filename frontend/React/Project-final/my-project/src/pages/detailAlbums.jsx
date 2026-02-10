import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaImages, FaLongArrowAltLeft, FaCamera } from "react-icons/fa";

function DetailAlbums() {
  const { id } = useParams();

  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [photo, setPhoto] = useState([]);

  const handler = async () => {
    setLoading(true);
    const respondAlbum = await axios.get(
      `https://jsonplaceholder.typicode.com/albums/${id}`,
    );
    setAlbum(respondAlbum.data);

    const respondPhoto = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?albumId=${id}`,
    );
    setPhoto(respondPhoto.data);
    setLoading(false);
  };

  useEffect(() => {
    handler();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <a
        href="/albums"
        className="flex items-center gap-2 text-neutral-600 text-sm"
      >
        <FaLongArrowAltLeft size={12} />
        <p>Back to Albums</p>
      </a>

      <div className="flex items-center my-5 gap-2">
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
          <FaImages className="text-green-600" size={20} />
        </div>
        <h1 className="font-bold text-neutral-700">Albums</h1>
      </div>

      <div className="border rounded-2xl p-8 border-neutral-300 mt-4">
        <span className="text-sm text-[#282829] flex items-center gap-1">
          <div>
            <p className="font-bold text-xl text-neutral-600">{album?.title}</p>
          </div>
        </span>
      </div>

      <div className="flex items-center my-5 gap-2">
        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
          <FaCamera className="text-orange-600" size={20} />
        </div>
        <h1 className="font-bold text-neutral-700">Photo({photo?.length})</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {photo.map((p) => (
          <div
            key={p.id}
            className="border rounded-xl shadow-md p-4 flex flex-col gap-2 bg-white hover:shadow-xl transition-shadow duration-300"
          >
            <p className="text-sm font-semibold text-gray-700 truncate">
              {p.title}
            </p>

            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-sm hover:underline break-all"
            >
              {p.url}
            </a>

            {/* Optional: Thumbnail URL */}
            <p className="text-gray-400 text-xs break-all">
              Thumbnail: {p.thumbnailUrl}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailAlbums;
