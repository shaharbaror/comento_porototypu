import React, { useState } from 'react';

import Card from '../UI/Card';

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
        props.onSubmit(userInput);

    }


    return (
        <Card>
            <form onSubmit={onSubmitForm}>
                <div>
                    <div>
                        <label>Name:</label>
                        <input type="text" onChange={onNameChange} />
                    </div>
                    <div>
                        <label>Job:</label>
                        <input type="text" onChange={onJobChange} />
                    </div>
                </div>
                <div>
                    <button type="button" onClick={props.onCancel} >Cancel</button>
                    <button type='submit' >Submit</button>
                </div>
            </form>
        </Card>
    );
}

export default NewWorkerForm;