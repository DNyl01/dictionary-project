import React from "react";
import Meaning from "./Meaning.js" 

export default function Results(props){
    console.log(props.data);

    if (props.data){
    return (<div className="Results">
        < br />
        <h1> {props.data.word}</h1>

       
        {props.data.meanings.map(function(meaning, index){
return <div key={index}>
   
     <Meaning meaning={meaning} />
</div>
        })}
    
    
    
    </div>);
} else{ return null}
}