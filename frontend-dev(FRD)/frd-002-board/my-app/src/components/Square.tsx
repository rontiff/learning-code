import { SquareValue } from "./Board"

interface Props{
    value:SquareValue
}

export default function Square(props:Props){
    return (
        <div>
            {
                props.value
            }
        </div>
    )
}