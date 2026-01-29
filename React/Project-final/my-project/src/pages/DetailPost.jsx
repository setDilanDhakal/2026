import { useState, useEffect } from "react";
import { FaLongArrowAltLeft, FaUser } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(true);

  const handle = async () => {
    setLoading(true);
    const respondPost = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    setPost(respondPost.data);

    const respondUser = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${respondPost.data.userId}`,
    );
    setUser(respondUser.data);

    const respondComment = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
    );
    setComment(respondComment.data);
    console.log(respondComment);
    setLoading(false);
  };

  useEffect(() => {
    handle();
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
        href="/post"
        className="flex items-center gap-2 text-neutral-600 text-sm"
      >
        <FaLongArrowAltLeft size={12} />
        <p>Back to post</p>
      </a>

      <div className="border rounded-2xl p-8 border-neutral-300 mt-4">
        <span className="text-sm text-[#282829] flex items-center gap-1">
          <FaFileAlt className="text-purple-600" size={20} />
          <div>
            <p className="font-bold text-neutral-600">{user?.name}</p>
            <p className="text-xs text-gray-500">@{user?.username}</p>
          </div>
        </span>
        <h2 className="font-bold text-neutral-700 text-3xl mt-2">
          {post?.title}
        </h2>
        <p className="text-sm my-2 text-neutral-500 ">{post?.body}</p>
      </div>

      <div className="flex items-center my-5 gap-2">
        <FaRegComment size={24} className="text-purple-500" />
        <h1 className="font-bold text-neutral-700">
          Comments({comment.length})
        </h1>
      </div>

      <div className="space-y-5 ">
        {comment.map((items) => {
          return (
            <div
              key={items.id}
              className="border border-neutral-400 p-5 rounded-2xl  hover:shadow-sm"
            >
              <h1 className="font-bold text-xl">{items.name}</h1>
              <h1 className="text-purple-500 text-sm">@{items.email}</h1>
              <h1 className="text-neutral-600 text-xs">{items.body}</h1>
            </div>
          );
        })}
        <p>{comment?.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
      </div>
    </div>
  );
}

export default DetailPost;
