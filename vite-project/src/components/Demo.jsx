import { useState, useRef } from "react";
import "./demo.css";


function Demo(){

    let x=0;  // local variable

    const [y,sety] = useState(0); // state variables

    const z = useRef(0);  // it is an object

    console.log(z);
    console.log(z.current);

    function handleupdate(){
        x = x+1;
        console.log(x);
    }
    function handleupdatey(){
        sety(y+1);
        console.log(y);
    }

    function handleZ(){
        z.current = z.current + 1;
        console.log("z",z.current);
    }

    return(
        <>
        <div className="container">
            <h1>x : {x}</h1>
            <h1> y : {y}</h1>
            <button onClick={handleupdate}>increase</button>
            <button onClick={handleupdatey}>increase y</button>
            <h1>z : {z.current}</h1>
            <button onClick={handleZ}>increase Z</button>
        </div>
        </>
    )
}

export default Demo;