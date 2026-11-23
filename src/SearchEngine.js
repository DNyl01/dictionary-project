import React, {useState} from "react";

export default function SearchEngine(){
let [keyword, setKeyword]=useState("");

    function handleResponse(event){
        event.preventDefault();
       alert(`Searching for ${keyword}`);


    }
    function StoreKeyword(event){
        event.preventDefault();
        setKeyword(event.target.value);

    }
    return (
        <div>
            <form onSubmit={handleResponse}>
<input type="Search" onChange={StoreKeyword}placeholder="Type a word"></input>
<button type="submit">Search</button>
            </form>
        </div>
    )
}