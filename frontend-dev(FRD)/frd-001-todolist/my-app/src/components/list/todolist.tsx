
import { useState } from "react"
import { TodoItem } from "./todoitem"


// Todolist 一定要capital letter
export default function Todolist(){   
    const [items, setItems]=useState<string[]>(['Buy Milk', 'Buy Banana','Buy Cherry'])

    return(
        <div>
            <div>Todo List</div>
            <div>By Alice</div>
            <input></input>
            <button>add</button>

            {
                items.map((item,index)=>{
                    <TodoItem name={item} key={index}/>
                })
            } 
        </div>
    )
}