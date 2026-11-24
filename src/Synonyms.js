import React from "react";

export default function Synonyms(props){


          if(props.data){
            return (<div>
{props.data.map(function(synonym, index ){
    return <ul>
        <li key={index}>
            {synonym}
        </li>
    </ul>
})}



       </div> );

          }else{
            return null
          }

  
}