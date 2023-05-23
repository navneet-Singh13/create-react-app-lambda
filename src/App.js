import React ,{ useState } from 'react';

import './App.css';
import Form from './components/form';
import UsersList from './components/UsersList';

function App() {
  const [ usersList , setUsersList] = useState([]) ; 
  const addUserHandler = (uName , uAge) => { 
     setUsersList((prev)=>{ 
      return [...prev ,{ name : uName ,age : uAge , id : Math.random().toString()} ] ; 
     })
  }
  return (
    <div className="App">
       <Form onAddUser = {addUserHandler}/> 
       <UsersList users = {usersList} /> 
    </div>
  );
}

export default App;
