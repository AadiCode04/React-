import { useState } from "react"

export default function LudoBoard() {
    let [ move ,setMove] = useState({ blue : 0 , red : 0 , yellow : 0 , green : 0 });
    let [ count , setCount ] = useState(0);

    let updateBlue = ()=>{
        setMove({...move , blue : move.blue + 1 })
    }
    let updateYellow = ()=>{
        setMove({...move , yellow : move.yellow + 1 })
    }
    let updateGreen = ()=>{
        setMove({...move , green : move.green+ 1 })
    }
    let updateRed = ()=>{
        setMove({...move , red : move.red + 1 })
    }

    return(
        <div>
            <p>Game Begins</p>
            <div className="board">
                <p>Blue moves = {move.blue}</p>
                <button style={{ backgroundColor :"blue"}} onClick = {updateBlue}>+1</button>
                <p>Yellow moves ={move.yellow} </p>
                <button style={{ backgroundColor :"yellow", color:"black"}}  onClick={updateYellow}>+1</button>
                <p>Green moves = {move.green} </p>
                <button style={{ backgroundColor :"green"}} onClick={updateGreen}>+1</button>
                <p>Red moves = {move.red} </p>
                <button style={{ backgroundColor :"red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}