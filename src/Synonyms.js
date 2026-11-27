import React from "react";
import "./Synonyms.css";

export default function Synonyms(props){


          if(props.data){
            return (<div className="Synonyms">
{props.data.map(function(synonym, index ){
    return (
    <span key={index}>{synonym}</span>
)})}
   </div>)

          } else {
            return null
          }}