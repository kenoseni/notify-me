import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  console.log({ user });

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const saveUser = () => setUser(username);

  return (
    <div className="container">
      <div className="login">
        <input type="text" placeholder="username" onChange={handleChange} />
        <button onClick={saveUser}>Login</button>
      </div>
    </div>
  );
}

export default App;
