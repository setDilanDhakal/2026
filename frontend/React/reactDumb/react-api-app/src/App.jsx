import { useState } from "react";
import Navigation from "./components/Navigation";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Albums from "./components/Albums";
import Photos from "./components/Photos";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";

function App() {
  const [activeTab, setActiveTab] = useState("users");
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="min-h-screen bg-light flex flex-col">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto px-4 py-8 flex-grow">
        {selectedUser ? (
          <UserProfile
            user={selectedUser}
            onBack={() => setSelectedUser(null)}
          />
        ) : (
          <>
            {activeTab === "users" && <Users onViewProfile={setSelectedUser} />}
            {activeTab === "posts" && <Posts />}
            {activeTab === "albums" && <Albums />}
            {activeTab === "photos" && <Photos />}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
