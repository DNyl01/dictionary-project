import React, {useState} from "react";
import axios from "axios";

export default function SearchEngine(){
    function handleResponse(response){
        console.log(response.data);
    

    }

let [keyword, setKeyword]=useState("");

    function search(event){
        event.preventDefault();

        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`).then(handleResponse);
       alert(`Searching for ${keyword}`);



    }
    function StoreKeyword(event){

        setKeyword(event.target.value);

    }

    return (
        <div>
            <form onSubmit={search}>
<input type="Search" onChange={StoreKeyword}placeholder="Type a word"></input>
<button type="submit">Search</button>
            </form>
        </div>
    )
}