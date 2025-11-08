import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import CreatePost from "./component/CreatePost";
import CardList from "./component/CardList";
import CardListProvider from "./store/CardListProvider";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");
  return (
   
      <CardListProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>

        {/* Main content area */}
        <div className="flex flex-col flex-1">
          {/* Navbar */}
          <Header />

          {/* Page content (cards) */}
          <main className="p-6 bg-gray-50 flex-1 overflow-y-auto">
            {selectedTab === "home" ? <CardList /> : <CreatePost />}
          </main>
        </div>
      </div>
      </CardListProvider>
  );
}

export default App;
