import React from 'react'
import { FaTrashCan } from "react-icons/fa6";
import styles from './Todo.module.css'

export default function Todo({ todo, onUpdate, onDelete }) {
    const { id, text, status } = todo
    const handleChange = (e) => {
        console.log(e.target.id)
        const status = e.target.checked ? 'completed' : 'active'
        onUpdate({ ...todo, status })
    }
    
    const handleDelete = () => {
        onDelete(todo)
    }

    return (
        <li className={styles.todo}>
            <input 
                className={styles.checkbox}
                type="checkbox" 
                id={id} 
                checked={status === 'completed'} 
                onChange={handleChange}
            />
            <label htmlFor={id} className={styles.text}>
                {text}
            </label>
            <span className={styles.icon}>
                <button onClick={handleDelete} className={styles.button}>
                    <FaTrashCan />
                </button>
            </span>
            
        </li>
    )
}
