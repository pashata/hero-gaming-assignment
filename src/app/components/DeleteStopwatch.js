import React, { useCallback } from 'react'
import { FiTrash2, FiCheck, FiX, FiLoader } from "react-icons/fi";
import { deleteStopwatch } from '../services';
import { ButtonIcon } from '../components';
import { useListPageContext } from '../hooks';

/**
 * @param {Object} props
 * @param {number} props.id
 */
export default function DeleteStopwatch({ id }) {
    const [isConfirm, setIsConfirm] = React.useState(false);
    const [isDeleting, setIsDeleting] = React.useState(false);
    const { fetchHandler } = useListPageContext();

    const toggleConfirm = () => {
        setIsConfirm(oldState => !oldState)
    };

    const deleteHandler = useCallback(() => {
        setIsDeleting(true);
        deleteStopwatch(id)
            .then(() => {
                fetchHandler(true);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsDeleting(false);
            });
    });

    if (isDeleting) {
        return <FiLoader />
    }

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