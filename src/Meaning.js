import React from "react";
import Synonyms from "./Synonyms.js"
import "./Meaning.css"


export default function Meaning(props){

    return (
        <div className="Meaning">
  < br/>
            <h2> {props.meaning.partOfSpeech}</h2>
               
                  
                <h4>{props.meaning.definitions[0].definition}</h4>

                 <Synonyms data={props.meaning.synonyms}/>

                <h5>{props.meaning.definitions[0].example}</h5>
             
        </div>
    )
}