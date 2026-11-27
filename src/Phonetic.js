import React from "react";
import  "./Phonetics.css"

export default function Phonetic(props){
    return (<div className="Phonetics">
        <section>   
               {props.phonetic.text}    
     <a href={props.phonetic.audio} traget="_blank"> Listen </a>
      
     
        </section>

    </div>);
}