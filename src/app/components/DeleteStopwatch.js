import * as React from 'react'
import { FiTrash2, FiCheck, FiX } from "react-icons/fi";
import { deleteStopwatch } from '../services';
import { ButtonIcon } from '../components';

/**
 * @param {Object} props
 * @param {number} props.id
 */
export default function DeleteStopwatch({ id }) {
    const [isConfirm, setIsConfirm] = React.useState(false);

    const toggleConfirm = () => {
        setIsConfirm(oldState => !oldState)
    };

    const deleteHandler = () => {
        deleteStopwatch(id);
    };

    return (
        <>
            {!isConfirm && (
                <ButtonIcon theme="danger" onClick={toggleConfirm}>
                    <FiTrash2 />      
                </ButtonIcon>
            )}
            {isConfirm && (
                <>
                    <ButtonIcon theme="success" onClick={deleteHandler}>
                        <FiCheck />      
                    </ButtonIcon>
                    <ButtonIcon theme="danger" onClick={toggleConfirm}>
                        <FiX />      
                    </ButtonIcon>
                </>
            )}
        </>
    )
}