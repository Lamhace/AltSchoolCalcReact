import React, { useState } from "react"






export default function Display() {
    const [result, setResult] = useState ("")

    const clickHandler = (e) => {
        setResult (result.concat(e.target.name))
    }

    const clear = ()=>{
        setResult("")
    }

   const equals = () =>{
    setResult(eval(result).toString())
   }
    
    
   
    return (
        <div>
            
            <input className="display" type="text" value={result} />
                

           <div className="buttons">
                <button name="9" onClick={clickHandler} className="button-digits">9</button>
                <button id="clear" onClick={clear} className="button-digits">C</button>
                <button name="*" onClick={clickHandler} className="button-digits">*</button>
                <button name="/" onClick={clickHandler} className="button-digits">/</button>
                <button name="7" onClick={clickHandler} className="button-digits">7</button>
                <button name="8" onClick={clickHandler} className="button-digits">8</button>
                <button name="6" onClick={clickHandler} className="button-digits">6</button>
                <button name="-" onClick={clickHandler} className="button-digits">-</button>
                <button name="5" onClick={clickHandler} className="button-digits">5</button>
                <button name="4" onClick={clickHandler} className="button-digits">4</button>
                <button name="3" onClick={clickHandler} className="button-digits">3</button>
                <button name="+" onClick={clickHandler} className="button-digits">+</button>
                <button name="2" onClick={clickHandler} className="button-digits">2</button>
                <button name="1" onClick={clickHandler} className="button-digits">1</button>
                <button name="0" onClick={clickHandler} className="button-digits">0</button>
                <button id="equals" onClick={equals} className="button-digits">=</button>
           </div>
        </div>
    )
}