import { isDoStatement } from "typescript"
import {useState} from 'react'

export function Todolist(){
    return <>
    <h1>Todo List</h1>
    <TodoItem text="buy milk"/>
    <TodoItem text="buy banana"/>
    <TodoItem text="buy apple"/>
    </>

}
export function TodoItem(props:{text:string}){
    const {text} = props
    const [done, setIsDone]=useState(false)
    return (
        <div>
            <input type="checkbox"
            checked={isDone}
            onChange={e => setIsDone(e.currentTarget.checked)}
            ></input>
            {!isDone ? text :<s>{test}</s>} 
        </div>
        
    )
    }