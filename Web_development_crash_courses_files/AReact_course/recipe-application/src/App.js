import React from "react";
import { Routing } from "./routes/Routing";
import { NavigationBar } from "./components/navigationbar/NavigationBar";
import "./shared/global/global.css";
import { UserProvider } from "./shared/global/provider/UserProvider";
function App() {
  return (
    <UserProvider>
      <Routing>
        <NavigationBar />
      </Routing>
    </UserProvider>
  );
}

export default App;
