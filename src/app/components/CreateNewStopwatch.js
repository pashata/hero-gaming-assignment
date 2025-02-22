import React, { useState } from 'react'
import { createStopwatch } from '../services';
import { StopwatchButton } from '../components';
import { useHistory } from "react-router-dom";

export default function CreateNewStopwatch() {
    const history = useHistory();
    const [isCreating, setIsCreating] = useState(false);

    const label = isCreating ? 'Creating...' : 'New';

    const createNewStopwatchHandler = () => {
        if (!isCreating) {
            setIsCreating(true);
            createStopwatch().then(({ __id }) => {
                history.push(`/single/${__id}`);
            }).catch((error) => {
                console.log('error', error)
            }).finally(() => {
                setIsCreating(false);
            })
        }
    }

    return <StopwatchButton onClick={createNewStopwatchHandler}>{label}</StopwatchButton>
}
