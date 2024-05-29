import React from 'react';
import './TodoList.css';

interface TodoListProp {
    items: { id: string, text: string }[];
    onDeleteTodo: (id: string) => void;

}

const TodoList: React.FC<TodoListProp> = props => {


    if (props.items.length !== 0) {

        return <ul>
            {props.items.map(todo => (
                <li key={todo.id}>

                    <span>
                        {todo.text}
                    </span>
                    <button onClick={props.onDeleteTodo.bind(null, todo.id)}>Delete</button>

                </li>))}
        </ul>;
    } else {
        return <div className='centerdiv'>
            <p className='no_Data'>No Work</p>
        </div>
    }
};

export default TodoList;