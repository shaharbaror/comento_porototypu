import React, { useState } from 'react';

import classes from './NewWorkerForm.module.css';

import BackDrop from '../UI/BackDrop';
import Card from '../UI/Card';

import Button from '../UI/Button';

function NewWorkerForm(props) {

    const [userInput, setUserInput] = useState({
        name: '',
        job: '',
        manager: '' //can be used with props
    });

    function onNameChange(event) {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                name: event.target.value
            };
        });
    }

    function onJobChange(event) {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                job: event.target.value
            };
        });
    }

    function onSubmitForm(event) {
        event.preventDefault();
        if (userInput.name.length === 0) {

        } else {
            props.onSubmit(userInput);
        }

    }


    return (
        <React.Fragment>
            <BackDrop />
            <Card className={classes.body}>
                <form onSubmit={onSubmitForm}>
                    <div className={classes.text}>
                        <div>
                            <label>Full Name:</label>
                            <input type="text" onChange={onNameChange} />
                        </div>
                        <div>
                            <label>Job Title:</label>
                            <input type="text" onChange={onJobChange} />
                        </div>
                    </div>
                    <div className={classes.action} >
                        <Button type="button" onClick={props.onCancel} >Cancel</Button>
                        <Button type='submit' >Submit</Button>
                    </div>
                </form>
            </Card>
        </React.Fragment>
    );
}

export default NewWorkerForm;