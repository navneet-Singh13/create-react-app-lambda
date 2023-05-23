import React from 'react'
import Button from './UI/Button';
import { useState , useRef} from 'react';

const Form = (props) => {
    const nameInputRef  = useRef( ) ;
    const ageInputRef = useRef( ) ;



    const [enteredUsername , setEnteredUsername  ] =  useState('') ; 
    const [enteredAge , setEnteredAge ] =  useState('') ; 
    const addUserHandler = (event) => { 
        console.log( nameInputRef.current.value  , ageInputRef.current.value) ; 
        if ( enteredAge  === '' || enteredUsername === '') { 

            alert("you can't perform this operation") ; 
            return ; 
        } 
        else props.onAddUser(enteredUsername , enteredAge) ; 
     
    }
    const usernameChangeHandler = (e) => { 
 
          setEnteredUsername(e.target.value) ; 
    }
    const AgeChangeHandler = (e) => { 
      
        setEnteredAge(e.target.value) ; 
   }
  return (
    <>
    <label htmlFor='username'>Username</label>
    <input id = "username" type = "text" onChange={usernameChangeHandler} ref={nameInputRef}></input>  

    <label htmlFor='age'>Age (Years)</label>
    <input id = "age" type = "number" onChange={AgeChangeHandler}  ref={ageInputRef}></input>
    <Button onClick={addUserHandler} > AddUSER </Button>
     </> 
    //  FRAGMENT IN REACT 
     
  )
}

export default Form
