import {FC, FormEvent, useRef} from "react";

import classes from "./NewTodo.module.css";

const NewTodo: FC<{addTodoHandler: (todoText: string) => void}> = (props) => {
	const todoTextInputRef = useRef<HTMLInputElement>(null);


	const submitHandler = (event: FormEvent) => {
		event.preventDefault();

		const enteredText = todoTextInputRef.current!.value;

		if (enteredText.trim().length === 0) {
			// throw an error
			return;
		}

		props.addTodoHandler(enteredText);
	}

	return	(
		<form onSubmit={submitHandler} className={classes.form}>
			<label htmlFor={'text'}>Todo Text</label>
			<input type='text' id={'text'} ref={todoTextInputRef} />
			<button>Add Todo</button>
		</form>
	)
}

export default NewTodo;
