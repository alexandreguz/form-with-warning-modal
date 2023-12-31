import Card from "../Ui/Card";
import Button from "../Ui/Button";
import classes from "./AddUser.module.css"
import React, { useState } from "react";
import ErrorModal from "../Ui/ErrorModal";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] =  useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] =  useState();

    const userNameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    };

    const AddUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError(
                {title: "Invalid Input",
                message: "Please enter a valid name and age (non empty values)"}
                )
            return
        };
        if (+enteredAge < 1) {
            setError(
                {title: "Invalid Age",
                message: "Please enter a valid age (> 0)"}
                )
                return
        };
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('');
        setEnteredAge('');
    }

    const errorHandler = () => {
        setError(null)
    }

   return (
    <React.Fragment>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
     <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUsername} onChange={userNameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
     </form>
    </Card>
    </React.Fragment>
 );
};

export default AddUser