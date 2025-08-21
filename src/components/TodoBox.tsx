import AddComponent from "./addComponent";
import TodoList from "./TodoList";

const TodoBox = () => {
  return (
    <div className="add_box">
      <AddComponent/>
      <TodoList />
    </div>
  );
};

export default TodoBox;
