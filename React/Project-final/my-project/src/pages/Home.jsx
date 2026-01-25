import { CiUser } from "react-icons/ci";
import { BsPostcardHeartFill } from "react-icons/bs";
import { IoIosAlbums } from "react-icons/io";
import { IoMdPhotos } from "react-icons/io";
import {useState,useEffect} from 'react'
import axios from 'axios'

function Home() {

  const [user,setUser] = useState([])
  const [post,setPost] = useState([]);
  const [albums,setAlbums] = useState([]);
  const [photo,setPhoto] = useState([]);


  const handler =async ()=>{
    const respondUser = await axios.get('https://jsonplaceholder.typicode.com/users');
    const respondPost = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const respondAlbums = await axios.get('https://jsonplaceholder.typicode.com/albums');
    const respondPhoto = await axios.get('https://jsonplaceholder.typicode.com/photos')

      setUser(respondUser.data);
      setAlbums(respondAlbums.data);
      setPost(respondPost.data);
      setPhoto(respondPhoto.data);


      
  }
  console.log("Count: ",user.length);
  console.log("Post",post.length);
  console.log("albums",albums.length);
  console.log("photo",photo.length);

  useEffect(()=>{
    handler();
  },[])

   return (
    <div className="mx-6 mt-6">
      <p className="font-bold text-xl mb-4">Dashboard</p>
      

      <div className="flex flex-wrap gap-4">


        <div className="flex justify-between items-center rounded-xl bg-[#B7BDF7] text-black p-5 w-full sm:w-full md:w-60 h-36">
          <div>
            <p className="text-xl font-semibold">Users</p>
            <p className="text-2xl font-bold">{user.length}</p>
            <a href="/user" className="text-sm underline hover:text-yellow-200">
              View All Users
            </a>
          </div>
          <CiUser size={40} />
        </div>


        <div className="flex justify-between items-center rounded-xl bg-[#F7B7B7] text-black p-5 w-full sm:w-full md:w-60 h-36">
          <div>
            <p className="text-xl font-semibold">Posts</p>
            <p className="text-2xl font-bold">{post.length}</p>
            <a href="/post" className="text-sm underline hover:text-gray-200">
              View All Posts
            </a>
          </div>
          <BsPostcardHeartFill size={40} />
        </div>


        <div className="flex justify-between items-center rounded-xl bg-[#B7F7D4] text-[#333] p-5 w-full sm:w-full md:w-60 h-36">
          <div>
            <p className="text-xl font-semibold">Albums</p>
            <p className="text-2xl font-bold">{albums.length}</p>
            <a href="/albums" className="text-sm underline hover:text-green-700">
              View All Albums
            </a>
          </div>
          <IoIosAlbums size={40} />
        </div>


        <div className="flex justify-between items-center rounded-xl bg-[#F7E3B7] text-[#333] p-5 w-full sm:w-full md:w-60 h-36">
          <div>
            <p className="text-xl font-semibold">Photos</p>
            <p className="text-2xl font-bold">{photo.length}</p>
            <a href="/photo" className="text-sm underline hover:text-orange-700">
              View All Photos
            </a>
          </div>
          <IoMdPhotos size={40} />
        </div>
      </div>
    </div>
  );
}

export default Home;
