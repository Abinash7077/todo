import React, { useState } from "react";
import { AiFillDelete } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import { BiEdit } from 'react-icons/bi';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [editingTodoId, setEditingTodoId] = useState(null);

  const handleAddTodo = () => {
    if (title && description && date) {
      const newTodo = {
        id: Date.now(),
        title: title,
        description: description,
        date: date,
      };

      setTodos([...todos, newTodo]);
      setTitle('');
      setDescription('');
      setDate('');
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setTitle(todoToEdit.title);
      setDescription(todoToEdit.description);
      setDate(todoToEdit.date);
      setEditingTodoId(id);
    }
  };

  const handleUpdateTodo = () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === editingTodoId) {
        return {
          ...todo,
          title: title,
          description: description,
          date: date,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
    setTitle('');
    setDescription('');
    setDate('');
    setEditingTodoId(null);
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center ">
      <div className="shadow-lg px-4 py-4 rounded-lg bg-gray-700 md:w-[80%] lg:w-[30%] w-[90%] h-fit border-2">
        <h1>Softevia</h1>
        <div className="flex flex-col items-center w-full h-[35px] border-2 my-4  rounded-lg">
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-black bg-gray-100 pl-4 rounded-md text-[16px] h-full w-full"
          />
        </div>
        <div className="flex flex-col items-center w-full h-[35px] border-2 my-4  rounded-lg">
          <input
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="text-black bg-gray-100 pl-4 rounded-md text-[16px] h-full w-full"
          />
        </div>
        <div className="flex flex-col items-center w-full h-[35px] border-2 my-4  rounded-lg">
          <input
            type="date"
            placeholder="Enter Title"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-gray-100 text-black pl-4 rounded-md text-[16px] h-full w-full"
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            className="bg-orange-400 text-[18px] px-[50px] py-[5px] rounded-lg text-white h-full shadow-xl"
            onClick={editingTodoId ? handleUpdateTodo : handleAddTodo}
          >
            {editingTodoId ? "Update" : "Add"}
          </button>
        </div>

        <div className="w-full h-[1px] bg-gray-100 my-8"></div>

        <div className="overflow-auto" style={{height:240}}>
        {todos.map((todo) => (
          <div key={todo.id} className="w-full py-4 h-fit border-2 rounded-lg relative mb-4">
            <ul className="flex items-center px-4 justify-start flex-col text-[16px]">
              <li className="w-full flex gap-5">
                Title: 
                {/* <input type="text" value={todo.title} className="bg-transparent" readOnly /> */}
                <p>{todo.title}</p>
              </li>
              <li className="w-full flex gap-5">
                Desc: 
                {/* <input type="text" value={todo.description} className="bg-transparent" readOnly /> */}
                <p>{todo.description}</p>
              </li>
              <li className="w-full flex gap-5">
                Date: 
                {/* <input type="text" value={todo.date} className="bg-transparent" readOnly /> */}
                <p>{todo.description}</p>
              </li>
              <div className="flex w-full right-0 my-4 items-center justify-end gap-10 mr-5">
                <AiFillDelete onClick={() => handleDeleteTodo(todo.id)} />
                {/* <TiTick onClick={() => handleUpdateTodo()}/> */}
                <BiEdit className="" onClick={() => handleEditTodo(todo.id)} />
              </div>
            </ul>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
