import React, {useState} from 'react';
import './App.css';
import Todos from "./components/todos";
import Todo from "./models/todo";
import NewTodo from "./components/newTodo";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    // const todos = [new Todo('Learn React'), new Todo('Learn typescript')];

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);

      setTodos((prevState) => {
          return prevState.concat(newTodo);
      })
    }

    const onRemoveTodo = (todoId: string) => {
        setTodos((prevState) => {
            return prevState.filter((todo) => todo.id !== todoId);
        })
    }

  return (
    <div className="App">
        <NewTodo addTodoHandler={addTodoHandler} />
        <Todos items={todos} onRemoveTodo={onRemoveTodo}/>
    </div>
  );
}

export default App;
