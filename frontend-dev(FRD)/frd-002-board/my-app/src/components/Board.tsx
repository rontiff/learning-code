import { useState } from "react"
import Square from "./Square"

export enum SquareValue{
    Cross="X",
    Circle="O",
    Null=""
}

export default function Board(){
    const [squares, setSquare] = useState<Array<SquareValue>>(Array(9).fill(SquareValue.Circle))
    return (
        <div>
            Board
            {
                squares.map((square, index)=>(
                    <Square value={square} key={index}/>
                ))
            }
        </div>
    )
}