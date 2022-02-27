import { useState } from "react"

interface Props{
    name:string
}

export default function TodoItem(props:Props){
    const [count, setCount]= useState<number>(0)

    const onComplete=()=>{
        setCount(count +1)
    }
    return(
        <div>
            <button>Complete</button>
            <span>{props.name}</span>
            <span>{count}</span>
        </div>
    )
}