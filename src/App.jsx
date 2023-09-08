import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

const App = () => {
  const [notes, setNotes] = useState([])

  const handelAddTodo = (note) => {
    setNotes((prevNotes) => {
      const newNote = { id: uuidv4(), note };
      const updatedNotes = [...prevNotes, newNote];
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      return updatedNotes;
    });
    toast("✅ Added Successfully");
  }

  const removeNotes = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
    localStorage.setItem('notes', JSON.stringify(filterNotes));
    toast("✅ Deleted Successfully");
  }

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);


  return (
    <div className='flex flex-col  justify-center items-center bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-sky-200 to-90% lg:max-w-[45rem] p-5 mx-auto w-screen h-screen rounded-sm sm:h-[36rem] '>
      <h1 className='text-base-100 text-2xl font-bold mb-5 underline'>Notes App</h1>
      <Todos todos={notes} removeTodo={removeNotes} />
      <AddTodo onAddTodo={handelAddTodo} />
      <ToastContainer />
    </div>
  )
}

export default App