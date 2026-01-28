import { IoIosSend } from "react-icons/io";
import { PiLineVertical } from "react-icons/pi";
function footer() {
  return (
    <div className="w-full bg-gray-50 border-t border-gray-200 mt-16 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
          <div className="md:col-span-2">
            <h1 className="text-xl font-semibold text-gray-900 mb-3">MockMate</h1>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to our newsletter to get updates
            </p>
            <div className="flex gap-2">
              <input
                placeholder="Enter your email"
                type="email"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-[#F5AFAF] text-white p-2 rounded-lg hover:bg-[#de7a7a] transition-colors">
                <IoIosSend size={20} />
              </button>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-gray-900 mb-3 text-sm">Navigation</h2>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <a href="/user" className="hover:text-gray-900">Users</a>
              <a href="/post" className="hover:text-gray-900">Posts</a>
              <a href="/albums" className="hover:text-gray-900">Albums</a>
              <a href="/photo" className="hover:text-gray-900">Photos</a>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-gray-900 mb-3 text-sm">Resources</h2>
            <p className="text-sm text-gray-600">JSONPlaceholder</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <p>Made with ♡</p>
            <PiLineVertical />
            <p>By teams</p>
          </div>
          <div className="flex items-center gap-2">
            <p>Reserved</p>
            <PiLineVertical />
            <p>Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
