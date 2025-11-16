import React, { useState, useContext } from "react";
import "./App.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import CreatePost from "./component/CreatePost";
import CardList from "./component/CardList";
import CardListProvider from "./store/CardListProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");
  const [search, setSearch] = useState("");

  return (
    <CardListProvider>
      <BrowserRouter>
        <div className="flex flex-col lg:flex-row h-screen w-full">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="flex flex-col flex-1 w-full">
            <Header onSearch={setSearch} />
            <main className="p-3 sm:p-4 md:p-6 flex-1 overflow-y-auto bg-gray-500 w-full">
              <Routes>
                <Route path="/" element={<CardList search={search} />} />
                <Route path="/create-post" element={<CreatePost />} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </CardListProvider>
  );
}

export default App;
