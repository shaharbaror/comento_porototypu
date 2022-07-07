import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import styles from './BlockPart.module.css';
import NewWorkerForm from '../NewWorker/NewWorkerForm';

import Card from '../UI/Card';
import Button from '../UI/Button';

import Trash from '../Image/trash.png';


const DUMMY_WORKER = [
    {
        name: '',
        profile: '',
        job: '',
        id: '0.1',
    }
];

const WorkerForm = props => {
    return <NewWorkerForm onCancel={props.hideForm} onSubmit={props.submitFormHandler} />;
};

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
        <React.Fragment>
            {showForm && ReactDOM.createPortal(<WorkerForm hideForm={hideForm} submitFormHandler={submitFormHandler} />, document.getElementById('overlay-root'))}
            <Card className={`${styles.block} ${!props.isKid && styles.mainblock}`} >
                <div>
                    <Button className={styles['edit_btn']} >✎</Button>
                    <Button className={styles['delete_btn']}><img src={Trash} /></Button>
                </div>
                <div className={styles['worker_data']} >
                    <div>
                        <div>
                            <img src={props.worker.profile} />
                            <label > {props.worker.name} </label>
                        </div>
                        <div>
                            <p>{props.worker.job}</p>
                        </div>
                    </div>
                    <div>
                        {!showForm && <button className={styles['add_btn']} onClick={showTheForm} >+</button>}
                    </div>
                </div>
                {showChild && workers.map((worker) => {
                    return <BlockPart isKid={true} worker={worker} key={worker.id} />;
                })}

            </Card>
        </React.Fragment>

    );
}

export default BlockPart;