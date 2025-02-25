import React, { useState } from 'react'
import { toast } from 'react-toast';
import { useHistory } from "react-router-dom";
import { createStopwatch } from '../services';
import { StopwatchButton, SpinningLoaderIcon } from '../components';

export default function CreateNewStopwatch() {
    const history = useHistory();
    const [isCreating, setIsCreating] = useState(false);

    const createNewStopwatchHandler = () => {
        if (!isCreating) {
            setIsCreating(true);
            createStopwatch().then(({ __id }) => {
                history.push(`/single/${__id}`);
            }).catch((error) => {
                toast.error(error);
            }).finally(() => {
                setIsCreating(false);
            })
        }
    }

    return (
        <StopwatchButton onClick={createNewStopwatchHandler}>
            {isCreating ? <SpinningLoaderIcon /> : 'New'}
        </StopwatchButton>
    )
}
