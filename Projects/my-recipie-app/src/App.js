import React from "react";
import Routing from "./routes/Routing";
import Header from "./components/NavigationBar/Header";
//import "./shared/global/global.css";
import "./shared/global/backga.css";
import { UserProvider } from "./shared/global/provider/UserProvider"; // importerar global variabler

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
