import React, {useRef} from 'react';

import styles from './TodoItem.module.css';

const TodoItem: React.FC<{text: string; id: string; onRemoveTodo: (id: string) => void}> = (props) => {

    const idValueRef = useRef<HTMLLIElement>(null);

    const removeTodoHandler = () => {   
        const clickedLiId = idValueRef.current!.id;
        props.onRemoveTodo(clickedLiId)
    }

  return (
    <li id={props.id} ref={idValueRef} onClick={removeTodoHandler} className={styles['todo-item']}>{props.text}</li>
  )
}

export default TodoItem