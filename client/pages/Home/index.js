import React,{useState} from "react";



const Home = () => {
    const [search, setSearch] = useState("");
    return(
        <div>
            <h1>Home</h1>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <button>Search</button>
        </div>
    )
}

export default Home