import React from "react";
import Synonyms from "./Synonyms.js"


export default function Meaning(props){

    return (
        <div>
  < br/>
            <h3> {props.meaning.partOfSpeech}</h3>
               
                  
                <h4>{props.meaning.definitions[0].definition}</h4>

                 <Synonyms data={props.meaning.synonyms}/>

                <h4>{props.meaning.definitions[0].example}</h4>
             
        </div>
    )
}