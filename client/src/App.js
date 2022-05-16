import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/card/Card";
import { Navbar } from "./components/navbar/Navbar";
import { posts } from "./data";

import { io } from "socket.io-client";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io("http://localhost:4000"));
  }, []);

  useEffect(() => {
    socket?.emit("newUser", user);
  }, [socket, user]);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const saveUser = () => setUser(username);

  return (
    <div className="container">
      {user ? (
        <>
          <Navbar socket={socket} />
          {posts.map((post) => (
            <Card key={post.id} post={post} socket={socket} user={user} />
          ))}

          <span className="username">{user}</span>
        </>
      ) : (
        <div className="login">
          <input type="text" placeholder="username" onChange={handleChange} />
          <button onClick={saveUser}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
