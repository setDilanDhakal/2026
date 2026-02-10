import { useState, useEffect } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-12 text-primary text-xl">Loading posts...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md p-4 md:p-6 border-t-4 border-secondary hover:shadow-xl transition-shadow duration-200"
          >
            <div className="flex flex-wrap items-start gap-2 md:gap-3 mb-3">
              <span className="bg-accent text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                #{post.id}
              </span>
              <span className="bg-secondary/30 text-primary px-2 md:px-3 py-1 rounded-full text-xs">
                User {post.userId}
              </span>
            </div>
            <h3 className="text-base md:text-lg font-bold text-primary mb-3 capitalize line-clamp-2">
              {post.title}
            </h3>
            <p className="text-primary/80 text-xs md:text-sm line-clamp-4">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
