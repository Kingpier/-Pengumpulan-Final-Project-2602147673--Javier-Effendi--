import axios from 'axios';

const TodoList = ({ todos, deleteTodo }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`);
      deleteTodo(id);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
