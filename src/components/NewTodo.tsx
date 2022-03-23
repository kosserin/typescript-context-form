import React, {useRef, useContext} from 'react';
import { TodosContext } from '../store/todos-context';

import styles from './NewTodo.module.css';

const NewTodo: React.FC = () => {

    const todosCtx = useContext(TodosContext);

    const textValueRef = useRef<HTMLInputElement>(null);

    const submitFormHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const enteredText = textValueRef.current!.value;

        if(enteredText.trim().length === 0) {
            return;
        } else {
            todosCtx.addTodo(enteredText)
        }
    }

  return (
    <form onSubmit={submitFormHandler} className={styles['new-todo']}>
        <div className={styles['form-group']}>
            <label htmlFor='textInput'>Todo text:</label>
            <input ref={textValueRef} type="text" id="textInput" />
        </div>   
            <button type='submit'>Add Todo</button>    
    </form>
  )
}

export default NewTodo