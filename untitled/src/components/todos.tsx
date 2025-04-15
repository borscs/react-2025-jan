import {FC} from "react";
import Todo from "../models/todo";
import TodoItem from "./todoItem";

import classes from "./Todos.module.css";


const Todos: FC<{items: Todo[], onRemoveTodo: (id: string) => void}> = (props) => {

	return (
		<ul className={classes.todos}>
			{props.items.map((item) => (
				<TodoItem text={item.text} key={item.id} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}/>
			))}
		</ul>
	)
}


export default Todos;
