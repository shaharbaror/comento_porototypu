import React, { useState } from 'react';
import styles from './MainBlock.module.css';

import BlockPart from './BlockPart';

const DUMMY_WORKERS = [
    {
        name: "Yuval",
        job: "CEO",
        id: "1",
    },
    {
        name: "Asaf",
        job: "CEO",
        id: "2",
    }
];


function MainBlock(props) {

    const [workerID, setWorkerID] = useState(3);
    const [workers, setWorkers] = useState(DUMMY_WORKERS);

    function onNewWorker(worker) {
        const newWokrer = {
            ...worker,
            id: workerID.toString()
        };
        setWorkerID(prevID => {
            return prevID + 1;
        });

        setWorkers((prevWorkers) => {
            return [...prevWorkers, newWokrer];
        })

    }



    return (
        <div className={styles.main_body}>
            {workers.map((worker) => {
                return <BlockPart isKid={false} worker={worker} key={worker.id} />
            })}
        </div>
    );
}

export default MainBlock;