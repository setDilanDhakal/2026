import { CiUser } from "react-icons/ci";
import { BsPostcardHeartFill } from "react-icons/bs";
import { IoIosAlbums } from "react-icons/io";
import { IoMdPhotos } from "react-icons/io";
import { useState, useEffect } from "react";
import { MdOutlineQueryStats } from "react-icons/md";
import {  FaFileAlt, FaImages, FaCamera, FaArrowRight, FaChartLine } from "react-icons/fa";

import { FaUser } from "react-icons/fa";
import axios from "axios";

function Home() {
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photo, setPhoto] = useState([]);

  const handler = async () => {
    const respondUser = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    const respondPost = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    const respondAlbums = await axios.get(
      "https://jsonplaceholder.typicode.com/albums",
    );
    const respondPhoto = await axios.get(
      "https://jsonplaceholder.typicode.com/photos",
    );

    setUser(respondUser.data);
    setAlbums(respondAlbums.data);
    setPost(respondPost.data);
    setPhoto(respondPhoto.data);
  };
  console.log("Count: ", user.length);
  console.log("Post", post.length);
  console.log("albums", albums.length);
  console.log("photo", photo.length);

  const getUserName = (userId) => {
    const foundUser = user.find((u) => u.id === userId);
    return foundUser ? foundUser.name : "Loading";
  };

  useEffect(() => {
    handler();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-3 ">
      <div className="mb-8 py-5 w-full flex items-center p-6 rounded-2xl bg-linear-to-r from-blue-600  to-blue-400">
        <div>
          <h1 className="text-3xl font-semibold text-white mb-1">
            Welcome Back!
          </h1>
          <p className="text-white">Overview of all your data at a glance</p>
        </div>
        <div className="flex-1">
          <MdOutlineQueryStats size={40} className="text-white ml-auto " />
        </div>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <FaUser className="text-blue-600" size={20} />
              </div>
              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">Active</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{user.length}</h3>
            <p className="text-sm text-gray-600">Total Users</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <FaFileAlt className="text-purple-600" size={20} />
              </div>
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">Published</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{post.length}</h3>
            <p className="text-sm text-gray-600">Total Posts</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <FaImages className="text-green-600" size={20} />
              </div>
              <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">Collections</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{albums.length}</h3>
            <p className="text-sm text-gray-600">Total Albums</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <FaCamera className="text-orange-600" size={20} />
              </div>
              <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">Media</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{photo.length}</h3>
            <p className="text-sm text-gray-600">Total Photos</p>
          </div>
        </div>

      <div className="my-9 ">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <FaUser size={20} className="text-gray-600" />
            <div>
              <h2 className="font-semibold text-lg text-gray-900">Users</h2>
              <p className="text-sm text-gray-500">{user.length} Total users</p>
            </div>
          </div>
          <a
            href="/user"
            className="text-sm text-blue-500 hover:text-[#ffff] border hover:border-non px-5 py-2 hover:bg-blue-500 "
          >
            View all →
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-3">
        {user.length > 0 &&
          user.slice(0, 5).map((user) => (
            <div
              key={user.id}
              className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 ">
                {user.name}
              </h3>
              <div className="space-y-1 mb-4">
                <p className="text-sm text-gray-600 mb-3">@{user.username}</p>
                <p className="text-sm text-gray-600">Email: {user.email}</p>
                <p className="text-sm text-gray-600">Phone: {user.phone}</p>
                <p className="text-sm text-gray-600">Website: {user.website}</p>
              </div>
            </div>
          ))}
      </div>

      <div className="my-9 ">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <BsPostcardHeartFill size={24} className="text-gray-400" />
            <div>
              <h2 className="font-semibold text-lg text-gray-900">Posts</h2>
              <p className="text-sm text-gray-500">{post.length} Total posts</p>
            </div>
          </div>
          <a
            href="/post"
            className="text-sm text-purple-500 hover:text-[#ffff]  border hover:border-non px-5 py-2 hover:bg-purple-500"
          >
            View all →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {post.length > 0 &&
            post.slice(0, 5).map((postItem) => {
              return (
                <div
                  key={postItem.id}
                  className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow flex flex-col"
                >
                  <h1 className="text-lg font-semibold text-gray-900 mb-2">
                    {postItem.title}
                  </h1>
                  <p className="text-xs text-gray-500 mb-3">
                    By {getUserName(postItem.userId)}
                  </p>
                  <p className="text-sm text-gray-600 mb-4 grow">
                    {postItem.body}
                  </p>
                </div>
              );
            })}
        </div>
      </div>

      {/* Albumms walal yeha xa  */}
      <div className="my-9">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <IoIosAlbums size={24} className="text-gray-400" />
            <div>
              <h2 className="font-semibold text-lg text-gray-900">Albums</h2>
              <p className="text-sm text-gray-500">
                {post.length} Total Albums
              </p>
            </div>
          </div>
          <a
            href="/albums"
            className="text-sm text-green-500 hover:text-[#ffffff] border hover:border-non   px-5 py-2 hover:bg-green-500"
          >
            View all →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {albums.length > 0 &&
            albums.slice(0, 5).map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
                >
                  <h1 className="text-base font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h1>
                  <p className="text-sm text-gray-500">
                    By {getUserName(item.userId)}
                  </p>
                </div>
              );
            })}
        </div>
      </div>

      <div className="my-9">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <IoMdPhotos size={24} className="text-gray-400" />
            <div>
              <h2 className="font-semibold text-lg text-gray-900">Photos</h2>
              <p className="text-sm text-gray-500">
                {photo.length} Total Photo
              </p>
            </div>
          </div>
          <a
            href="/photo"
            className="text-sm text-orange-500 hover:text-white border hover:border-non px-5 py-2 hover:bg-orange-500"
          >
            View all →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photo.slice(0, 5).map((items) => {
            return (
              <div
                key={items.id}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
              >
                <h1 className="text-base font-semibold text-gray-900 mb-3">
                  {items.title}
                </h1>
                <p className="text-xs text-gray-500 mb-1 truncate">
                  {items.url}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {items.thumbnailUrl}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
