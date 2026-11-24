import React, {useState} from "react";
import axios from "axios";
import Results from "./Results.js";

export default function SearchEngine(){
    function handleResponse(response){
        console.log(response.data[0]);
        setData(response.data[0]);
    

    }

let [keyword, setKeyword]=useState("");
let [data, setData]= useState(null);

    function search(event){
        event.preventDefault();

        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`).then(handleResponse);
     



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
            <Results data={data} />
        </div>
    )
}