import './Todo.css';

function Todo({ id, name, completed }) {
  return (
    <div className="todo-container">
      <p>id: {id}</p>
      <p>name: {name}</p>
      <p>complete: {completed}</p>
    </div>
  );
}

export default Todo;