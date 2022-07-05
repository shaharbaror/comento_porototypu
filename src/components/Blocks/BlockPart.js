import React, { useState } from 'react';

import styles from './BlockPart.module.css';
import NewWorkerForm from '../NewWorker/NewWorkerForm';

import Card from '../UI/Card';

const DUMMY_WORKER = [
    {
        name: '',
        profile: '',
        job: '',
        id: '0.1',
    }
];

function BlockPart(props) {

    const [showForm, setShowForm] = useState(false);
    const [showChild, setShowChild] = useState(false);

    const [workers, setWorkers] = useState(DUMMY_WORKER);

    function showTheForm() {
        setShowForm(true);
    }
    function hideForm() {
        setShowForm(false);
    }

    function submitFormHandler(worker) {
        const newWorker = {
            ...worker,
            id: Math.random().toString()
        };
        setShowForm(false);
        if (workers[0].name === '') {
            setWorkers([newWorker]);
        } else {
            setWorkers((prevWorkers) => {
                return [...prevWorkers, newWorker]
            })
        }
        setShowChild(true);
    }


    return (
        <Card>
            <div className={`${styles.block} ${props.isKid && styles['main_block']}`}>
                <div>
                    <div>
                        <div>
                            <img src={props.worker.profile} />
                            <label> {props.worker.name} </label>
                        </div>
                        <div>
                            <p>{props.worker.position}</p>
                        </div>
                    </div>
                    <div>
                        {!showForm && <button onClick={showTheForm} >+</button>}
                    </div>
                    {showForm && <NewWorkerForm onCancel={hideForm} onSubmit={submitFormHandler} />}
                </div>
                {showChild && workers.map((worker) => {
                    return <BlockPart isKid={true} worker={worker} key={worker.id} />;
                })}
            </div>
        </Card>
    );
}

export default BlockPart;