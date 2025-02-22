import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Todo from './components/Todo/Todo';

import { useListTodosQuery } from './api/todos';
import { setTodos } from './state/todos';

function App() {
  const dispatch = useDispatch();

  const { data: todos, isLoading } = useListTodosQuery({
    skip: 0,
    limit: 5,
    delay: 2000,
  });

  dispatch(setTodos(todos));

  return (
    <div className="App">
      {isLoading && <h1>isLoading</h1>}

      {(!isLoading && todos) && 
        <div className="todos-container">
          {todos.map(todo => (
            <Todo
              id={todo.id}
              name={todo.name}
              completed={todo.completed.toString()}
            />
          ))}
        </div>
      }

    </div>
  );
}

export default App;
