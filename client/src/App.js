import React,{useState} from "react";
import Navbar from "./components/Nav"
import './App.css';

function App() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <body>
        <div className="header-top">
            <div className="header-top-content">
              <input type="text" placeholder="Search decks, cards, and users..." value={search} onChange={(e) => setSearch(e.target.value)}/>
              <button>Search</button>
            </div>
        </div>

      </body>
    </div>
  );
}

export default App;
