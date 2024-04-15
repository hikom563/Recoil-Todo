import React from "react";
import { useRecoilValue } from "recoil";
import TodoListStats from "./TodoListStats";
import TodoListFilter from "./TodoListFilter";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import { filteredTodoListState } from "../recoilState";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      <TodoListStats />
      <div style={{ display: 'flex', gap: '10px' }}>
        <TodoItemCreator />
        <TodoListFilter />
      </div>
      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}

    </>
  );
};

export default TodoList;
