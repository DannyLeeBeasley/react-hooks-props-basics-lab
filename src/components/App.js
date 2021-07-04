import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home 
        color={user.color}
        username={user.name}
        city={user.city}
        />
      <About 
        bio={user.bio}
        links={user.links}
        />
    </div>
  );
}

export default App;
