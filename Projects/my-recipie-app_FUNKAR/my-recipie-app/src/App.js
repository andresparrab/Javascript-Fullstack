import React from "react";
import "./App.css";
import Header from "./components/Header";
import Routing from "./components/Routing";

import { UserProvider } from "./components/UserProvider"; // importerar global variabler

function App() {
  return (
    <UserProvider>
      <Routing>
        <Header />
      </Routing>
    </UserProvider>
  );
}

export default App;
