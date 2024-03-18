
import { render } from "@testing-library/react";
import React from "react";

function Properties (props){
 return(
    <h1>hello {props.name1}</h1>,
     <h2>hello {props.name}</h2>
 )

}

export default Properties;
