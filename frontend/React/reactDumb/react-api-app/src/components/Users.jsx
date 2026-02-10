import { useState, useEffect } from 'react';

const Users = ({ onViewProfile }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-12 text-primary text-xl">Loading users...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Users</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow-md p-4 md:p-6 border-l-4 border-accent hover:shadow-xl transition-shadow duration-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center text-light text-lg md:text-xl font-bold flex-shrink-0">
                {user.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <h3 className="text-lg md:text-xl font-semibold text-primary truncate">{user.name}</h3>
                <p className="text-secondary text-xs md:text-sm truncate">@{user.username}</p>
              </div>
            </div>
            <div className="space-y-2 text-xs md:text-sm">
              <p className="text-primary truncate">
                <span className="font-semibold">Email:</span> {user.email}
              </p>
              <p className="text-primary">
                <span className="font-semibold">Phone:</span> {user.phone}
              </p>
              <p className="text-primary truncate">
                <span className="font-semibold">Website:</span> {user.website}
              </p>
              <p className="text-primary truncate">
                <span className="font-semibold">Company:</span> {user.company.name}
              </p>
              <p className="text-primary">
                <span className="font-semibold">City:</span> {user.address.city}
              </p>
            </div>
            <button
              onClick={() => onViewProfile(user)}
              className="mt-4 w-full bg-primary text-light py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold text-sm md:text-base"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
